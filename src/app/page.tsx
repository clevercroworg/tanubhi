import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import ServicesOverview from "@/components/ServicesOverview";
import FeaturedPromo from "@/components/FeaturedPromo";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <ServicesOverview />
      <FeaturedPromo />
      <Testimonials />
      <CallToAction />
    </>
  );
}
