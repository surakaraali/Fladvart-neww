import { pool } from '@/lib/db';
import bcrypt from 'bcryptjs';

async function initializeDatabase() {
  try {
    console.log('Creating tables...');

    // Users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(150) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(20) DEFAULT 'admin',
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Password resets table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS password_resets (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        reset_token VARCHAR(255) NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        is_used BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Pages table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS pages (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(50) UNIQUE NOT NULL,
        title VARCHAR(150),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Page contents table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS page_contents (
        id SERIAL PRIMARY KEY,
        page_id INT NOT NULL,
        content_type VARCHAR(20) DEFAULT 'paragraph',
        content_text TEXT,
        content_url VARCHAR(255),
        order_no INT DEFAULT 0,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE
      )
    `);

    console.log('Tables created successfully!');

    // Create default admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await pool.query(`
      INSERT INTO users (name, email, password_hash, role) 
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (email) DO NOTHING
    `, ['Admin User', 'admin@fladvart.com', hashedPassword, 'admin']);

    // Create homepage
    await pool.query(`
      INSERT INTO pages (slug, title) 
      VALUES ('homepage', 'Anasayfa')
      ON CONFLICT (slug) DO NOTHING
    `);

    // Get homepage id
    const homepageResult = await pool.query(`
      SELECT id FROM pages WHERE slug = 'homepage'
    `);
    const homepageId = homepageResult.rows[0]?.id;

    if (homepageId) {
      // Insert sample homepage content
      const sampleContents = [
        {
          content_type: 'heading',
          content_text: 'FALAN FILAN',
          order_no: 1
        },
        {
          content_type: 'paragraph',
          content_text: 'We believe design is more than aesthetics — it\'s a force that inspires, connects, and transforms. At our studio, we craft bold visual identities, immersive digital experiences, and stories that resonate across',
          order_no: 2
        },
        {
          content_type: 'heading',
          content_text: 'Social Media & Campaign Design',
          order_no: 3
        },
        {
          content_type: 'paragraph',
          content_text: 'We design scroll-stopping visuals and cohesive campaigns that speak your brand\'s language across platforms. From branded templates',
          order_no: 4
        },
        {
          content_type: 'heading',
          content_text: 'Your Vision, Our Design Fuel',
          order_no: 5
        },
        {
          content_type: 'paragraph',
          content_text: 'Every brand starts with a vision — and we\'re here to bring yours to life. We listen, collaborate, and transform your ideas into bold, intentional design.',
          order_no: 6
        }
      ];

      for (const content of sampleContents) {
        await pool.query(`
          INSERT INTO page_contents (page_id, content_type, content_text, order_no)
          VALUES ($1, $2, $3, $4)
          ON CONFLICT DO NOTHING
        `, [homepageId, content.content_type, content.content_text, content.order_no]);
      }
    }

    console.log('Database initialized successfully!');
    console.log('Admin login: admin@fladvart.com / admin123');

  } catch (error) {
    console.error('Database initialization error:', error);
  } finally {
    await pool.end();
  }
}

// Run if called directly
if (require.main === module) {
  initializeDatabase();
}

export { initializeDatabase };
