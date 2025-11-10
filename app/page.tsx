import Header from "@/components/navigation/Header";
import Hero from "@/components/sections/Hero";
import PoweredBy from "@/components/sections/PoweredBy";
import Services from "@/components/sections/Services";
import Difference from "@/components/sections/Difference";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQs from "@/components/sections/FAQs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import AboutUs from "@/components/sections/AboutUs";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main className="bg-black text-white w-full overflow-x-hidden">
      <Header />

      <div id="hero">
        <Hero />
      </div>

      <div id="poweredby">
        <PoweredBy />
      </div>

      <div id="about">
        <AboutUs />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="difference">
        <Difference />
      </div>

      <div id="howitworks">
        <HowItWorks />
      </div>

      <div id="faqs">
        <FAQs />
      </div>

      <div id="cta">
        <CTA />
      </div>

      <Footer />
      <BackToTop />
    </main>
  );
}