-- =====================================================
-- Why We Exist Content Insert
-- Bu script "Why We Exist" bölümünün tüm içeriğini ekler
-- =====================================================

-- Önce mevcut why_sections kayıtlarını temizle
DELETE FROM why_images;
DELETE FROM why_sections;

-- Why We Exist section ekle (sadece 1 kayıt - tüm içerik burada)
INSERT INTO why_sections (
    main_title_en,
    main_title_tr,
    left_title_en,
    left_title_tr,
    right_paragraph_1_en,
    right_paragraph_1_tr,
    right_paragraph_2_en,
    right_paragraph_2_tr,
    bottom_text_en,
    bottom_text_tr,
    created_at,
    updated_at
) VALUES (
    'WHY WE EXIST',
    'NEDEN VARIZ',
    'WE''RE NOT HERE TO DECORATE PERCEPTION; WE''RE HERE TO SHAPE IT.',
    'ALGIYI SÜSLEMEK İÇİN BURADA DEĞİLİZ; ONU ŞEKİLLENDİRMEK İÇİN BURADAYIZ.',
    'Brands don''t need another campaign. They need ideas with intention — ideas that move people, shift perception, and last beyond a scroll. We believe creativity begins where familiarity ends. We''re not here to decorate perception; we''re here to shape it.',
    'Markalar başka bir kampanyaya ihtiyaç duymuyor. Niyet taşıyan fikirlere ihtiyaç duyuyorlar — insanları harekete geçiren, algıyı değiştiren ve bir kaydırmanın ötesinde kalıcı olan fikirler. Yaratıcılığın aşinalığın bittiği yerde başladığına inanıyoruz. Algıyı süslemek için burada değiliz; onu şekillendirmek için buradayız.',
    'Our work exists between logic and emotion, between commerce and culture. Every brand has a presence. But not every presence is felt. We see advertising not as storytelling, but as sense-making — where creativity gives shape to what brands stand for, and strategy gives it direction.',
    'Çalışmalarımız mantık ile duygu arasında, ticaret ile kültür arasında var olur. Her markanın bir varlığı vardır. Ancak her varlık hissedilmez. Reklamcılığı hikaye anlatımı olarak değil, anlam yaratma olarak görüyoruz — yaratıcılığın markaların neyi temsil ettiğine şekil verdiği ve stratejinin buna yön verdiği bir alan.',
    'Fladvart is a creative studio built for brands that want to be felt — not just seen.',
    'Fladvart, sadece görülmek değil, hissedilmek isteyen markalar için inşa edilmiş bir yaratıcı stüdyodur.',
    NOW(),
    NOW()
);

-- Why We Exist görselleri ekle (3 görsel)
-- NOT: Görseller admin panelden yüklenecek veya public/images/ klasörüne manuel konulacak

-- Geçici olarak görsel path'lerini ekliyoruz (daha sonra admin panelden güncellenecek)
INSERT INTO why_images (
    section_id,
    image_position,
    media_id,
    created_at
)
SELECT 
    ws.id,
    1, -- Sol görsel
    NULL, -- Görsel admin panelden yüklenecek
    NOW()
FROM why_sections ws
UNION ALL
SELECT 
    ws.id,
    2, -- Orta görsel
    NULL,
    NOW()
FROM why_sections ws
UNION ALL
SELECT 
    ws.id,
    3, -- Sağ görsel
    NULL,
    NOW()
FROM why_sections ws;

-- Kontrol için
SELECT 
    ws.id,
    ws.main_title_en,
    ws.left_title_en,
    LEFT(ws.right_paragraph_1_en, 50) as paragraph_1_preview,
    LEFT(ws.bottom_text_en, 50) as bottom_text_preview,
    COUNT(wi.id) as image_count
FROM why_sections ws
LEFT JOIN why_images wi ON ws.id = wi.section_id
GROUP BY ws.id, ws.main_title_en, ws.left_title_en, ws.right_paragraph_1_en, ws.bottom_text_en;
