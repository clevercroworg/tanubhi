"use client";

import PriceList from "@/components/PriceList";
import Link from "next/link";
import { ArrowRight, Download, HelpCircle } from "lucide-react";

export default function PriceListPage() {
  return (
    <div className="bg-gradient-to-b from-[#fdf8fa] via-white to-[#fdf8fa] min-h-screen">
      {/* Mini Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 text-xs text-brand-dark/40 font-semibold tracking-wider uppercase">
        <Link href="/" className="hover:text-brand-accent-pink transition-colors">Home</Link>
        <span className="mx-2">&bull;</span>
        <span className="text-brand-accent-gold">Price List</span>
      </div>

      {/* Main interactive Price list */}
      <PriceList />

      {/* PDF Brochure Download Section */}
      <div className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
        <div className="glass-panel-heavy rounded-3xl p-8 border border-brand-accent-gold/25 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 bg-white/80">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">
              Want a offline copy?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#664e60] leading-relaxed">
              Download our latest price list catalog brochure in PDF format to view offline on your device anytime.
            </p>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Downloading Price Brochure PDF...");
            }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset hover:shadow-lg transition-all duration-300 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download Catalog PDF</span>
          </a>
        </div>

        {/* FAQs */}
        <div className="mt-20 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-gradient-rose-gold text-xs font-bold uppercase tracking-wider">FAQ</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">Frequently Asked Questions</h3>
            <div className="w-12 h-[2px] bg-brand-accent-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-white rounded-2xl border border-brand-accent-gold/15 space-y-2">
              <h4 className="font-serif text-base font-bold text-brand-dark flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-accent-pink shrink-0" />
                <span>Is your salon ladies-only?</span>
              </h4>
              <p className="font-sans text-xs text-[#664e60] leading-relaxed">
                Yes, Tanubhi Beauty Care is strictly a female-only wellness salon. All our therapists are certified women, and we ensure absolute privacy and security for all our lady visitors.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-accent-gold/15 space-y-2">
              <h4 className="font-serif text-base font-bold text-brand-dark flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-accent-pink shrink-0" />
                <span>Do I need an appointment?</span>
              </h4>
              <p className="font-sans text-xs text-[#664e60] leading-relaxed">
                We highly recommend booking an appointment prior to your visit to ensure zero wait times. Walk-ins are accommodated only subject to availability.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-accent-gold/15 space-y-2">
              <h4 className="font-serif text-base font-bold text-brand-dark flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-accent-pink shrink-0" />
                <span>What is your cancellation policy?</span>
              </h4>
              <p className="font-sans text-xs text-[#664e60] leading-relaxed">
                We kindly ask you to notify us at least 2 hours in advance if you need to reschedule or cancel your appointment, so we can allocate the slot to other guests.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-accent-gold/15 space-y-2">
              <h4 className="font-serif text-base font-bold text-brand-dark flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-accent-pink shrink-0" />
                <span>Can I book a bridal package?</span>
              </h4>
              <p className="font-sans text-xs text-[#664e60] leading-relaxed">
                Absolutely! We offer custom bridal makeup, hairdos, and elaborate henna packages. We recommend booking at least 1 month in advance for bridal services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
