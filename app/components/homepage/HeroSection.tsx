export default function HeroSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
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
            <a href="#why" className="hover:opacity-70 transition">WHY WE EXIST</a>
            <a href="#services" className="hover:opacity-70 transition">SERVICES</a>
            <a href="#contact" className="hover:opacity-70 transition">CONTACT US</a>
          </div>
        </nav>

        {/* Hero Text */}
        {/* <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl md:text-6xl font-light text-white italic">
            We are not here to decorate brands.
          </h1>
        </div> */}

        {/* Logo */}
        <div className="absolute bottom-12 left-12 z-10">
          <div className="text-white">
            <img src="/logofladvart.png" alt="Logo" className="w-60 h-auto" />
          </div>
        </div>
        
      </section>
    </div>
  );
}
