export default function ServicesSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-16">
          <div className="text-red-500 text-sm font-semibold mb-16">SERVICES</div>
          
          <h2 className="text-8xl font-bold text-gray-400 text-center mb-32">
            SERVICES
          </h2>

          <div className="grid grid-cols-12 gap-8">
            {/* Left side - Image */}
            <div className="col-span-4">
              <div className="bg-black aspect-[3/4]"></div>
            </div>

            {/* Right side - Services List */}
            <div className="col-span-8 space-y-12">
              {/* Service 01 */}
              <div className="flex items-center gap-8 py-6">
                <span className="text-gray-400 text-sm">01</span>
                <h3 className="text-3xl font-bold">BRAND ARCHITECTURE</h3>
              </div>

              {/* Service 02 */}
              <div className="flex items-center gap-8 py-6">
                <span className="text-gray-400 text-sm">02</span>
                <h3 className="text-3xl font-bold">VISUAL DIRECTION</h3>
              </div>

              {/* Service 03 */}
              <div className="flex items-center gap-8 py-6">
                <span className="text-gray-400 text-sm">03</span>
                <h3 className="text-3xl font-bold">CAMPAIGN & NARRATIVE DESIGN</h3>
              </div>

              {/* Service 04 */}
              <div className="flex items-center gap-8 py-6 border-b border-gray-300">
                <span className="text-gray-400 text-sm">04</span>
                <h3 className="text-3xl font-bold">DIGITAL & MOTION EXPERIENCES</h3>
              </div>

              {/* Service 05 - Creative Consultancy */}
              <div className="flex items-center justify-between py-6">
                <div className="flex items-center gap-8">
                  <span className="text-gray-400 text-sm">05</span>
                  <h3 className="text-5xl font-bold leading-tight">
                    CREATIVE<br />CONSULTANCY
                  </h3>
                </div>
                <button className="bg-black text-white rounded-full w-24 h-24 flex items-center justify-center text-sm font-semibold hover:bg-gray-800 transition">
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Architecture Section */}
      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-16">
          <div className="text-red-500 text-sm font-semibold mb-32">SERVICES</div>
          
          <h2 className="text-7xl font-bold text-black mb-32">
            BRAND ARCHITECTURE
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
                  BRAND STRATEGY VISUAL IDENTITY
                </h3>
                <h3 className="text-5xl font-bold text-gray-400 leading-tight">
                  REBRANDING LOGO DESIGN
                </h3>
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