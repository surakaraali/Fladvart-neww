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
    <div className="min-h-screen bg-[#121727]">
      {/* Services Section */}
      <section className="px-12 py-1 mb-15">
        <div className="mb-2 mt-12 ">
          <a href="#services" className="text-red-500 text-sm font-semibold  pt-10 font-sans hover:text-white transition">
            SERVICES
          </a>
          <h2 id="services" className="text-7xl font-bold text-white text-center top-0 mb-5 pb-5 mt-25 font-sans">
            SERVICES
          </h2>

          <div className="grid grid-cols-12 gap-8">
            {/* Left side - Image */}
            <div className="col-span-4">
              <img src="/image4.png" alt="" className="w-5/6 h-auto mt-8" />
            </div>

            {/* Right side - Services List */}
            <div className="col-span-8 space-y-10 text-white ml-2">
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
                      <span className={`text-sm ${index === 4 ? 'text-white' : 'text-white'}`}>
                        {service.number}
                      </span>
                      <h3 className={`font-bold transition-all duration-300 ml-16 whitespace-pre-line ${hoveredIndex === index ? 'text-4xl' : 'text-3xl'
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
      <section className="px-0 py-16">
        <div className="mb-16">
          <a href="#brand" className="text-red-500 text-sm font-semibold  pt-10 font-sans hover:text-white transition mt-10 px-12 ">
            SERVICES          </a>
          <h2 id="brand" className="text-7xl font-bold text-white text-center top-0 mb-18 pb-5 mt-25 font-sans">
            BRAND ARCHITECTURE
          </h2>

          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-5 pl-12 -ml-12">
              <img
                src="/image5.png"
                alt="Brand Architecture"
                className="w-full h-[600px] object-cover"
              />
            </div>


            {/* Right side - Content */}
            <div className="col-span-7 space-y-10 p-0 m-0">
              {/* Title Section - Motion efektli değişiklikler burada yapıldı */}
              {/* Title Section */}
              <div className="mb-16 overflow-hidden relative space-y-3">

                {/* ÜST SATIR → SAĞA */}
                <div className="marquee-right pl-2">
                  <div className="flex">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                      <span style={{ color: '#ffffff' }}>BRAND STRATEGY</span>&nbsp;
                      <span style={{ color: '#878787' }}>VISUAL IDENTITY</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>BRAND STRATEGY</span>&nbsp;
                      <span style={{ color: '#878787' }}>VISUAL IDENTITY</span>&nbsp;
                    </h3>

                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap">
                      <span style={{ color: '#ffffff' }}>BRAND STRATEGY</span>&nbsp;
                      <span style={{ color: '#878787' }}>VISUAL IDENTITY</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>BRAND STRATEGY</span>&nbsp;
                      <span style={{ color: '#878787' }}>VISUAL IDENTITY</span>&nbsp;
                    </h3>
                  </div>
                </div>

                {/* ALT SATIR → SOLA */}
                <div className="marquee-left pl-24">
                  <div className="flex">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                      <span style={{ color: '#ffffff' }}>LOGO DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>REBRANDING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>LOGO DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>REBRANDING</span>&nbsp;
                    </h3>

                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap">
                      <span style={{ color: '#ffffff' }}>LOGO DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>REBRANDING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>LOGO DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>REBRANDING</span>&nbsp;
                    </h3>
                  </div>
                </div>

              </div>


              {/* Description */}
              <div className="space-y-8">
                <div className="flex gap-8">
                  <span className="text-1xl font-bold ml-30 mt-3">{'>>>'} </span>
                  <div className="space-y-4 mt-3">
                    <p className="text-gray-500 text-lg leading-relaxed ml-20">
                      Naming, positioning, and identity systems designed
                      to <br />
                      give ideas a pulse. <br />
                      We build brands that feel alive — strategic at their<br />
                      core, human in their expression.
                    </p>

                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 pt-12 ml-67">
                  <h4 className="text-2xl font-bold text-white">Brand Strategy</h4>
                  <h4 className="text-2xl font-bold text-white">Visual Identity</h4>
                  <h4 className="text-2xl font-bold text-white">Logo Design</h4>
                  <h4 className="text-2xl font-bold text-white">Rebranding</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Direction Section */}
      <section className="px-0 py-16">
        <div className="mb-16">
          <a href="#visual" className="text-red-500 text-sm font-semibold  pt-10 font-sans hover:text-white transition mt-10 px-12 ">
            SERVICES          </a>
          <h2 id="visual" className="text-7xl font-bold text-white text-center top-0 mb-18 pb-5 mt-25 font-sans">
            VISUAL DIRECTION           </h2>

          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-5 pl-12 -ml-12">
              <img
                src="/image6.png"
                alt="Visual Direction "
                className="w-full h-[630px] object-cover"
              />
            </div>


            {/* Right side - Content */}
            <div className="col-span-7 space-y-10 p-0 m-0">
              {/* Title Section - Motion efektli değişiklikler burada yapıldı */}
              {/* Title Section */}
              <div className="mb-16 overflow-hidden relative space-y-3">

                {/* ÜST SATIR → SAĞA */}
                <div className="marquee-right pl-2">
                  <div className="flex">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                      <span style={{ color: '#ffffff' }}>GRAPHIC DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>MOTION DESIGN</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>GRAPHIC DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>MOTION DESIGN</span>&nbsp;
                    </h3>

                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                      <span style={{ color: '#ffffff' }}>GRAPHIC DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>MOTION DESIGN</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>GRAPHIC DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>MOTION DESIGN</span>&nbsp;
                    </h3>
                  </div>
                </div>

                {/* ALT SATIR → SOLA */}
                <div className="marquee-left p-0 m-0">
                  <div className="flex p-0 m-0">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16 m-0 p-0">
                      <span style={{ color: '#ffffff' }}>ART DIRECTION</span>&nbsp;
                      <span style={{ color: '#878787' }}>VIDEO EDITING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>VISUAL CONCEPT DEVELOPMENT</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>ART DIRECTION</span>&nbsp;
                      <span style={{ color: '#878787' }}>VIDEO EDITING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>VISUAL CONCEPT DEVELOPMENT</span>&nbsp;
                    </h3>

                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16 m-0 p-0">
                      <span style={{ color: '#ffffff' }}>ART DIRECTION</span>&nbsp;
                      <span style={{ color: '#878787' }}>VIDEO EDITING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>VISUAL CONCEPT DEVELOPMENT</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>ART DIRECTION</span>&nbsp;
                      <span style={{ color: '#878787' }}>VIDEO EDITING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>VISUAL CONCEPT DEVELOPMENT</span>&nbsp;
                    </h3>
                  </div>
                </div>

              </div>


              {/* Description */}
              <div className="space-y-8">
                <div className="flex gap-8">
                  <span className="text-1xl font-bold ml-30 mt-3">{'>>>'} </span>
                  <div className="space-y-4 mt-3">
                    <p className="text-gray-500 text-lg leading-relaxed ml-20">
                      Design,motion and art that shape <br />
                      perception. <br />
                      From minimalist compositions to moving visuals — <br />
                      every frame carries intention.

                    </p>

                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 pt-2 ml-67">
                  <h4 className="text-2xl font-bold text-white">Graphic Design</h4>
                  <h4 className="text-2xl font-bold text-white">Motion Design</h4>
                  <h4 className="text-2xl font-bold text-white">Art Direction</h4>
                  <h4 className="text-2xl font-bold text-white">Video Editing</h4>
                  <h5 className="text-2xl font-bold text-white">Visual Concept Development</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign & Narrative Design Section */}
      <section className="px-0 py-16">
        <div className="mb-16">
          <a href="#campaign" className="text-red-500 text-sm font-semibold  font-sans hover:text-white transition  px-12 ">
            SERVICES          </a>
          <h2 id="campaign" className="text-7xl font-bold text-white text-center top-0 mb-12 pb-5 mt-25  font-sans">
            CAMPAIGN & NARRATIVE <br />
            DESIGN           </h2>

          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-5 pl-12 -ml-12">
              <img
                src="/image7.png"
                alt="Campaign & Narrative Design"
                className="w-full h-[600px] object-cover"
              />
            </div>


            {/* Right side - Content */}
            <div className="col-span-7 space-y-10 p-0 m-0">
              {/* Title Section - Motion efektli değişiklikler burada yapıldı */}
              {/* Title Section */}
              <div className="mb-8 overflow-hidden relative space-y-3">

                {/* ÜST SATIR → SAĞA */}
                <div className="marquee-right pl-2">
                  <div className="flex">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                      <span style={{ color: '#ffffff' }}>CAMPAIGN STRATEGY</span>&nbsp;
                      <span style={{ color: '#878787' }}>COPYWRITING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CREATIVE DIRECTION</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CAMPAIGN STRATEGY</span>&nbsp;
                      <span style={{ color: '#878787' }}>COPYWRITING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CREATIVE DIRECTION</span>&nbsp;

                    </h3>

                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                      <span style={{ color: '#ffffff' }}>CAMPAIGN STRATEGY</span>&nbsp;
                      <span style={{ color: '#878787' }}>COPYWRITING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CREATIVE DIRECTION</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CAMPAIGN STRATEGY</span>&nbsp;
                      <span style={{ color: '#878787' }}>COPYWRITING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CREATIVE DIRECTION</span>&nbsp;

                    </h3>
                  </div>
                </div>

                {/* ALT SATIR → SOLA */}
                <div className="marquee-left p-0 m-0">
                  <div className="flex p-0 m-0">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16 m-0 p-0">
                      <span style={{ color: '#ffffff' }}>CONCEPT DEVELOPMENT</span>&nbsp;
                      <span style={{ color: '#878787' }}>STORYTELLING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CONTENT MARKETING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CONCEPT DEVELOPMENT</span>&nbsp;
                      <span style={{ color: '#878787' }}>STORYTELLING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CONTENT MARKETING</span>&nbsp;
                    </h3>

                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16 m-0 p-0">
                      <span style={{ color: '#ffffff' }}>CONCEPT DEVELOPMENT</span>&nbsp;
                      <span style={{ color: '#878787' }}>STORYTELLING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CONTENT MARKETING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CONCEPT DEVELOPMENT</span>&nbsp;
                      <span style={{ color: '#878787' }}>STORYTELLING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CONTENT MARKETING</span>&nbsp;
                    </h3>
                  </div>
                </div>

              </div>


              {/* Description */}
              <div className="space-y-1">
                <div className="flex gap-8">
                  <span className="text-1xl font-bold ml-30 mt-1">{'>>>'} </span>
                  <div className="space-y-2 mt-0">
                    <p className="text-gray-500 text-lg leading-relaxed ml-20">
                      We craft campaigns that speak beyond slogans — <br />
                      stories that connect business goals with human <br />
                      emotion. <br />
                      Every word, every frame, every pause is part of the <br />
                      story.

                    </p>

                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 pt-2 ml-67">
                  <h4 className="text-2xl font-bold text-white">Campaign Strategy</h4>
                  <h4 className="text-2xl font-bold text-white">Copywriting</h4>
                  <h4 className="text-2xl font-bold text-white">Creative Direction</h4>
                  <h4 className="text-2xl font-bold text-white">Concept Development</h4>
                  <h5 className="text-2xl font-bold text-white">Storytelling</h5>
                  <h6 className="text-2xl font-bold text-white">Content Marketing</h6>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Digital & Motion Experiences Section */}
      <section className="px-0 py-16">
        <div className="mb-16">
          <a href="#digital" className="text-red-500 text-sm font-semibold  pt-10 font-sans hover:text-white transition mt-10 px-12 ">
            SERVICES          </a>
          <h2 id="digital" className="text-7xl font-bold text-white text-center top-0 mb-12 pb-5 mt-25 font-sans">
            DIGITAL & MOTION <br />
            EXPERIENCES          </h2>

          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-5 pl-12 -ml-12">
              <img
                src="/image8.png"
                alt="Digital & Motion Experiences"
                className="w-full h-[600px] object-cover"
              />
            </div>


            {/* Right side - Content */}
            <div className="col-span-7 space-y-10 p-0 m-0">
              {/* Title Section - Motion efektli değişiklikler burada yapıldı */}
              {/* Title Section */}
              <div className="mb-16 overflow-hidden relative space-y-3">

                {/* ÜST SATIR → SAĞA */}
                <div className="marquee-right pl-2">
                  <div className="flex">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                      <span style={{ color: '#ffffff' }}>SOCIAL MEDIA DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>DIGITAL ADVERTISING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>SOCIAL MEDIA DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>DIGITAL ADVERTISING</span>&nbsp;
                    </h3>

                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                      <span style={{ color: '#ffffff' }}>SOCIAL MEDIA DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>DIGITAL ADVERTISING</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>SOCIAL MEDIA DESIGN</span>&nbsp;
                      <span style={{ color: '#878787' }}>DIGITAL ADVERTISING</span>&nbsp;
                    </h3>
                  </div>
                </div>

                {/* ALT SATIR → SOLA */}
                <div className="marquee-left p-0 m-0">
                  <div className="flex p-0 m-0">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16 m-0 p-0">
                      <span style={{ color: '#ffffff' }}>VIDEO PRODUCTION</span>&nbsp;
                      <span style={{ color: '#878787' }}>UI / UX CONCEPTS</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>INTERACTIVE MEDIA</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>VIDEO PRODUCTION</span>&nbsp;
                      <span style={{ color: '#878787' }}>UI / UX CONCEPTS</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>INTERACTIVE MEDIA</span>&nbsp;
                    </h3>

                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16 m-0 p-0">
                      <span style={{ color: '#ffffff' }}>VIDEO PRODUCTION</span>&nbsp;
                      <span style={{ color: '#878787' }}>UI / UX CONCEPTS</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>INTERACTIVE MEDIA</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>VIDEO PRODUCTION</span>&nbsp;
                      <span style={{ color: '#878787' }}>UI / UX CONCEPTS</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>INTERACTIVE MEDIA</span>&nbsp;
                    </h3>
                  </div>
                </div>

              </div>


              {/* Description */}
              <div className="space-y-8">
                <div className="flex gap-8">
                  <span className="text-1xl font-bold ml-30">{'>>>'} </span>
                  <div className="space-y-4 ">
                    <p className="text-gray-500 text-lg leading-relaxed ml-20">
                      From social media presence to cinematic <br />
                      storytelling, we design movement — visuals that <br />
                      breathe, interact and linger.

                    </p>

                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 pt-2 ml-67">
                  <h4 className="text-2xl font-bold text-white">Social Media Design</h4>
                  <h4 className="text-2xl font-bold text-white">Digital Advertising</h4>
                  <h4 className="text-2xl font-bold text-white">Video Production / Animation</h4>
                  <h4 className="text-2xl font-bold text-white">UI/UX Concepts</h4>
                  <h5 className="text-2xl font-bold text-white">Interactive Media</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Consultancy Section */}

      <section className="px-0 py-16">
        <div className="mb-16">
          <a href="#creative" className="text-red-500 text-sm font-semibold  pt-10 font-sans hover:text-white transition mt-10 px-12 ">
            SERVICES          </a>
          <h2 id="creative" className="text-7xl font-bold text-white text-center top-0 mb-18 pb-5 mt-25 font-sans">
            CREATIVE CONSULTANCY          </h2>

          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-5 pl-12 -ml-12">
              <img
                src="/image9.png"
                alt="Creative Consultancy"
                className="w-full h-[630px] object-cover"
              />
            </div>


            {/* Right side - Content */}
            <div className="col-span-7 space-y-10 p-0 m-0">
              {/* Title Section - Motion efektli değişiklikler burada yapıldı */}
              {/* Title Section */}
              <div className="mb-16 overflow-hidden relative space-y-3">

                {/* ÜST SATIR → SAĞA */}
                <div className="marquee-right pl-2">
                  <div className="flex">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                      <span style={{ color: '#ffffff' }}>CREATIVE CONSULTING</span>&nbsp;
                      <span style={{ color: '#878787' }}>BRAND WORKSHOPS</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CREATIVE CONSULTING</span>&nbsp;
                      <span style={{ color: '#878787' }}>BRAND WORKSHOPS</span>&nbsp;
                    </h3>

                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16">
                      <span style={{ color: '#ffffff' }}>CREATIVE CONSULTING</span>&nbsp;
                      <span style={{ color: '#878787' }}>BRAND WORKSHOPS</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>CREATIVE CONSULTING</span>&nbsp;
                      <span style={{ color: '#878787' }}>BRAND WORKSHOPS</span>&nbsp;
                    </h3>
                  </div>
                </div>

                {/* ALT SATIR → SOLA */}
                <div className="marquee-left p-0 m-0">
                  <div className="flex p-0 m-0">
                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16 m-0 p-0">
                      <span style={{ color: '#ffffff' }}>TREND RESEARCH</span>&nbsp;
                      <span style={{ color: '#878787' }}>COMMUNICATION STRATEGY</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>ART-BASED BRAND DEVELOPMENT</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>TREND RESEARCH</span>&nbsp;
                      <span style={{ color: '#878787' }}>COMMUNICATION STRATEGY</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>ART-BASED BRAND DEVELOPMENT</span>&nbsp;
                    </h3>

                    <h3 className="text-6xl font-extrabold leading-none whitespace-nowrap pr-16 m-0 p-0">
                      <span style={{ color: '#ffffff' }}>TREND RESEARCH</span>&nbsp;
                      <span style={{ color: '#878787' }}>COMMUNICATION STRATEGY</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>ART-BASED BRAND DEVELOPMENT</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>TREND RESEARCH</span>&nbsp;
                      <span style={{ color: '#878787' }}>COMMUNICATION STRATEGY</span>&nbsp;
                      <span style={{ color: '#ffffff' }}>ART-BASED BRAND DEVELOPMENT</span>&nbsp;
                    </h3>
                  </div>
                </div>

              </div>


              {/* Description */}
              <div className="space-y-8">
                <div className="flex gap-8">
                  <span className="text-1xl font-bold ml-30 mt-3">{'>>>'} </span>
                  <div className="space-y-4 mt-3">
                    <p className="text-gray-500 text-lg leading-relaxed ml-20">
                      We help brands rediscover their essence — aligning <br />
                      what they say, what they show, and what they stand <br />
                      for.
                    </p>

                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 pt-2 ml-67 mt-13">
                  <h4 className="text-2xl font-bold text-white">Creative Consulting</h4>
                  <h4 className="text-2xl font-bold text-white">Brand Workshops</h4>
                  <h4 className="text-2xl font-bold text-white">Trend Research</h4>
                  <h4 className="text-2xl font-bold text-white">Communication Strategy</h4>
                  <h5 className="text-2xl font-bold text-white">Art-Based Brand Development</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section - Your Vision Deserves */}
      <section className="max-w-17xl mx-auto px-12 py-16">
        <div
          className="relative overflow-hidden min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/collobrate.png')" }}
        >


          {/* Sol Yazı */}
          <div className="absolute top-10 left-10 z-10">
            <h2 className="text-6xl font-bold text-white mb-8 leading-none">
              YOUR VISION DESERVES<br />
              A TAILORED SOLUTION
            </h2>
          </div>

          {/* Sağ Alt Text + Button */}
          <div className="absolute bottom-8 right-8 text-right z-10 ">
            <p className="text-white font-bold text-sm  leading-relaxed mr-20">
              SHARE YOUR GOALS AND<br />
              WE'LL CRAFT A CUSTOM<br />
              OFFER FOR YOUR BRAND.
            </p>

            <button
              className="
                   text-white 
                   px-5 py-2 mr-15 mb-20 mt-15
                   text-sm font-semibold 
                   transition 
                   flex items-center gap-2 
                   ml-auto"


              style={{
                backgroundColor: "rgba(255, 82, 82, 0.35)",   // nar çiçeği şeffaf
                borderColor: "rgba(255, 82, 82, 0.7)",        // nar çiçeği çerçeve
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 82, 82, 0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 82, 82, 0.35)";
              }}
            >
              LET'S COLLABORATE
              <span className="text-xl">+</span>
            </button>

          </div>
        </div>
      </section>

      {/* Motion Section – CREATIVE CONSULTANCY / DIGITAL & MOTION EXPERIENCES */}
<section className="w-full overflow-hidden py-20 bg-[#121727]">
  <div className="space-y-6">

    {/* ÜST SATIR – SAĞA */}
    <div className="marquee-right">
      <div className="flex whitespace-nowrap">
        <h3 className="text-7xl font-extrabold" style={{ color: "#F5F5F5" }}>
          CREATIVE CONSULTANCY &nbsp;
          CREATIVE CONSULTANCY &nbsp;
          CREATIVE CONSULTANCY &nbsp;
        </h3>

        <h3 className="text-7xl font-extrabold" style={{ color: "#F5F5F5" }}>
          CREATIVE CONSULTANCY &nbsp;
          CREATIVE CONSULTANCY &nbsp;
          CREATIVE CONSULTANCY &nbsp;
        </h3>
      </div>
    </div>

    {/* ALT SATIR – SOLA */}
    <div className="marquee-left">
      <div className="flex whitespace-nowrap">
      <h3 
  className="text-7xl font-extrabold"
  style={{ color: "#A3A3A3" }}  
>
  DIGITAL & MOTION EXPERIENCES &nbsp;
  DIGITAL & MOTION EXPERIENCES &nbsp;
  DIGITAL & MOTION EXPERIENCES &nbsp;
</h3>

<h3 
  className="text-7xl font-extrabold"
  style={{ color: "#A3A3A3" }}  
>
  DIGITAL & MOTION EXPERIENCES &nbsp;
  DIGITAL & MOTION EXPERIENCES &nbsp;
  DIGITAL & MOTION EXPERIENCES &nbsp;
</h3>

      </div>
    </div>

  </div>
</section>





    </div>
  );
}