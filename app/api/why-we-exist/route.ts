import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Get why_sections data
    const sectionResult = await pool.query(
      'SELECT * FROM why_sections ORDER BY id DESC LIMIT 1'
    );

    if (sectionResult.rows.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'No content found'
      }, { status: 404 });
    }

    const section = sectionResult.rows[0];

    // Get images with their media info
    const imagesResult = await pool.query(`
      SELECT 
        wi.image_position,
        m.firebase_url,
        m.original_filename,
        m.file_type
      FROM why_images wi
      LEFT JOIN media m ON wi.media_id = m.id
      WHERE wi.section_id = $1
      ORDER BY wi.image_position
    `, [section.id]);

    // Organize images by position
    const images = {
      image_1: null as string | null,
      image_2: null as string | null,
      image_3: null as string | null,
    };

    imagesResult.rows.forEach((row: any) => {
      if (row.image_position === 1) images.image_1 = row.firebase_url;
      if (row.image_position === 2) images.image_2 = row.firebase_url;
      if (row.image_position === 3) images.image_3 = row.firebase_url;
    });

    return NextResponse.json({
      success: true,
      data: {
        main_title_en: section.main_title_en,
        main_title_tr: section.main_title_tr,
        left_title_en: section.left_title_en,
        left_title_tr: section.left_title_tr,
        right_paragraph_1_en: section.right_paragraph_1_en,
        right_paragraph_1_tr: section.right_paragraph_1_tr,
        right_paragraph_2_en: section.right_paragraph_2_en,
        right_paragraph_2_tr: section.right_paragraph_2_tr,
        bottom_text_en: section.bottom_text_en,
        bottom_text_tr: section.bottom_text_tr,
        images
      }
    });

  } catch (error) {
    console.error('Error fetching why we exist data:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch data'
    }, { status: 500 });
  }
}
