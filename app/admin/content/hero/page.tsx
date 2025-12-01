'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../../AdminLayout';
import { Upload, Video, X, Save, Eye, Loader2 } from 'lucide-react';

export default function HeroVideoPage() {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<any>(null);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title_tr: '',
    title_en: '',
    description_tr: '',
    description_en: '',
    media_id: null as number | null
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');

  // Mevcut hero video'yu yükle
  useEffect(() => {
    fetchHeroVideo();
  }, []);

  const fetchHeroVideo = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/hero-video');
      const data = await response.json();
      
      if (data.success && data.data) {
        setCurrentVideo(data.data);
        setFormData({
          title_tr: data.data.title_tr || '',
          title_en: data.data.title_en || '',
          description_tr: data.data.description_tr || '',
          description_en: data.data.description_en || '',
          media_id: data.data.media_id
        });
        setPreviewVideo(data.data.video_url);
      }
    } catch (error) {
      console.error('Error fetching hero video:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Clear previous errors
      setFileError('');

      // Validate file type
      if (!file.type.startsWith('video/')) {
        setFileError('Please select a video file');
        return;
      }

      // Validate file size (500MB limit)
      const maxSize = 500 * 1024 * 1024;
      if (file.size > maxSize) {
        setFileError('File size must be less than 500MB');
        return;
      }

      setSelectedFile(file);
      
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreviewVideo(previewUrl);
    }
  };

  const handleUploadVideo = async () => {
    if (!selectedFile) return;

    setUploading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', selectedFile);
      uploadFormData.append('context', 'hero_video');

      const uploadResponse = await fetch('/api/admin/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      const uploadData = await uploadResponse.json();

      if (uploadData.success) {
        setFormData(prev => ({ ...prev, media_id: uploadData.mediaId }));
        setPreviewVideo(uploadData.firebaseUrl);
        alert('Video uploaded successfully!');
      } else {
        alert('Upload failed: ' + uploadData.error);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!formData.media_id) {
      alert('Please upload a video first');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/hero-video', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Hero video updated successfully!');
        fetchHeroVideo();
      } else {
        alert('Update failed: ' + data.error);
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Save failed');
    } finally {
      setLoading(false);
    }
  };

  const handleRemovePreview = () => {
    setSelectedFile(null);
    setFileError('');
    setPreviewVideo(currentVideo?.video_url || null);
    setFormData(prev => ({ ...prev, media_id: currentVideo?.media_id || null }));
  };

  if (loading && !currentVideo) {
    return (
      <AdminLayout title="Hero Video">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="animate-spin text-blue-600" size={48} />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Hero Video">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Hero Section Video
          </h2>
          <p className="text-gray-600">
            Upload and manage the hero section background video
          </p>
        </div>

        {/* Video Upload Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Video size={20} className="mr-2" />
              Video Upload
            </h3>
          </div>

          <div className="p-6 space-y-4">
            {/* Current/Preview Video */}
            {previewVideo && (
              <div className="relative rounded-lg overflow-hidden bg-black">
                <video
                  src={previewVideo}
                  controls
                  className="w-full h-64 object-cover"
                >
                  Your browser does not support the video tag.
                </video>
                
                {selectedFile && (
                  <button
                    onClick={handleRemovePreview}
                    className="absolute top-4 right-4 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
                
                {selectedFile && (
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded-lg text-sm">
                    New video selected: {selectedFile.name}
                  </div>
                )}
              </div>
            )}

            {/* Upload Input */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-400 transition-colors">
              <div className="text-center">
                <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                <label className="cursor-pointer">
                  <span className="text-blue-600 hover:text-blue-700 font-medium">
                    Click to upload
                  </span>
                  <span className="text-gray-600"> or drag and drop</span>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  MP4, WebM, MOV or AVI (max. 500MB)
                </p>
              </div>
            </div>

            {/* Error Message */}
            {fileError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Upload Error</h3>
                    <p className="text-sm text-red-700 mt-1">{fileError}</p>
                  </div>
                  <button
                    onClick={() => setFileError('')}
                    className="ml-auto shrink-0 text-red-400 hover:text-red-600"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Upload Button */}
            {selectedFile && !uploading && (
              <button
                onClick={handleUploadVideo}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Upload size={20} className="mr-2" />
                Upload Video to Firebase
              </button>
            )}

            {uploading && (
              <div className="w-full bg-blue-100 text-blue-700 py-3 rounded-lg font-medium flex items-center justify-center">
                <Loader2 size={20} className="mr-2 animate-spin" />
                Uploading...
              </div>
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Video Text Content
            </h3>
          </div>

          <div className="p-6 space-y-6">
            {/* Turkish Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title (Turkish)
              </label>
              <input
                type="text"
                value={formData.title_tr}
                onChange={(e) => setFormData({ ...formData, title_tr: e.target.value })}
                placeholder="Markaları süslemek için burada değiliz."
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* English Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title (English)
              </label>
              <input
                type="text"
                value={formData.title_en}
                onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                placeholder="We are not here to decorate brands."
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Turkish Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description (Turkish) - Optional
              </label>
              <textarea
                value={formData.description_tr}
                onChange={(e) => setFormData({ ...formData, description_tr: e.target.value })}
                placeholder="Kısa açıklama..."
                rows={3}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* English Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description (English) - Optional
              </label>
              <textarea
                value={formData.description_en}
                onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
                placeholder="Short description..."
                rows={3}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <button
            onClick={() => window.open('/', '_blank')}
            className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Eye size={20} className="mr-2" />
            Preview Site
          </button>

          <button
            onClick={handleSave}
            disabled={loading || uploading || !formData.media_id}
            className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save size={20} className="mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <h4 className="text-sm font-semibold text-yellow-900 mb-2">
            ⚠️ Important Notes
          </h4>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• First upload the video to Firebase, then save changes</li>
            <li>• Video will be visible on the homepage hero section</li>
            <li>• Recommended format: MP4 (H.264 codec)</li>
            <li>• Recommended resolution: 1920x1080 or higher</li>
            <li>• Maximum file size: 500MB</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
}
