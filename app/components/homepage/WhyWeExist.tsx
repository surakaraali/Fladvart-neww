export default function WhyWeExist() {
  return (
    <div className="min-h-screen bg-[#121727] flex gap-7">
      {/* Why We Exist Section */}
      <section className="px-12 py-1 mb-15">
        <div className="mb-2 mt-12">
          <a href="#why" className="text-red-500 text-sm font-semibold  pt-10 font-sans hover:text-white transition">
            WHY WE EXIST
          </a>


          <h2 id="why" className="text-7xl font-bold text-white text-center top-0 mb-5 pb-5 mt-25 font-sans">
            WHY WE EXIST
          </h2>

          {/* Two column layout */}
          <div className="grid grid-cols-2 gap-16 mb-0 mt-9">
            {/* Left column */}
            <div>
              <h3 className="text-4xl text-white font-extrabold mb-4 pt-24 leading-tight font-sans">
                WE'RE NOT HERE
                <br />
                TO DECORATE PERCEPTION;
                <br />
                WE'RE HERE TO SHAPE IT.
              </h3>
            </div>

            {/* Right column */}
            <div className="mt-3 space-y-4 text-white text-lg text-right font-light font-sans">
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
          <div className="grid grid-cols-3 gap-10 pb-2">
            <div>
              <img src="/image1.png" alt="" className="w-8/12 h-auto" />
            </div>

            {/* Ortadaki kolon */}
            <div className="flex flex-col items-center justify-center ">
              <img
                src="/image2.png"
                alt=""
                className="w-2/3 h-auto mt-10 mr-90"
              />

              <div className="flex flex-col items-start">
                <p className="text-[20px] leading-snug text-white mt-15 ">
                  <span className="font-extrabold text-gray">Fladvart</span>{" "}
                  is a creative studio built for brands that want to be felt
                </p>

                <p className="italic text-[20px] text-white mt-1 ml-60 ">
                  — not just seen.
                </p>
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
