import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromoSlider from "@/components/PromoSlider";
import Welcome from "@/components/Welcome";
import ServicesOverview from "@/components/ServicesOverview";
import FeaturedPromo from "@/components/FeaturedPromo";
import PriceList from "@/components/PriceList";
import Testimonials from "@/components/Testimonials";
import BeautyTips from "@/components/BeautyTips";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <PromoSlider />
        <Hero />
        <Welcome />
        <ServicesOverview />
        <FeaturedPromo />
        <PriceList />
        <Testimonials />
        <BeautyTips />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
