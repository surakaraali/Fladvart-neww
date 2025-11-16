"use client";
import Footer from "./components/Footer";
import HeroSection from "./components/homepage/HeroSection";
import WhyWeExist from "./components/homepage/WhyWeExist";
import ServicesSection from "./components/homepage/ServicesSection";

export default function Home() {
  return (
    <div className="bg-[#fafbfc]">
      <HeroSection />

      <WhyWeExist />
      
      <ServicesSection />
 
      <Footer />
    </div>
  );
}
