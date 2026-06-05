import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-[#1b0416] min-h-screen">
      {/* Mini Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 text-xs text-pink-200/40 font-semibold tracking-wider uppercase">
        <Link href="/" className="hover:text-brand-accent-pink transition-colors">Home</Link>
        <span className="mx-2">&bull;</span>
        <span className="text-brand-accent-gold">Contact Us</span>
      </div>

      {/* Contact Details & Booking Forms */}
      <ContactSection />
    </div>
  );
}
