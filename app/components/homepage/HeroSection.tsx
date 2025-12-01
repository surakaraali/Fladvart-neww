import { useLanguage } from '../LanguageProvider';

export default function HeroSection() {
  const { locale, setLocale, t } = useLanguage();
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
        <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col gap-2 text-gray-400 text-xs font-light text-left">
            <a
              href="#why"
              className="transition-colors duration-200 hover:text-white"
            >
             {t('nav.why')}
            </a>
            <a
              href="#services"
              className="transition-colors duration-200 hover:text-white"
            >
              {t('nav.services')}
            </a>
            <a
              href="#contact"
              className="transition-colors duration-200 hover:text-white"
            >
              {t('nav.contact')}
            </a>
          </div>
        </nav>
        <div className="absolute top-8 right-8 z-10 text-white text-xs font-light">
          <button
            className={`hover:opacity-70 transition ${locale === 'tr' ? 'font-semibold' : ''}`}
            onClick={() => setLocale('tr')}
          >
            TR
          </button>
          <span className="mx-1">|</span>
          <button
            className={`hover:opacity-70 transition ${locale === 'en' ? 'font-semibold' : ''}`}
            onClick={() => setLocale('en')}
          >
            EN
          </button>
        </div>

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
