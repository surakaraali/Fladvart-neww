export default function WhyWeExist() {
  return (
   <div className="min-h-screen bg-white">
      {/* Why We Exist Section */}
      <section className="px-12 py-16">
        <div className="mb-32">
          <div className="text-red-500 text-sm font-semibold mb-16">WHY WE EXIST</div>
          
          <h2 className="text-8xl font-bold text-[#878787] text-center mb-32">
            WHY WE EXIST
          </h2>

          <div className="relative">

            <div className="grid grid-cols-12 gap-8 relative" style={{zIndex: 2}}>
              {/* Left side - Heading and first image */}
              <div className="col-span-4">
                <h3 className="text-4xl text-black font-bold mb-12 leading-tight">
                  WE'RE NOT HERE<br />
                  TO DECORATE PERCEPTION;<br />
                  WE'RE HERE TO SHAPE IT.
                </h3>
                
                <div className="bg-white overflow-hidden ">
                  <img src="/image1.png" alt="Why We Exist" className="w-80 h-auto" />
                </div>
              </div>

              {/* Middle - Second image and Fladvart text */}
              <div className="col-span-4 flex flex-col justify-end items-center">
                <div className="bg-white w-full mb-8">
                  <img src="/image2.png" alt="" className="w-80 h-auto object-cover" />
                </div>
                
                <div className="mt-auto text-center">
                  <p className="text-gray-600 text-base">
                    <span className="font-semibold text-gray-800">Fladvart</span> is a creative studio built for brands that want to be felt
                  </p>
                  <p className="text-gray-400 italic text-base">— not just seen.</p>
                </div>
              </div>

              {/* Right side - Text content and third image */}
              <div className="col-span-4 flex flex-col">
                <div className="space-y-4 mb-8 text-gray-500 text-right text-m">
                  <p className="leading-relaxed">
                    Brands don't need another campaign. They need ideas with intention — 
                    ideas that move people, build perception, and last beyond a scroll. We 
                    believe creativity begins where familiarity ends. We're not here to decorate 
                    perception; we're here to shape it.
                  </p>
                  
                  <p className="leading-relaxed">
                    Our work exists between logic and emotion, between commerce and culture. 
                    Every brand has a presence. But not every presence is felt. We see 
                    advertising not as storytelling, but as sense-making — where creativity gives 
                    shape to what brands stand for, and strategy gives it direction.
                  </p>
                </div>

                <div className="bg-white overflow-hidden mt-auto">
                  <img src="/image3.png" alt="" className="w-80 h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}