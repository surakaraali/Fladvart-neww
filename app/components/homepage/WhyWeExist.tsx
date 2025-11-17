export default function WhyWeExist() {
  return (
    <div className="min-h-screen bg-white flex gap-7">
      {/* Why We Exist Section */}
      <section className="px-12 py-1">
        <div className="mb-32">
          <div className="text-red-500 text-sm font-semibold pt-10 font-sans">
            WHY WE EXIST
          </div>

          <h2 className="text-7xl font-bold text-[#878787] text-center top-0 mb-5 pb-5 mt-2.5 font-sans">
            WHY WE EXIST
          </h2>

          {/* Two column layout */}
          <div className="grid grid-cols-2 gap-16 mb-0 mt-9">
            {/* Left column */}
            <div>
              <h3 className="text-4xl text-black font-extrabold mb-4 pt-24 leading-tight font-sans">
                WE'RE NOT HERE
                <br />
                TO DECORATE PERCEPTION;
                <br />
                WE'RE HERE TO SHAPE IT.
              </h3>
            </div>

            {/* Right column */}
            <div className="space-y-4 text-[#414040] text-lg text-right font-light font-sans">
              <p className="leading-relaxed">
                Brands don't need another campaign. They need ideas with
                intention — <br />
                ideas that move people, build perception, and last beyond a
                scroll. We <br />
                believe creativity begins where familiarity ends. We're not here
                to decorate <br />
                perception; we're here to shape it.
              </p>

              <p className="leading-relaxed">
                Our work exists between logic and emotion, between commerce and
                culture. <br />
                Every brand has a presence. But not every presence is felt. We
                see <br />
                advertising not as storytelling, but as sense-making — where
                creativity gives <br />
                shape to what brands stand for, and strategy gives it direction.
              </p>
            </div>
          </div>

          {/* Three images row */}
          <div className="grid grid-cols-3 gap-6 pb-2">
            <div>
              <img src="/image1.png" alt="" className="w-8/12 h-auto" />
            </div>
            <div className="flex flex-col items-center justify-start ">
              <img
                src="/image2.png"
                alt=""
                className="w-8/12 h-auto mt-16 mb-8"
              />
              <div className="w-full text-right text-[#121727] font-sans font-light mt-4 ">
                <p className="text-base">
                  <span className="font-extrabold text-gray-800">Fladvart</span>{" "}
                  is a creative studio built for brands that want to be felt
                </p>
                <p className="italic">— not just seen.</p>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <img src="/image3.png" alt="" className="w-8/12 h-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
