'use client';
import { useState } from 'react';
export default function ServicesSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    { number: '01', title: 'BRAND ARCHITECTURE' },
    { number: '02', title: 'VISUAL DIRECTION' },
    { number: '03', title: 'CAMPAIGN & NARRATIVE DESIGN' },
    { number: '04', title: 'DIGITAL & MOTION EXPERIENCES' },
    { number: '05', title: 'CREATIVE CONSULTANCY', hasButton: true },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Services Section */}
      <section className="px-12 py-1">
      <div className="mb-2">
        <div className="text-red-500 text-sm font-semibold mb-2">SERVICES</div>
        
        <h2 className="text-7xl font-bold text-[#878787] text-center mb-16">
          SERVICES
        </h2>

        <div className="grid grid-cols-12 gap-8">
          {/* Left side - Image */}
          <div className="col-span-4">
            <img src="/image4.png" alt="" className="w-4xl h-auto" />
          </div>

          {/* Right side - Services List */}
          <div className="col-span-8 space-y-10 text-black ml-2">
            {services.map((service, index) => (
              <div key={index}>
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
                    <span className={`text-sm ${index === 4 ? 'text-[#333333]' : 'text-[#333333]'}`}>
                      {service.number}
                    </span>
                    <h3 className={`font-bold transition-all duration-300 ml-16 whitespace-pre-line ${
                      hoveredIndex === index ? 'text-4xl' : 'text-3xl'
                    }`}>
                      {service.title}
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
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Brand Architecture Section */}
     <section className="px-12 py-16">
        <div className="mb-16">
          <div className="text-red-500 text-sm font-semibold mb-16">SERVICES</div>
          
          <h2 className="text-7xl font-bold text-black mb-20 text-center">
            BRAND ARCHITECTURE
          </h2>

          <div className="grid grid-cols-12 gap-8">
            {/* Left side - Image */}
            <div className="col-span-5 -ml-12">
              <img src="/image5.png" alt="Brand Architecture" className="w-5/6 h-auto aspect-[3/4] object-cover" />
            </div>

            {/* Right side - Content */}
            <div className="col-span-7 space-y-12">
              {/* Title Section - Motion efektli değişiklikler burada yapıldı */}
              <div className="mb-16 overflow-hidden relative -space-y-1"> 
                {/* Üst satır için - Sağa doğru hareket - Sadece BRAND STRATEGY ve VISUAL IDENTITY */}
                <div className="marquee-right">
                  <div className="flex">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-8">
                      <span style={{color: '#878787'}}>BRAND STRATEGY</span>&nbsp;<span style={{color: '#121727'}}>VISUAL IDENTITY</span>&nbsp;<span style={{color: '#878787'}}>BRAND STRATEGY</span>&nbsp;<span style={{color: '#121727'}}>VISUAL IDENTITY</span>&nbsp;<span style={{color: '#878787'}}>BRAND STRATEGY</span>&nbsp;<span style={{color: '#121727'}}>VISUAL IDENTITY</span>&nbsp;<span style={{color: '#878787'}}>BRAND STRATEGY</span>&nbsp;<span style={{color: '#121727'}}>VISUAL IDENTITY</span>&nbsp;
                    </h3>
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap">
                      <span style={{color: '#878787'}}>BRAND STRATEGY</span>&nbsp;<span style={{color: '#121727'}}>VISUAL IDENTITY</span>&nbsp;<span style={{color: '#878787'}}>BRAND STRATEGY</span>&nbsp;<span style={{color: '#121727'}}>VISUAL IDENTITY</span>&nbsp;<span style={{color: '#878787'}}>BRAND STRATEGY</span>&nbsp;<span style={{color: '#121727'}}>VISUAL IDENTITY</span>&nbsp;<span style={{color: '#878787'}}>BRAND STRATEGY</span>&nbsp;<span style={{color: '#121727'}}>VISUAL IDENTITY</span>&nbsp;
                    </h3>
                  </div>
                </div>

                {/* Alt satır için - Sola doğru hareket - Sadece REBRANDING ve LOGO DESIGN */}
                <div className="marquee-left">
                  <div className="flex">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-8">
                      <span style={{color: '#121727'}}>REBRANDING</span>&nbsp;<span style={{color: '#878787'}}>LOGO DESIGN</span>&nbsp;<span style={{color: '#121727'}}>REBRANDING</span>&nbsp;<span style={{color: '#878787'}}>LOGO DESIGN</span>&nbsp;<span style={{color: '#121727'}}>REBRANDING</span>&nbsp;<span style={{color: '#878787'}}>LOGO DESIGN</span>&nbsp;<span style={{color: '#121727'}}>REBRANDING</span>&nbsp;<span style={{color: '#878787'}}>LOGO DESIGN</span>&nbsp;
                    </h3>
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap">
                      <span style={{color: '#121727'}}>REBRANDING</span>&nbsp;<span style={{color: '#878787'}}>LOGO DESIGN</span>&nbsp;<span style={{color: '#121727'}}>REBRANDING</span>&nbsp;<span style={{color: '#878787'}}>LOGO DESIGN</span>&nbsp;<span style={{color: '#121727'}}>REBRANDING</span>&nbsp;<span style={{color: '#878787'}}>LOGO DESIGN</span>&nbsp;<span style={{color: '#121727'}}>REBRANDING</span>&nbsp;<span style={{color: '#878787'}}>LOGO DESIGN</span>&nbsp;
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-8">
                <div className="flex gap-8">
                  <span className="text-2xl font-bold">///</span>
                  <div className="space-y-4">
                    <p className="text-gray-500 text-lg leading-relaxed">
                      Naming, positioning, and identity systems designed<br />
                      to give ideas a pulse.
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      We build brands that feel alive — strategic at their<br />
                      core, human in their expression.
                    </p>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 pt-12">
                  <h4 className="text-2xl font-bold text-gray-600">Brand Strategy</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Visual Identity</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Logo Design</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Rebranding</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Direction Section */}
      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-16">
          <div className="text-red-500 text-sm font-semibold mb-32">SERVICES</div>
          
          <h2 className="text-7xl font-bold text-black mb-32">
            VISUAL DIRECTION
          </h2>

          <div className="grid grid-cols-12 gap-8">
            {/* Left side - Image */}
            <div className="col-span-5">
              <div className="bg-black aspect-[3/4]"></div>
            </div>

            {/* Right side - Content */}
            <div className="col-span-7 space-y-12">
              {/* Title Section */}
              <div className="mb-16">
                <h3 className="text-5xl font-bold text-gray-600 leading-tight mb-4">
                  GRAPHIC DESIGN VISUAL
                </h3>
                <h3 className="text-5xl font-bold text-gray-400 leading-tight">
                  ART DIRECTION MOTION
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-8">
                <div className="flex gap-8">
                  <span className="text-2xl font-bold">///</span>
                  <div className="space-y-4">
                    <p className="text-gray-500 text-lg leading-relaxed">
                      Design, motion, and art direction that shape<br />
                      perception.
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      From minimalist compositions to moving visuals —<br />
                      every frame carries intention.
                    </p>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 pt-12">
                  <h4 className="text-2xl font-bold text-gray-600">Graphic Design</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Motion Design</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Art Direction</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Video Editing</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Visual Concept Development</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign & Narrative Design Section */}
      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-16">
          <div className="text-red-500 text-sm font-semibold mb-32">SERVICES</div>
          
          <h2 className="text-7xl font-bold text-black mb-32">
            CAMPAIGN & NARRATIVE DESIGN
          </h2>

          <div className="grid grid-cols-12 gap-8">
            {/* Left side - Image */}
            <div className="col-span-5">
              <div className="bg-black aspect-[3/4]"></div>
            </div>

            {/* Right side - Content */}
            <div className="col-span-7 space-y-12">
              {/* Title Section */}
              <div className="mb-16">
                <h3 className="text-5xl font-bold text-gray-600 leading-tight mb-4">
                  CONCEPT DEVELOPMENT
                </h3>
                <h3 className="text-5xl font-bold text-gray-400 leading-tight">
                  COPYWRITING CREATIVE
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-8">
                <div className="flex gap-8">
                  <span className="text-2xl font-bold">///</span>
                  <div className="space-y-4">
                    <p className="text-gray-500 text-lg leading-relaxed">
                      We craft campaigns that speak beyond slogans —<br />
                      stories that connect business goals with human<br />
                      emotion.
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      Every word, every frame, every pause is part of the<br />
                      story.
                    </p>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 pt-12">
                  <h4 className="text-2xl font-bold text-gray-600">Campaign Strategy</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Copywriting</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Creative Direction</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Concept Development</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Storytelling</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Content Marketing</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Consultancy Section */}
      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-16">
          <div className="text-red-500 text-sm font-semibold mb-32">SERVICES</div>
          
          <h2 className="text-7xl font-bold text-black mb-32">
            CREATIVE CONSULTANCY
          </h2>

          <div className="grid grid-cols-12 gap-8">
            {/* Left side - Image */}
            <div className="col-span-5">
              <div className="bg-black aspect-[3/4]"></div>
            </div>

            {/* Right side - Content */}
            <div className="col-span-7 space-y-12">
              {/* Title Section */}
              <div className="mb-16">
                <h3 className="text-5xl font-bold text-gray-600 leading-tight mb-4">
                  CREATIVE CONSULTANCY
                </h3>
                <h3 className="text-5xl font-bold text-gray-400 leading-tight">
                  COMMUNICATION STRATEGY
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-8">
                <div className="flex gap-8">
                  <span className="text-2xl font-bold">///</span>
                  <div className="space-y-4">
                    <p className="text-gray-500 text-lg leading-relaxed">
                      We help brands rediscover their essence — aligning<br />
                      what they say, what they show, and what they stand<br />
                      for.
                    </p>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 pt-12">
                  <h4 className="text-2xl font-bold text-gray-600">Creative Consulting</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Brand Workshops</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Trend Research</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Communication Strategy</h4>
                  <h4 className="text-2xl font-bold text-gray-600">Art-Based Brand Development</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Your Vision Deserves */}
      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="relative bg-teal-800 rounded-lg overflow-hidden min-h-[500px] flex items-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          <div className="relative z-10 px-16 py-20">
            <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
              YOUR VISION DESERVES<br />
              A TAILORED SOLUTION
            </h2>
          </div>

          <div className="absolute bottom-8 right-8 text-right">
            <p className="text-white text-sm mb-4 leading-relaxed">
              SHARE YOUR GOALS AND<br />
              WE'LL CRAFT A CUSTOM<br />
              OFFER FOR YOUR BRAND.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold hover:bg-red-700 transition flex items-center gap-2 ml-auto">
              LET'S COLLABORATE
              <span className="text-xl">+</span>
            </button>
          </div>
        </div>
      </section>

      {/* Digital & Motion Experiences Section */}
      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-16">
          <h2 className="text-7xl font-bold text-gray-400 mb-8">
            CREATIVE CONSULTANCY
          </h2>
          <h2 className="text-7xl font-bold text-black">
            DIGITAL & MOTION EXPERIENCES
          </h2>
        </div>
      </section>
    </div>
  );
}