export default function HeroSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        {/* Arka plan videosu */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/BackgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Navigation */}
        <nav className="absolute top-8 text-center z-10">
          <div className="flex flex-col gap-2 text-white text-xs font-light">
            <a href="#why" className="hover:opacity-70 transition">
              WHY WE EXIST
            </a>
            <a href="#services" className="hover:opacity-70 transition">
              SERVICES
            </a>
            <a href="#contact" className="hover:opacity-70 transition">
              CONTACT US
            </a>
          </div>
        </nav>

        {/* Hero Text */}
        {/* <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl md:text-6xl font-light text-white italic">
            We are not here to decorate brands.
          </h1>
        </div> */}

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
