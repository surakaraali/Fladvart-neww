'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageProvider';

interface MarqueeItem {
  text_en: string;
  text_tr: string;
}

interface CTASection {
  id: number;
  main_title_en: string;
  main_title_tr: string;
  description_en: string;
  description_tr: string;
  button_text_en: string;
  button_text_tr: string;
  button_link: string;
  background_image_url: string | null;
  marquee_items: MarqueeItem[];
}

export default function CTASection() {
  const { locale } = useLanguage();
  const [ctaData, setCtaData] = useState<CTASection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCTAData();
  }, []);

  const fetchCTAData = async () => {
    try {
      const response = await fetch('/api/cta-section');
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          // Marquee data normalization
          let marqueeItems = data.data.marquee_items;
          if (typeof marqueeItems === 'string') {
             try { marqueeItems = JSON.parse(marqueeItems); } catch(e) {}
          }
          
          setCtaData({
            ...data.data,
            marquee_items: marqueeItems
          });
        }
      }
    } catch (error) {
      console.error('Error fetching CTA data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !ctaData) {
    return null;
  }

  const mainTitle = locale === 'tr' ? ctaData.main_title_tr : ctaData.main_title_en;
  const description = locale === 'tr' ? ctaData.description_tr : ctaData.description_en;
  const buttonText = locale === 'tr' ? ctaData.button_text_tr : ctaData.button_text_en;

  // Helper function to get marquee items text
  const getMarqueeText = (item: any) => {
     if (typeof item === 'string') return item;
     return locale === 'tr' ? (item.text_tr || item.text_en) : item.text_en;
  };

  return (
    <div className="bg-[#121727]">
      {/* CTA Section - Your Vision Deserves */}
      <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="relative overflow-hidden min-h-[500px] lg:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: ctaData.background_image_url 
              ? `url(${ctaData.background_image_url})` 
              : "url('/collobrate.png')" 
          }}
        >
          {/* Overlay for readability if needed */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Sol Yazı */}
          <div className="absolute top-10 left-10 z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-none max-w-3/4 whitespace-pre-line">
              {mainTitle}
            </h2>
          </div>

          {/* Sağ Alt Text + Button */}
          <div className="absolute bottom-20 right-20 z-12 flex flex-col items-end text-left">
            <p className="text-white font-bold text-xl leading-relaxed mb-10 max-w-md whitespace-pre-line uppercase">
              {description}
            </p>

            <a
              href={ctaData.button_link}
              className="
                   items-left
                   text-white 
                   px-6 py-3
                   text-sm font-semibold 
                   transition-all duration-300
                   flex items-center gap-2 
                   hover:bg-[#963f48ca]
                   bg-[#963F48]
                   backdrop-blur-sm
                   uppercase"
            >
              {buttonText}
              <span className="text-xl">+</span>
            </a>
          </div>
        </div>
      </section>

      {/* Motion Section – Marquees */}
      <section className="w-full overflow-hidden py-20 bg-[#121727]">
        <div className="space-y-6">

          {/* ÜST SATIR – SAĞA (Marquee Right) */}
          <div className="w-full overflow-hidden">
            <div 
              className="flex whitespace-nowrap"
              style={{
                animation: 'marquee-right 40s linear infinite'
              }}
            >
               {/* Duplicate items for seamless loop */}
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="flex shrink-0">
                   {ctaData.marquee_items.slice(0, Math.ceil(ctaData.marquee_items.length / 2)).map((item, idx) => (
                      <h3 key={idx} className="text-5xl md:text-7xl font-extrabold mr-12" style={{ color: "#F5F5F5" }}>
                        {getMarqueeText(item)}
                      </h3>
                   ))}
                 </div>
               ))}
            </div>
          </div>

          {/* ALT SATIR – SOLA (Marquee Left) */}
          <div className="w-full overflow-hidden">
            <div 
              className="flex whitespace-nowrap"
              style={{
                animation: 'marquee-left 40s linear infinite'
              }}
            >
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="flex shrink-0">
                    {ctaData.marquee_items.slice(Math.ceil(ctaData.marquee_items.length / 2)).map((item, idx) => (
                      <h3 key={idx} className="text-5xl md:text-7xl font-extrabold mr-12" style={{ color: "#A3A3A3" }}>
                        {getMarqueeText(item)}
                      </h3>
                    ))}
                 </div>
               ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
