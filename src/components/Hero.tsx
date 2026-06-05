import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden bg-gradient-to-br from-[#fdf8fa] via-[#fffbfd] to-[#f5e9ef]">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-accent-pink/5 blur-[90px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-accent-gold/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Typography & Action items */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-accent-gold/20 text-brand-accent-gold text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent-pink animate-spin-slow" />
            <span>Redefining Elegance in Singapore</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-brand-dark">
            Discover the{" "}
            <span className="text-gradient-rose-gold font-serif">
              Beauty Within
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#664e60] max-w-xl leading-relaxed">
            Welcome to <strong className="text-brand-dark font-semibold">Tanubhi Beauty Care</strong>. 
            We specialize in advanced facials, gentle waxing, and exquisite bridal makeup 
            crafted to highlight your natural poise. Join us at Bedok for a relaxing, lady-only getaway.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
            <a
              href="#contact"
              className="shimmer-hover inline-flex items-center justify-center px-8 py-4 rounded-full font-sans text-sm sm:text-base font-bold tracking-wide text-white bg-gradient-pink-sunset hover:shadow-xl hover:shadow-rose-500/25 active:scale-95 transition-all duration-300 text-center"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#pricelist"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans text-sm sm:text-base font-semibold tracking-wide text-brand-dark hover:text-brand-accent-pink border border-brand-dark/15 hover:border-brand-accent-pink/40 bg-white/60 hover:bg-white shadow-sm transition-all duration-300 text-center"
            >
              Explore Pricing
            </a>
          </div>

          {/* Quick trust metrics */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-8 border-t border-brand-accent-gold/15 w-full max-w-lg">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-extrabold text-brand-dark">5,000+</span>
              <span className="text-[10px] uppercase tracking-wider text-[#664e60]/70 mt-1 font-semibold">Happy Visits</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-extrabold text-brand-dark">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-[#664e60]/70 mt-1 font-semibold">Ladies Only</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-extrabold text-brand-dark">4.9 ★</span>
              <span className="text-[10px] uppercase tracking-wider text-[#664e60]/70 mt-1 font-semibold">Top Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column: Static Visual Frame */}
        <div className="lg:col-span-5 relative flex justify-center items-center w-full max-w-md lg:max-w-none mx-auto">
          {/* Shimmering frame outlines */}
          <div className="absolute inset-0 bg-gradient-pink-sunset rounded-[2.5rem] rotate-3 scale-102 opacity-15 blur-xs" />
          <div className="absolute inset-0 border border-brand-accent-gold/20 rounded-[2.5rem] -rotate-2" />
          
          <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-brand-accent-gold/25 shadow-2xl bg-brand-card">
            <Image
              src="/images/hero_model.png"
              alt="Premium Beauty Model Tanubhi Care"
              fill
              priority
              sizes="(max-w-720px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Elegant glass card overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-brand-accent-gold/20 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-accent-gold font-bold uppercase tracking-wider">Expertise</span>
                <span className="text-sm font-bold text-brand-dark">Flawless Makeover</span>
              </div>
              <div className="h-8 w-[1px] bg-brand-accent-gold/25" />
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-[#664e60]/60 font-semibold uppercase">Starts from</span>
                <span className="text-sm font-extrabold text-brand-accent-gold">$35+</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
