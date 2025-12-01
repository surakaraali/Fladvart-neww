"use client";
import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageProvider';

interface WhyWeExistData {
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
  images: {
    image_1: string | null;
    image_2: string | null;
    image_3: string | null;
  };
}

export default function WhyWeExist() {
  const [data, setData] = useState<WhyWeExistData | null>(null);
  const [loading, setLoading] = useState(true);
  const { locale } = useLanguage();

  useEffect(() => {
    fetchWhyWeExistData();
  }, []);

  const fetchWhyWeExistData = async () => {
    try {
      const response = await fetch('/api/why-we-exist');
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setData(result.data);
        }
      }
    } catch (error) {
      console.error('Error fetching why we exist data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121727] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#121727] flex items-center justify-center">
        <div className="text-white">No content available</div>
      </div>
    );
  }

  const mainTitle = locale === 'tr' ? data.main_title_tr : data.main_title_en;
  const leftTitle = locale === 'tr' ? data.left_title_tr : data.left_title_en;
  const rightParagraph1 = locale === 'tr' ? data.right_paragraph_1_tr : data.right_paragraph_1_en;
  const rightParagraph2 = locale === 'tr' ? data.right_paragraph_2_tr : data.right_paragraph_2_en;
  const bottomText = locale === 'tr' ? data.bottom_text_tr : data.bottom_text_en;

  return (
    <div className="min-h-screen bg-[#121727] flex gap-7">
      {/* Why We Exist Section */}
      <section className="px-12 py-1 mb-15">
        <div className="mb-2 mt-12">
          <a href="#why" className="text-red-500 text-sm font-semibold  pt-10 font-sans hover:text-white transition">
            WHY WE EXIST
          </a>


          <h2 id="why" className="text-7xl font-bold text-white text-center top-0 mb-5 pb-5 mt-25 font-sans">
            {mainTitle}
          </h2>

          {/* Two column layout */}
          <div className="grid grid-cols-2 gap-16 mb-0 mt-9">
            {/* Left column */}
            <div>
              <h3 className="text-4xl text-white font-extrabold mb-4 pt-24 leading-tight font-sans whitespace-pre-line">
                {leftTitle}
              </h3>
            </div>

            {/* Right column */}
            <div className="mt-3 space-y-4 text-white text-lg text-right font-light font-sans">
              <p className="leading-relaxed whitespace-pre-line">
                {rightParagraph1}
              </p>

              <p className="leading-relaxed whitespace-pre-line">
                {rightParagraph2}
              </p>
            </div>
          </div>

          {/* Three images row */}
          <div className="grid grid-cols-3 gap-10 pb-2">
            <div>
              {data.images.image_1 ? (
                <img src={data.images.image_1} alt="" className="w-8/12 h-auto" />
              ) : (
                <img src="/image1.png" alt="" className="w-8/12 h-auto" />
              )}
            </div>

            {/* Ortadaki kolon */}
            <div className="flex flex-col items-center justify-center ">
              {data.images.image_2 ? (
                <img
                  src={data.images.image_2}
                  alt=""
                  className="w-2/3 h-auto mt-10 mr-90"
                />
              ) : (
                <img
                  src="/image2.png"
                  alt=""
                  className="w-2/3 h-auto mt-10 mr-90"
                />
              )}

              <div className="flex flex-col items-start">
                <p className="text-[20px] leading-snug text-white mt-15 whitespace-pre-line">
                  {bottomText}
                </p>
              </div>

            </div>

            <div className="flex justify-end items-center">
              {data.images.image_3 ? (
                <img src={data.images.image_3} alt="" className="w-8/12 h-auto" />
              ) : (
                <img src="/image3.png" alt="" className="w-8/12 h-auto" />
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
