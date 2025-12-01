import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET - Fetch contact info
export async function GET() {
  try {
    const result = await pool.query(`
      SELECT * FROM contact_info 
      ORDER BY updated_at DESC 
      LIMIT 1
    `);

    if (result.rows.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No contact info found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: result.rows[0]
    });

  } catch (error) {
    console.error('Contact info fetch error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch contact info'
    }, { status: 500 });
  }
}

// PUT - Update contact info
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
      email, phone, address_tr, address_en,
      linkedin_url, instagram_url
    } = body;

    // Get user ID
    const userResult = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [session.user.email]
    );
    const userId = userResult.rows[0]?.id;

    // Check if contact info exists
    const existingResult = await pool.query(`
      SELECT id FROM contact_info ORDER BY updated_at DESC LIMIT 1
    `);

    if (existingResult.rows.length > 0) {
      // Update existing
      const result = await pool.query(`
        UPDATE contact_info 
        SET email = $1, phone = $2, address_tr = $3, address_en = $4,
            linkedin_url = $5, instagram_url = $6,
            updated_by = $7, updated_at = CURRENT_TIMESTAMP
        WHERE id = $8
        RETURNING *
      `, [
        email, phone, address_tr, address_en,
        linkedin_url, instagram_url, userId,
        existingResult.rows[0].id
      ]);

      return NextResponse.json({
        success: true,
        data: result.rows[0],
        message: 'Contact info updated successfully'
      });
    } else {
      // Create new
      const result = await pool.query(`
        INSERT INTO contact_info (
          email, phone, address_tr, address_en,
          linkedin_url, instagram_url, updated_by
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
      `, [
        email, phone, address_tr, address_en,
        linkedin_url, instagram_url, userId
      ]);

      return NextResponse.json({
        success: true,
        data: result.rows[0],
        message: 'Contact info created successfully'
      });
    }

  } catch (error) {
    console.error('Contact info update error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to update contact info'
    }, { status: 500 });
  }
}
