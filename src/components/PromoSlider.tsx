"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageSquare, Sparkles } from "lucide-react";

export default function PromoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/promo_facial.png",
      tag: "Limited Time Deal",
      title: "15% OFF Gold Glow Facials",
      description: "Rejuvenating anti-aging gold leaf facial therapy for ultimate skin cell recovery and natural brightness.",
      badge: "Skin Care Offer",
      linkService: "Gold Glow Facial",
    },
    {
      image: "/images/promo_henna.png",
      tag: "Bridal Package",
      title: "Free Blowout with Bridal Henna",
      description: "Book custom intricate bridal henna mehndi and receive a complimentary premium hair blowout session.",
      badge: "Henna Deal",
      linkService: "Intricate Bridal Henna",
    },
    {
      image: "/images/parlour_interior.png",
      tag: "Waxing Combo Special",
      title: "Silk Waxing Complete Care",
      description: "Enjoy silky-smooth skin with our gentle low-temperature wax treatments at Singapore's finest ladies-only sanctuary.",
      badge: "Waxing Combo",
      linkService: "Brazilian Waxing",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] overflow-hidden bg-brand-dark">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Slide Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            
            {/* Rose Plum Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b0416]/95 via-[#1b0416]/75 to-transparent sm:to-black/10" />

            {/* Slider Content */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-8 lg:col-span-7 flex flex-col items-start space-y-4 md:space-y-5">
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent-pink/20 border border-brand-accent-pink/30 text-white text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-brand-accent-gold animate-pulse" />
                    <span>{slide.badge}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-pink-100/80 max-w-xl leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Claim Button */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="shimmer-hover inline-flex items-center gap-2 px-5 py-3 rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset shadow-lg shadow-rose-950/40 hover:scale-103 transition-transform"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Claim Offer & Book</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? "bg-brand-accent-pink w-6"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
