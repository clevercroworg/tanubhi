import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import ServicesOverview from "@/components/ServicesOverview";
import FeaturedPromo from "@/components/FeaturedPromo";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Tanubhi Beauty Care | Premium Ladies Salon Singapore",
  description:
    "Discover ladies-only beauty wellness at Tanubhi Beauty Care, 631 Bedok Reservoir Road, Singapore. Specialized in luxury waxing, advanced facial treatments, and bridal henna.",
  alternates: {
    canonical: "https://tanubhi.com",
  },
};

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
