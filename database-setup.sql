-- FLADVart Database Schema
-- Run this script in your PostgreSQL database

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Pages table
CREATE TABLE IF NOT EXISTS pages (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Page contents table
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
);

-- Password resets table
CREATE TABLE IF NOT EXISTS password_resets (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    reset_token VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    is_used BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert default admin user (password: admin123)
INSERT INTO users (name, email, password_hash, role) 
VALUES ('Admin User', 'admin@fladvart.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert homepage
INSERT INTO pages (slug, title) 
VALUES ('homepage', 'Anasayfa')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample homepage content
-- First get homepage id, then insert content
DO $$
DECLARE
    homepage_id INT;
BEGIN
    SELECT id INTO homepage_id FROM pages WHERE slug = 'homepage';
    
    INSERT INTO page_contents (page_id, content_type, content_text, order_no) VALUES
    (homepage_id, 'heading', 'FALAN FILAN', 1),
    (homepage_id, 'paragraph', 'We believe design is more than aesthetics — it''s a force that inspires, connects, and transforms. At our studio, we craft bold visual identities, immersive digital experiences, and stories that resonate across', 2),
    (homepage_id, 'heading', 'Social Media & Campaign Design', 3),
    (homepage_id, 'paragraph', 'We design scroll-stopping visuals and cohesive campaigns that speak your brand''s language across platforms. From branded templates', 4),
    (homepage_id, 'heading', 'Your Vision, Our Design Fuel', 5),
    (homepage_id, 'paragraph', 'Every brand starts with a vision — and we''re here to bring yours to life. We listen, collaborate, and transform your ideas into bold, intentional design.', 6)
    ON CONFLICT DO NOTHING;
END $$;

-- Verify data
SELECT 'Users created:' as info, COUNT(*) as count FROM users;
SELECT 'Pages created:' as info, COUNT(*) as count FROM pages;
SELECT 'Content created:' as info, COUNT(*) as count FROM page_contents;
