import Image from "next/image";
import { Sparkles, CalendarRange, Heart } from "lucide-react";

export default function FeaturedPromo() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#1b0416] to-[#2d0b24] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-accent-pink/10 blur-[90px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-brand-accent-gold/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 relative z-10">
        
        {/* Spotlight 1: Facials & Waxing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-accent-pink bg-brand-accent-pink/20 border border-brand-accent-pink/30">
              <Sparkles className="w-3.5 h-3.5" />
              Signature Care
            </span>
            
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-pink-50">
              Rejuvenating Facial &{" "}
              <span className="text-gradient-rose-gold font-serif">
                Waxing Treatments
              </span>
            </h3>
            
            <p className="font-sans text-sm sm:text-base text-pink-100/80 leading-relaxed">
              Experience the pinnacle of skin health and hair-free silkiness with our expert facial and waxing routines. Our therapists utilize premium wax and organic botanical ingredients tailored for delicate skin, assuring a quick, seamless, and virtually pain-free experience.
            </p>
            
            <ul className="space-y-3 font-sans text-sm text-pink-200/80">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2.5 h-2.5 rounded-full bg-brand-accent-gold shadow-sm" />
                <span><strong className="text-pink-50">Gold Glow Facial:</strong> 24K gold foil flakes for instant brightness.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2.5 h-2.5 rounded-full bg-brand-accent-gold shadow-sm" />
                <span><strong className="text-pink-50">Gentle Waxing:</strong> Strict temperature control for skin comfort.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2.5 h-2.5 rounded-full bg-brand-accent-gold shadow-sm" />
                <span><strong className="text-pink-50">Soothing Post-Care:</strong> Aloe and tea-tree lotions applied post-treatment.</span>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="#contact"
                className="shimmer-hover inline-flex items-center justify-center px-6 py-3.5 rounded-full font-sans text-sm font-bold tracking-wide text-white bg-gradient-pink-sunset shadow-md hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300"
              >
                <CalendarRange className="w-4 h-4 mr-2" />
                Book Skincare Session
              </a>
            </div>
          </div>

          {/* Right: Premium Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative max-w-lg mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-pink-sunset rounded-[2.5rem] rotate-2 scale-102 opacity-15 blur-xs" />
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-brand-accent-gold/25 shadow-xl">
              <Image
                src="/images/facial_treatment.png"
                alt="Advanced Skincare Facial Treatment"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* Spotlight 2: Henna & Bridal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Premium Image */}
          <div className="lg:col-span-6 relative max-w-lg mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-gold rounded-[2.5rem] -rotate-2 scale-102 opacity-15 blur-xs" />
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-brand-accent-gold/25 shadow-xl">
              <Image
                src="/images/bridal_henna.png"
                alt="Intricate Henna Mehndi Artwork"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-accent-gold bg-brand-accent-gold/20 border border-brand-accent-gold/30">
              <Heart className="w-3.5 h-3.5 text-brand-accent-pink" />
              Community Favorite
            </span>
            
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-pink-50">
              Intricate Henna &{" "}
              <span className="text-gradient-gold font-serif">
                Bridal Masterpieces
              </span>
            </h3>
            
            <p className="font-sans text-sm sm:text-base text-pink-100/80 leading-relaxed">
              Highly celebrated among Singapore&apos;s Indian and Malay communities, our traditional henna artwork is a perfect choice for festivals, engagements, and weddings. From simple contemporary patterns to extensive bridal layouts, our artists hand-paint designs that leave a deep, beautiful stain.
            </p>
            
            <ul className="space-y-3 font-sans text-sm text-pink-200/80">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2.5 h-2.5 rounded-full bg-brand-accent-pink shadow-sm" />
                <span><strong className="text-pink-50">Intricate Mehndi:</strong> Traditional layouts for arms, palms, and feet.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2.5 h-2.5 rounded-full bg-brand-accent-pink shadow-sm" />
                <span><strong className="text-pink-50">Premium Bridal Packages:</strong> Styling combos including draping and hair.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2.5 h-2.5 rounded-full bg-brand-accent-pink shadow-sm" />
                <span><strong className="text-pink-50">100% Organic Henna:</strong> Safe, chemical-free herbal henna paste.</span>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="#contact"
                className="shimmer-hover inline-flex items-center justify-center px-6 py-3.5 rounded-full font-sans text-sm font-bold tracking-wide text-white bg-gradient-pink-sunset shadow-md hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300"
              >
                <CalendarRange className="w-4 h-4 mr-2" />
                Book Bridal Appointment
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
