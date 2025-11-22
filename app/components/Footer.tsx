"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      {/* Footer Section */}
      <footer className="bg-[#121727] text-white px-12 py-16">
        <div className="bg-[#121727] max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-16">
            {/* Left Column - Contact Form */}
            <div className="col-span-5">
              {/* Logo */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold">
                  <img src="/logofladvart.png" alt="logo" className="w-52 h-auto" />
                </h2>
              </div>

              {/* Form Title */}
              <h3 className="text-xl font-bold mb-8">{t('footer.lets')}</h3>

              {/* Form */}
              <form className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm mb-2">{t('footer.name')}</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white transition"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm mb-2">{t('footer.email')}</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white transition"
                  />
                </div>

                {/* Company Input */}
                <div>
                  <label className="block text-sm mb-2">{t('footer.company')}</label>
                  <input
                    type="text"
                    placeholder={t('footer.company_placeholder')}
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white transition"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm mb-2">{t('footer.message')}</label>
                  <textarea
                    placeholder={t('footer.message_placeholder')}
                    rows={1}
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white transition resize-none"
                  ></textarea>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm mb-2">{t('footer.phone')}</label>
                  <input
                    type="tel"
                    placeholder={t('footer.phone_placeholder')}
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white transition"
                  />
                </div>

                {/* Service Input */}
                <div>
                  <label className="block text-sm mb-2">{t('footer.service')}</label>
                  <input
                    type="text"
                    placeholder={t('footer.service_placeholder')}
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white transition"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-white text-gray-900 px-8 py-3 rounded-sm font-semibold hover:bg-gray-200 transition mt-8"
                >
                  {t('footer.submit')}
                </button>
              </form>
            </div>

            {/* Right Column - Info & Links */}
            <div className="col-span-7 pl-16 mt-56">
              <div className="grid grid-cols-2 gap-16 mb-16">
                {/* Address */}
                <div>
                  <h4 className="text-sm font-semibold mb-4">FLADVART CREATIVE HQ</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    NİŞBETİYE, NİŞBETİYE CD NO:24,<br />
                    34340 BEŞİKTAŞ/İSTANBUL,<br />
                    TÜRKİYE
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-sm font-semibold mb-4">{t('footer.contact')}</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400">
                      <span className="text-white">{t('footer.phone_label')}</span> +90 538 9953
                    </p>
                    <p className="text-gray-400">
                      <span className="text-white">{t('footer.email_label')}</span> info@flad.art
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex gap-16 mb-16">
                <a href="#contact" className="text-sm hover:text-gray-400 transition">{t('footer.contact_us')}</a>
                <a href="#why" className="text-sm hover:text-gray-400 transition">{t('footer.why_we_exist')}</a>
                <a href="#services" className="text-sm hover:text-gray-400 transition">{t('footer.services')}</a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mb-16">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                  <span className="text-gray-900 text-xl">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                  <span className="text-gray-900 text-xl">@</span>
                </a>
              </div>

              {/* Copyright */}
              <div className="flex mt-64 justify-between items-center pt-8 border-gray-800">
                <p className="text-gray-500 text-sm">{t('footer.rights')}</p>
                <p className="text-gray-500 text-sm">© 2025</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
