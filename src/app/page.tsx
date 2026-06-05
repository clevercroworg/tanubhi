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

export default function Home() {
  return (
    <>
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
    </>
  );
}
