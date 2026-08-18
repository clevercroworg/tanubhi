import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Bedok Salon Singapore",
  description:
    "Book your appointment or get in touch with Tanubhi Beauty Care at 631 Bedok Reservoir Road, Singapore. WhatsApp hotline +65 8385 3886 or book online.",
  alternates: {
    canonical: "https://tanubhi.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#1b0416] min-h-screen">
      {/* Mini Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 text-xs text-pink-200/40 font-semibold tracking-wider uppercase">
        <Link href="/" className="hover:text-brand-accent-pink transition-colors">
          Home
        </Link>
        <span className="mx-2">&bull;</span>
        <span className="text-brand-accent-gold">Contact Us</span>
      </div>

      {/* Contact Details & Booking Forms */}
      <ContactSection />
    </div>
  );
}
