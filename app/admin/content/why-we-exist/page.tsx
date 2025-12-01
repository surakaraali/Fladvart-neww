'use client';

import { useState, useEffect } from 'react';
import { Upload, Save, Loader2, Image as ImageIcon, X } from 'lucide-react';
import AdminLayout from '@/app/admin/AdminLayout';

interface ImageData {
  file: File | null;
  preview: string | null;
  firebaseUrl: string | null;
  mediaId: number | null;
}

interface WhyWeExistContent {
  id?: number;
  main_title_en: string;
  main_title_tr: string;
  left_title_en: string;
  left_title_tr: string;
  right_paragraph_1_en: string;
  right_paragraph_1_tr: string;
  right_paragraph_2_en: string;
  right_paragraph_2_tr: string;
  bottom_text_en: string;
  bottom_text_tr: string;
  image_1_media_id: number | null;
  image_2_media_id: number | null;
  image_3_media_id: number | null;
}

export default function WhyWeExistPage() {
  const [content, setContent] = useState<WhyWeExistContent>({
    main_title_en: '',
    main_title_tr: '',
    left_title_en: '',
    left_title_tr: '',
    right_paragraph_1_en: '',
    right_paragraph_1_tr: '',
    right_paragraph_2_en: '',
    right_paragraph_2_tr: '',
    bottom_text_en: '',
    bottom_text_tr: '',
    image_1_media_id: null,
    image_2_media_id: null,
    image_3_media_id: null,
  });

  const [images, setImages] = useState<{
    image1: ImageData;
    image2: ImageData;
    image3: ImageData;
  }>({
    image1: { file: null, preview: null, firebaseUrl: null, mediaId: null },
    image2: { file: null, preview: null, firebaseUrl: null, mediaId: null },
    image3: { file: null, preview: null, firebaseUrl: null, mediaId: null },
  });

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/admin/why-we-exist');
      if (response.ok) {
        const result = await response.json();
        
        // API returns {success: true, data: {section, images}}
        if (result.success && result.data) {
          const section = result.data.section;
          
          // Set content with proper defaults
          setContent({
            id: section.id,
            main_title_en: section.main_title_en || '',
            main_title_tr: section.main_title_tr || '',
            left_title_en: section.left_title_en || '',
            left_title_tr: section.left_title_tr || '',
            right_paragraph_1_en: section.right_paragraph_1_en || '',
            right_paragraph_1_tr: section.right_paragraph_1_tr || '',
            right_paragraph_2_en: section.right_paragraph_2_en || '',
            right_paragraph_2_tr: section.right_paragraph_2_tr || '',
            bottom_text_en: section.bottom_text_en || '',
            bottom_text_tr: section.bottom_text_tr || '',
            image_1_media_id: null,
            image_2_media_id: null,
            image_3_media_id: null,
          });
          
          // Set existing images if available
          if (result.data.images && result.data.images.length > 0) {
            result.data.images.forEach((img: any) => {
              if (img.image_position === 1 && img.url) {
                setImages(prev => ({
                  ...prev,
                  image1: { 
                    file: null, 
                    preview: img.url, 
                    firebaseUrl: img.url,
                    mediaId: img.media_id 
                  }
                }));
              } else if (img.image_position === 2 && img.url) {
                setImages(prev => ({
                  ...prev,
                  image2: { 
                    file: null, 
                    preview: img.url, 
                    firebaseUrl: img.url,
                    mediaId: img.media_id 
                  }
                }));
              } else if (img.image_position === 3 && img.url) {
                setImages(prev => ({
                  ...prev,
                  image3: { 
                    file: null, 
                    preview: img.url, 
                    firebaseUrl: img.url,
                    mediaId: img.media_id 
                  }
                }));
              }
            });
          }
        }
      }
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageSelect = (imageKey: 'image1' | 'image2' | 'image3', file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Lütfen bir görsel dosyası seçin');
      return;
    }

    const preview = URL.createObjectURL(file);
    setImages(prev => ({
      ...prev,
      [imageKey]: { file, preview, firebaseUrl: null, mediaId: null }
    }));
  };

  const handleUploadImage = async (imageKey: 'image1' | 'image2' | 'image3') => {
    const imageData = images[imageKey];
    if (!imageData.file) return;

    setUploading(imageKey);

    try {
      const formData = new FormData();
      formData.append('file', imageData.file);
      formData.append('context', `why_we_exist_${imageKey}`);

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('Upload response:', data);

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Upload failed');
      }
      
      setImages(prev => ({
        ...prev,
        [imageKey]: {
          ...prev[imageKey],
          firebaseUrl: data.firebaseUrl,
          mediaId: data.mediaId
        }
      }));

      alert('Görsel başarıyla yüklendi!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Yükleme sırasında bir hata oluştu');
    } finally {
      setUploading(null);
    }
  };

  const handleRemoveImage = (imageKey: 'image1' | 'image2' | 'image3') => {
    if (images[imageKey].preview) {
      URL.revokeObjectURL(images[imageKey].preview!);
    }
    setImages(prev => ({
      ...prev,
      [imageKey]: { file: null, preview: null, firebaseUrl: null, mediaId: null }
    }));
  };

  const handleSave = async () => {
    // Validate that all images are uploaded
    if (images.image1.file && !images.image1.mediaId) {
      alert('Lütfen önce 1. görseli Firebase\'e yükleyin');
      return;
    }
    if (images.image2.file && !images.image2.mediaId) {
      alert('Lütfen önce 2. görseli Firebase\'e yükleyin');
      return;
    }
    if (images.image3.file && !images.image3.mediaId) {
      alert('Lütfen önce 3. görseli Firebase\'e yükleyin');
      return;
    }

    setSaving(true);

    try {
      const payload = {
        ...content,
        image_1_media_id: images.image1.mediaId || content.image_1_media_id,
        image_2_media_id: images.image2.mediaId || content.image_2_media_id,
        image_3_media_id: images.image3.mediaId || content.image_3_media_id,
      };

      const response = await fetch('/api/admin/why-we-exist', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Save failed');

      alert('İçerik başarıyla kaydedildi!');
      fetchContent();
    } catch (error) {
      console.error('Save error:', error);
      alert('Kaydetme sırasında bir hata oluştu');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout title="Why We Exist">
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      </AdminLayout>
    );
  }

  const ImageUploadCard = ({ 
    imageKey, 
    title, 
    imageData 
  }: { 
    imageKey: 'image1' | 'image2' | 'image3'; 
    title: string;
    imageData: ImageData;
  }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
      
      <div className="p-4">
        {imageData.preview ? (
          <div className="relative">
            <img
              src={imageData.preview}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              onClick={() => handleRemoveImage(imageKey)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>
            
            {imageData.file && !imageData.mediaId && (
              <button
                onClick={() => handleUploadImage(imageKey)}
                disabled={uploading === imageKey}
                className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {uploading === imageKey ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Yükleniyor...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    Firebase'e Yükle
                  </>
                )}
              </button>
            )}
            
            {imageData.mediaId && (
              <div className="mt-3 text-sm text-green-600 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                Yüklendi ✓
              </div>
            )}
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
            <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">Görsel Seç</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageSelect(imageKey, file);
              }}
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  );

  return (
    <AdminLayout title="Why We Exist Content">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Title */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Ana Başlık</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                İngilizce
              </label>
              <input
                type="text"
                value={content.main_title_en}
                onChange={(e) => setContent({ ...content, main_title_en: e.target.value })}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="WHY WE EXIST"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Türkçe
              </label>
              <input
                type="text"
                value={content.main_title_tr}
                onChange={(e) => setContent({ ...content, main_title_tr: e.target.value })}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="NEDEN VARIZ"
              />
            </div>
          </div>
        </div>

        {/* Left Title */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Sol Taraf Başlık</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                İngilizce
              </label>
              <textarea
                value={content.left_title_en}
                onChange={(e) => setContent({ ...content, left_title_en: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="WE'RE NOT HERE TO DECORATE PERCEPTION..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Türkçe
              </label>
              <textarea
                value={content.left_title_tr}
                onChange={(e) => setContent({ ...content, left_title_tr: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ALGILARI SÜSLEMEYİZ..."
              />
            </div>
          </div>
        </div>

        {/* Right Paragraphs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Sağ Taraf Paragraflar</h2>
          
          <div className="space-y-6">
            {/* Paragraph 1 */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Paragraf 1</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-2">İngilizce</label>
                  <textarea
                    value={content.right_paragraph_1_en}
                    onChange={(e) => setContent({ ...content, right_paragraph_1_en: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Brands don't need another campaign..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-2">Türkçe</label>
                  <textarea
                    value={content.right_paragraph_1_tr}
                    onChange={(e) => setContent({ ...content, right_paragraph_1_tr: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Markalar başka bir kampanyaya ihtiyaç duymuyor..."
                  />
                </div>
              </div>
            </div>

            {/* Paragraph 2 */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Paragraf 2</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-2">İngilizce</label>
                  <textarea
                    value={content.right_paragraph_2_en}
                    onChange={(e) => setContent({ ...content, right_paragraph_2_en: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Our work exists between logic and emotion..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-2">Türkçe</label>
                  <textarea
                    value={content.right_paragraph_2_tr}
                    onChange={(e) => setContent({ ...content, right_paragraph_2_tr: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="İşimiz mantık ve duygu arasında var..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Görseller</h2>
          <div className="grid grid-cols-3 gap-4">
            <ImageUploadCard 
              imageKey="image1" 
              title="Sol Görsel" 
              imageData={images.image1}
            />
            <ImageUploadCard 
              imageKey="image2" 
              title="Orta Görsel" 
              imageData={images.image2}
            />
            <ImageUploadCard 
              imageKey="image3" 
              title="Sağ Görsel" 
              imageData={images.image3}
            />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Alt Metin</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                İngilizce
              </label>
              <textarea
                value={content.bottom_text_en}
                onChange={(e) => setContent({ ...content, bottom_text_en: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Fladvart is a creative studio..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Türkçe
              </label>
              <textarea
                value={content.bottom_text_tr}
                onChange={(e) => setContent({ ...content, bottom_text_tr: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Fladvart hissedilmek isteyen markalar için..."
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Kaydediliyor...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Değişiklikleri Kaydet
              </>
            )}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
