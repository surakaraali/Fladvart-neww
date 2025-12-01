"use client";
import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/LanguageProvider';

interface Service {
  id: number;
  order_number: number;
  title_en: string;
  title_tr: string;
  slug: string;
  middle_title_en: string;
  middle_title_tr: string;
  paragraph_1_en: string;
  paragraph_1_tr: string;
  paragraph_2_en: string;
  paragraph_2_tr: string;
  image_url: string | null;
  tags: Array<{
    tag_en: string;
    tag_tr: string;
  }>;
}

interface ServiceCollection {
  id: number;
  main_title_en: string;
  main_title_tr: string;
  main_image_url: string | null;
}

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [detailedServices, setDetailedServices] = useState<Service[]>([]);
  const [collection, setCollection] = useState<ServiceCollection | null>(null);
  const [loading, setLoading] = useState(true);
  const { locale, t } = useLanguage();

  useEffect(() => {
    fetchServices();
    fetchDetailedServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data.services || []);
        setCollection(data.collection || null);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDetailedServices = async () => {
    try {
      const response = await fetch('/api/services/detailed');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setDetailedServices(data.services || []);
        }
      }
    } catch (error) {
      console.error('Error fetching detailed services:', error);
    }
  };
  return (
    <div className="min-h-screen bg-[#121727]">
      {/* Services Section */}
      <section className="px-12 py-1 mb-15">
        <div className="mb-2 mt-12 ">
          <a href="#services" className="text-red-500 text-sm font-semibold  pt-10 font-sans hover:text-white transition">
            {collection ? (locale === 'tr' ? collection.main_title_tr : collection.main_title_en) : 'SERVICES'}
          </a>
          <h2 id="services" className="text-7xl font-bold text-white text-center top-0 mb-5 pb-5 mt-25 font-sans">
            {collection ? (locale === 'tr' ? collection.main_title_tr : collection.main_title_en) : 'SERVICES'}
          </h2>

          <div className="grid grid-cols-12 gap-8">
            {/* Left side - Image */}
            <div className="col-span-4">
              {collection?.main_image_url ? (
                <img src={collection.main_image_url} alt="Services" className="w-5/6 h-auto mt-8" />
              ) : (
                <img src="/image4.png" alt="" className="w-5/6 h-auto mt-8" />
              )}
            </div>

            {/* Right side - Services List */}
            <div className="col-span-8 space-y-10 text-white ml-2">
              {services.map((service, index) => {
                const title = locale === 'tr' ? service.title_tr : service.title_en;
                const number = String(service.order_number).padStart(2, '0');
                
                const handleClick = (e: React.MouseEvent) => {
                  e.preventDefault();
                  const sectionId = `service-${service.slug}`;
                  const element = document.getElementById(sectionId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                };
                
                return (
                  <div key={service.id} onClick={handleClick}>
                    {/* Border on top when hovered */}
                    {hoveredIndex === index && (
                      <div className="border-t border-gray-300 mb-2"></div>
                    )}

                    <div
                      className="flex items-center justify-between py-6 cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="flex items-center gap-8 ml-16">
                        <span className={`text-sm ${index === 4 ? 'text-white' : 'text-white'}`}>
                          {number}
                        </span>
                        <h3 className={`font-bold transition-all duration-300 ml-16 whitespace-pre-line ${hoveredIndex === index ? 'text-4xl' : 'text-3xl'
                          }`}>
                          {title}
                        </h3>
                      </div>

                      {/* MORE button - only show on hover */}
                      {hoveredIndex === index && (
                        <button className="bg-black text-white rounded-full w-24 h-24 flex items-center justify-center text-sm font-semibold hover:bg-gray-800 transition animate-fadeIn">
                          MORE
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Service Detail Sections */}
      {detailedServices.map((service, index) => {
        const title = locale === 'tr' ? service.title_tr : service.title_en;
        const middleTitle = locale === 'tr' ? service.middle_title_tr : service.middle_title_en;
        const paragraph1 = locale === 'tr' ? service.paragraph_1_tr : service.paragraph_1_en;
        const paragraph2 = locale === 'tr' ? service.paragraph_2_tr : service.paragraph_2_en;

        // Split middle title into words for marquee effect
        const words = middleTitle ? middleTitle.split(' ') : [];
        const halfLength = Math.ceil(words.length / 2);
        const firstLine = words.slice(0, halfLength).join(' ');
        const secondLine = words.slice(halfLength).join(' ');

        return (
          <section key={service.id} id={`service-${service.slug}`} className="px-0 py-16">
            <div className="mb-16">
              <a href="#services" className="text-red-500 text-sm font-semibold pt-10 font-sans hover:text-white transition mt-10 px-12">
                SERVICES
              </a>
              <h2 className="text-7xl font-bold text-white text-center top-0 mb-18 pb-5 mt-25 font-sans">
                {title}
              </h2>

              <div className="grid grid-cols-12 gap-1">
                <div className="col-span-5 pl-12 -ml-12">
                  {service.image_url ? (
                    <img
                      src={service.image_url}
                      alt={title}
                      className="w-full h-[600px] object-cover"
                    />
                  ) : (
                    <div className="w-full h-[600px] bg-gray-700"></div>
                  )}
                </div>

                {/* Right side - Content */}
                <div className="col-span-7 space-y-10 p-0 m-0">
                  {/* Title Section - Motion effect with marquee */}
                  {middleTitle && (
                    <div className="mb-16 overflow-hidden relative space-y-3">
                      {/* First line - Scroll right */}
                      <div className="marquee-right pl-2">
                        <div className="flex">
                          <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                            <span style={{ color: '#ffffff' }}>{firstLine}</span>&nbsp;
                            <span style={{ color: '#878787' }}>{secondLine}</span>&nbsp;
                            <span style={{ color: '#ffffff' }}>{firstLine}</span>&nbsp;
                            <span style={{ color: '#878787' }}>{secondLine}</span>&nbsp;
                          </h3>
                          <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap">
                            <span style={{ color: '#ffffff' }}>{firstLine}</span>&nbsp;
                            <span style={{ color: '#878787' }}>{secondLine}</span>&nbsp;
                            <span style={{ color: '#ffffff' }}>{firstLine}</span>&nbsp;
                            <span style={{ color: '#878787' }}>{secondLine}</span>&nbsp;
                          </h3>
                        </div>
                      </div>

                      {/* Second line - Scroll left */}
                      {secondLine && (
                        <div className="marquee-left pl-24">
                          <div className="flex">
                            <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                              <span style={{ color: '#ffffff' }}>{firstLine}</span>&nbsp;
                              <span style={{ color: '#878787' }}>{secondLine}</span>&nbsp;
                              <span style={{ color: '#ffffff' }}>{firstLine}</span>&nbsp;
                              <span style={{ color: '#878787' }}>{secondLine}</span>&nbsp;
                            </h3>
                            <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap">
                              <span style={{ color: '#ffffff' }}>{firstLine}</span>&nbsp;
                              <span style={{ color: '#878787' }}>{secondLine}</span>&nbsp;
                              <span style={{ color: '#ffffff' }}>{firstLine}</span>&nbsp;
                              <span style={{ color: '#878787' }}>{secondLine}</span>&nbsp;
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <div className="space-y-8">
                    <div className="flex gap-8">
                      <span className="text-1xl font-bold ml-30 mt-3">{'>>>'}</span>
                      <div className="space-y-4 mt-3">
                        {paragraph1 && (
                          <p className="text-gray-500 text-lg leading-relaxed ml-20 whitespace-pre-line">
                            {paragraph1}
                          </p>
                        )}
                        {paragraph2 && (
                          <p className="text-gray-500 text-lg leading-relaxed ml-20 whitespace-pre-line">
                            {paragraph2}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Tags/Services List */}
                    {service.tags && service.tags.length > 0 && (
                      <div className="space-y-4 pt-12 ml-67">
                        {service.tags.map((tag, tagIndex) => {
                          const tagText = locale === 'tr' ? tag.tag_tr : tag.tag_en;
                          return (
                            <h4 key={tagIndex} className="text-2xl font-bold text-white">
                              {tagText}
                            </h4>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}