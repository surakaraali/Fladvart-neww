import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET - Fetch services with collection info
export async function GET() {
  try {
    // Get service collection
    const collectionResult = await pool.query(`
      SELECT sc.*, m.url as hero_image_url, m.filename, m.alt_text_tr, m.alt_text_en
      FROM service_collections sc
      LEFT JOIN media m ON sc.hero_media_id = m.id
      WHERE sc.slug = 'homepage_services'
      LIMIT 1
    `);

    if (collectionResult.rows.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No service collection found'
      }, { status: 404 });
    }

    const collection = collectionResult.rows[0];

    // Get services for this collection
    const servicesResult = await pool.query(`
      SELECT s.*, m.url as service_image_url, m.filename, m.alt_text_tr, m.alt_text_en
      FROM services s
      LEFT JOIN media m ON s.media_id = m.id
      WHERE s.collection_id = $1 AND s.is_active = true
      ORDER BY s.order_no ASC
    `, [collection.id]);

    // Get service contents for each service
    const services = [];
    for (const service of servicesResult.rows) {
      const contentResult = await pool.query(`
        SELECT sc.*, m.url as extra_image_url, m.filename, m.alt_text_tr, m.alt_text_en
        FROM service_contents sc
        LEFT JOIN media m ON sc.extra_media_id = m.id
        WHERE sc.service_id = $1
      `, [service.id]);

      services.push({
        ...service,
        content: contentResult.rows[0] || null
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        collection,
        services
      }
    });

  } catch (error) {
    console.error('Services fetch error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch services'
    }, { status: 500 });
  }
}

// POST - Create new service
export async function POST(request: NextRequest) {
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
    const { name_tr, name_en, media_id, content_tr, content_en, extra_media_id } = body;

    // Validate required fields
    if (!name_en || !name_tr) {
      return NextResponse.json({
        success: false,
        error: 'Service name in both languages is required'
      }, { status: 400 });
    }

    // Get homepage services collection
    const collectionResult = await pool.query(`
      SELECT id FROM service_collections WHERE slug = 'homepage_services' LIMIT 1
    `);

    if (collectionResult.rows.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Service collection not found'
      }, { status: 404 });
    }

    const collectionId = collectionResult.rows[0].id;

    // Get next order number
    const orderResult = await pool.query(`
      SELECT COALESCE(MAX(order_no), 0) + 1 as next_order 
      FROM services WHERE collection_id = $1
    `, [collectionId]);

    const nextOrder = orderResult.rows[0].next_order;

    // Create service
    const serviceResult = await pool.query(`
      INSERT INTO services (collection_id, name_tr, name_en, media_id, order_no)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `, [collectionId, name_tr, name_en, media_id, nextOrder]);

    const serviceId = serviceResult.rows[0].id;

    // Create service content if provided
    if (content_tr || content_en) {
      await pool.query(`
        INSERT INTO service_contents (service_id, content_tr, content_en, extra_media_id)
        VALUES ($1, $2, $3, $4)
      `, [serviceId, content_tr, content_en, extra_media_id]);
    }

    return NextResponse.json({
      success: true,
      data: serviceResult.rows[0],
      message: 'Service created successfully'
    });

  } catch (error) {
    console.error('Service creation error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to create service'
    }, { status: 500 });
  }
}

// PUT - Update service collection or individual service
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
      type, // 'collection' or 'service'
      id,
      title_tr, title_en, hero_media_id, // for collection
      name_tr, name_en, media_id, content_tr, content_en, extra_media_id // for service
    } = body;

    if (type === 'collection') {
      // Update service collection
      const result = await pool.query(`
        UPDATE service_collections 
        SET title_tr = $1, title_en = $2, hero_media_id = $3, updated_at = CURRENT_TIMESTAMP
        WHERE slug = 'homepage_services'
        RETURNING *
      `, [title_tr, title_en, hero_media_id]);

      return NextResponse.json({
        success: true,
        data: result.rows[0],
        message: 'Service collection updated successfully'
      });
    } else if (type === 'service') {
      if (!id) {
        return NextResponse.json({
          success: false,
          error: 'Service ID is required'
        }, { status: 400 });
      }

      // Update service
      const serviceResult = await pool.query(`
        UPDATE services 
        SET name_tr = $1, name_en = $2, media_id = $3, updated_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING *
      `, [name_tr, name_en, media_id, id]);

      if (serviceResult.rows.length === 0) {
        return NextResponse.json({
          success: false,
          error: 'Service not found'
        }, { status: 404 });
      }

      // Update service content
      const contentExists = await pool.query(`
        SELECT id FROM service_contents WHERE service_id = $1
      `, [id]);

      if (contentExists.rows.length > 0) {
        await pool.query(`
          UPDATE service_contents 
          SET content_tr = $1, content_en = $2, extra_media_id = $3, updated_at = CURRENT_TIMESTAMP
          WHERE service_id = $4
        `, [content_tr, content_en, extra_media_id, id]);
      } else {
        await pool.query(`
          INSERT INTO service_contents (service_id, content_tr, content_en, extra_media_id)
          VALUES ($1, $2, $3, $4)
        `, [id, content_tr, content_en, extra_media_id]);
      }

      return NextResponse.json({
        success: true,
        data: serviceResult.rows[0],
        message: 'Service updated successfully'
      });
    }

    return NextResponse.json({
      success: false,
      error: 'Invalid type specified'
    }, { status: 400 });

  } catch (error) {
    console.error('Service update error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to update service'
    }, { status: 500 });
  }
}
