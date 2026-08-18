import type { Metadata } from "next";
import ReviewsClient from "@/components/ReviewsClient";

export const metadata: Metadata = {
  title: "Verified Google Reviews & Client Testimonials",
  description:
    "Read 4.5-star verified Google reviews from lady clients in Singapore. Discover testimonials on our waxing, facial therapies, and bridal henna services at Tanubhi Beauty Care.",
  alternates: {
    canonical: "https://tanubhi.com/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <div className="bg-gradient-to-b from-[#fdf8fa] via-white to-[#fdf8fa] min-h-screen py-16 md:py-24">
      <ReviewsClient />
    </div>
  );
}
