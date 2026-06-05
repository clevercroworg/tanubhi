import Image from "next/image";
import { Sparkles, Calendar } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-20 w-full overflow-hidden border-t border-b border-brand-accent-gold/15">
      {/* Background Image */}
      <Image
        src="/images/cta_bg.png"
        alt="Tanubhi Luxury Spa Background"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Plum Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b0416]/95 via-[#250a20]/85 to-[#1b0416]/95 backdrop-blur-[2px]" />

      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-accent-gold/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
        
        {/* Floating Accent Icon */}
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-brand-accent-pink/15 text-brand-accent-pink border border-brand-accent-pink/30 mb-2 shadow-lg">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>

        {/* Headings */}
        <div className="space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Indulge in <span className="text-gradient-rose-gold font-serif">Pure Wellness?</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-pink-100/80 max-w-xl mx-auto leading-relaxed">
            Treat yourself to our premium, ladies-only waxing, advanced facials, and bridal therapies. 
            Book your slot now and let our certified therapists restore your inner radiance.
          </p>
        </div>

        {/* Action Button & Trust Hint */}
        <div className="flex flex-col items-center gap-4 pt-4">
          <a
            href="#contact"
            className="shimmer-hover inline-flex items-center justify-center px-9 py-4 rounded-full font-sans text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset shadow-lg shadow-rose-500/20 hover:scale-103 transition-transform duration-300"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Secure Your Session Today</span>
          </a>
          
          <div className="flex items-center gap-2 text-[11px] text-brand-accent-gold uppercase tracking-widest font-semibold">
            <span>Ladies Only</span>
            <span className="text-pink-200/20">•</span>
            <span>Bedok, Singapore</span>
            <span className="text-pink-200/20">•</span>
            <span>No Booking Fees</span>
          </div>
        </div>

      </div>
    </section>
  );
}
