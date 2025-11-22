import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET - Fetch why we exist data
export async function GET() {
  try {
    // Get why section data
    const sectionResult = await pool.query(`
      SELECT * FROM why_sections 
      ORDER BY created_at DESC 
      LIMIT 1
    `);

    if (sectionResult.rows.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No why we exist content found'
      }, { status: 404 });
    }

    const section = sectionResult.rows[0];

    // Get images for this section
    const imagesResult = await pool.query(`
      SELECT wi.*, m.url, m.filename, m.alt_text_tr, m.alt_text_en
      FROM why_images wi
      LEFT JOIN media m ON wi.media_id = m.id
      WHERE wi.why_section_id = $1
      ORDER BY wi.order_no ASC
    `, [section.id]);

    return NextResponse.json({
      success: true,
      data: {
        section,
        images: imagesResult.rows
      }
    });

  } catch (error) {
    console.error('Why we exist fetch error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch why we exist content'
    }, { status: 500 });
  }
}

// PUT - Update why we exist content
export async function PUT(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({
        success: false,
        error: 'Unauthorized'
      }, { status: 401 });
    }

    const body = await request.json();
    const {
      section_title_tr, section_title_en,
      paragraph1_tr, paragraph1_en,
      paragraph2_tr, paragraph2_en,
      paragraph3_tr, paragraph3_en,
      images // Array of {media_id, caption_tr, caption_en, order_no}
    } = body;

    // Validate required fields
    if (!section_title_en || !section_title_tr) {
      return NextResponse.json({
        success: false,
        error: 'Section title in both languages is required'
      }, { status: 400 });
    }

    // Get current section
    const currentResult = await pool.query(`
      SELECT id FROM why_sections ORDER BY created_at DESC LIMIT 1
    `);

    let sectionId;

    if (currentResult.rows.length > 0) {
      // Update existing section
      sectionId = currentResult.rows[0].id;
      await pool.query(`
        UPDATE why_sections 
        SET section_title_tr = $1, section_title_en = $2,
            paragraph1_tr = $3, paragraph1_en = $4,
            paragraph2_tr = $5, paragraph2_en = $6,
            paragraph3_tr = $7, paragraph3_en = $8,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $9
      `, [
        section_title_tr, section_title_en,
        paragraph1_tr, paragraph1_en,
        paragraph2_tr, paragraph2_en,
        paragraph3_tr, paragraph3_en,
        sectionId
      ]);
    } else {
      // Create new section
      const newSectionResult = await pool.query(`
        INSERT INTO why_sections (
          section_title_tr, section_title_en,
          paragraph1_tr, paragraph1_en,
          paragraph2_tr, paragraph2_en,
          paragraph3_tr, paragraph3_en
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id
      `, [
        section_title_tr, section_title_en,
        paragraph1_tr, paragraph1_en,
        paragraph2_tr, paragraph2_en,
        paragraph3_tr, paragraph3_en
      ]);
      sectionId = newSectionResult.rows[0].id;
    }

    // Update images if provided
    if (images && Array.isArray(images)) {
      // Delete existing images
      await pool.query('DELETE FROM why_images WHERE why_section_id = $1', [sectionId]);
      
      // Insert new images
      for (const img of images) {
        if (img.media_id) {
          await pool.query(`
            INSERT INTO why_images (why_section_id, media_id, caption_tr, caption_en, order_no)
            VALUES ($1, $2, $3, $4, $5)
          `, [sectionId, img.media_id, img.caption_tr, img.caption_en, img.order_no]);
        }
      }
    }

    // Return updated data
    const updatedSection = await pool.query(`
      SELECT * FROM why_sections WHERE id = $1
    `, [sectionId]);

    const updatedImages = await pool.query(`
      SELECT wi.*, m.url, m.filename, m.alt_text_tr, m.alt_text_en
      FROM why_images wi
      LEFT JOIN media m ON wi.media_id = m.id
      WHERE wi.why_section_id = $1
      ORDER BY wi.order_no ASC
    `, [sectionId]);

    return NextResponse.json({
      success: true,
      data: {
        section: updatedSection.rows[0],
        images: updatedImages.rows
      },
      message: 'Why we exist content updated successfully'
    });

  } catch (error) {
    console.error('Why we exist update error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to update why we exist content'
    }, { status: 500 });
  }
}
