import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Welcome() {
  const pillars = [
    {
      title: "Radiant Skin Facials",
      subtitle: "Rejuvenate and restore your natural glow with organic herbal blends.",
      image: "/images/welcome_facials.png",
      tag: "Skin Care",
    },
    {
      title: "Precision Threading",
      subtitle: "Flawless eyebrow shaping and gentle hair removal by expert hands.",
      image: "/images/welcome_threading.png",
      tag: "Threading",
    },
    {
      title: "Bespoke Styling",
      subtitle: "Tailored cuts, premium hair coloring, and nourishing treatment rituals.",
      image: "/images/welcome_hair.png",
      tag: "Hair Studio",
    },
    {
      title: "Intricate Henna Art",
      subtitle: "Celebrate special occasions with custom, detailed bridal mehndi artwork.",
      image: "/images/welcome_henna.png",
      tag: "Bridal & Henna",
    },
  ];


  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-[#1b0416] to-[#2d0b24] overflow-hidden scroll-mt-28">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent-pink/10 blur-[90px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-accent-gold/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-brand-accent-pink/20 text-brand-accent-pink text-xs font-bold tracking-wider uppercase">
            Discover Tanubhi Salon
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-pink-50">
            A Sanctuary of{" "}
            <span className="text-gradient-rose-gold font-serif">
              Rejuvenation & Elegance
            </span>
          </h2>
          <div className="w-20 h-[3px] bg-gradient-pink-sunset mx-auto rounded-full" />
          <p className="font-sans text-base sm:text-lg text-pink-100/80 leading-relaxed">
            If you are searching for the perfect relaxation getaway or looking to elevate your skin and hair health, Tanubhi Beauty Care is your ultimate destination. We provide a comprehensive suite of premium skin and hair therapies exclusively for women. Based in Bedok, Singapore, we take pride in offering elite quality services at highly competitive rates to deliver unmatched customer satisfaction.
          </p>
        </div>

        {/* 4-Column Service Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-brand-accent-gold/15 hover:border-brand-accent-pink/40 shadow-md bg-[#1b0416] transition-all duration-500 ease-out"
            >
              {/* Image */}
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-108 transition-transform duration-750 ease-out opacity-90 group-hover:opacity-100"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/80 via-brand-darker/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-accent-gold bg-brand-dark/80 backdrop-blur-md border border-brand-accent-gold/10">
                  {pillar.tag}
                </span>
              </div>

              {/* Bottom Info Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-brand-accent-gold transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs text-pink-100/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons and CTAs on Welcome Page */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 mb-20">
          <Link
            href="/pricelist"
            className="shimmer-hover inline-flex items-center justify-center px-7 py-3.5 rounded-full font-sans text-sm font-bold tracking-wide text-white bg-gradient-pink-sunset hover:shadow-lg hover:shadow-rose-500/25 active:scale-95 transition-all duration-300 text-center"
          >
            <span>Browse Service Price List</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-sans text-sm font-semibold tracking-wide text-pink-100 hover:text-white border border-pink-200/20 hover:border-brand-accent-pink/50 bg-[#2d0b24]/40 hover:bg-[#2d0b24]/80 shadow-sm transition-all duration-300 text-center"
          >
            Request Custom Package Info
          </Link>
        </div>

      </div>
    </section>
  );
}
