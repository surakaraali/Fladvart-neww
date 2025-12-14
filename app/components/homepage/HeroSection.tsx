'use client';

import { useLanguage } from '../LanguageProvider';
import { useState, useEffect } from 'react';

interface HeroVideoData {
  video_url: string;
  title_en?: string;
  title_tr?: string;
  description_en?: string;
  description_tr?: string;
}

export default function HeroSection() {
  const { locale, setLocale, t } = useLanguage();
  const [heroVideo, setHeroVideo] = useState<HeroVideoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeroVideo();
  }, []);

  const fetchHeroVideo = async () => {
    try {
      const response = await fetch('/api/admin/hero-video');
      const data = await response.json();

      if (data.success && data.data) {
        setHeroVideo(data.data);
      }
    } catch (error) {
      console.error('Error fetching hero video:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        {/* Arka plan videosu */}
        {!loading && heroVideo?.video_url && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={heroVideo.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Loading state */}
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center">
            <div className="text-white">Loading...</div>
          </div>
        )}

        {/* Navigation */}
        <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col gap-1 text-gray-100 text-xs font-light text-left">
            <a
              href="#why"
              className="
              text-white/60 
              transition-all 
              duration-200 
              hover:text-white 
            "
            >
              {t('nav.why')}
            </a>
            <a
              href="#services"
              className="
              text-white/60 
              transition-all 
              duration-200 
              hover:text-white 
            "            >
              {t('nav.services')}
            </a>
            <a
              href="#contact"
              className="
              text-white/60 
              transition-all 
              duration-200 
              hover:text-white 
            "            >
              {t('nav.contact')}
            </a>
          </div>
        </nav>
        <div className="absolute top-8 right-8 z-10 text-white text-xs font-light">
          <button
            className={`  hover:text-white 
              ${locale === 'tr' ? 'font-semibold' : ''}`}
            onClick={() => setLocale('tr')}
          >
            TR
          </button>
          <span className="mx-1">|</span>
          <button
            className={`  hover:text-white 
               ${locale === 'en' ? 'font-semibold' : ''}`}
            onClick={() => setLocale('en')}
          >
            EN
          </button>
        </div>

        {/* Hero Text */}
        {/* {heroVideo && (heroVideo.title_tr || heroVideo.title_en) && (
          <div className="relative z-10 text-center px-8">
            <h1 className="text-5xl md:text-6xl font-light text-white italic">
              {locale === 'tr' ? heroVideo.title_tr : heroVideo.title_en}
            </h1>
            {(heroVideo.description_tr || heroVideo.description_en) && (
              <p className="mt-4 text-xl text-white/90">
                {locale === 'tr' ? heroVideo.description_tr : heroVideo.description_en}
              </p>
            )}
          </div>
        )} */}

        {/* Logo */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          {/* Siyah Şerit */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs h-36"></div>
          {/* Logo */}
          <div className="relative flex items-center h-36 px-16">
            <img src="/logofladvart.png" alt="Logo" className="w-60 h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
