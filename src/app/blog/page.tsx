import type { Metadata } from "next";
import BlogClient from "@/components/BlogClient";

export const metadata: Metadata = {
  title: "Beauty Tips & Skincare Advice | Tanubhi Blog",
  description:
    "Expert beauty tips on post-threading aftercare, facial routines, summer hair treatments, organic waxing, and bridal henna stains from Tanubhi Beauty Care Singapore.",
  alternates: {
    canonical: "https://tanubhi.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-[#fdf8fa] via-white to-[#fdf8fa] min-h-screen py-16 md:py-24">
      <BlogClient />
    </div>
  );
}
