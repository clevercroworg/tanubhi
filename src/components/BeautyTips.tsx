import Image from "next/image";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export default function BeautyTips() {
  const tips = [
    {
      title: "How to Care for Your Skin After Eyebrow Threading",
      snippet: "To get the absolute best results, avoid applying makeup or touching the threaded area for at least 2 hours. Use chilled aloe vera gel to calm sensitivity.",
      date: "May 24, 2026",
      author: "Tanubhi Specialists",
      image: "/images/parlour_interior.png",
      tag: "Threading Care",
    },
    {
      title: "How Often Should You Schedule a Facial Session?",
      snippet: "For optimal skin cell rejuvenation and deep pore extraction, professional facials are highly recommended once every 4 weeks to maintain a healthy glow.",
      date: "May 18, 2026",
      author: "Skin Therapists",
      image: "/images/facial_treatment.png",
      tag: "Facial Frequency",
    },
    {
      title: "Nourishing Summer Remedies for Humidity-Stressed Hair",
      snippet: "Shield your hair cuticles from heat and humidity by applying deep conditioning protein treatments or natural henna masks once a week to seal in moisture.",
      date: "May 10, 2026",
      author: "Hair Stylists",
      image: "/images/hair_care.png",
      tag: "Hair Care",
    },
  ];

  return (
    <section id="blog" className="relative py-24 md:py-32 bg-gradient-to-b from-[#fdf8fa] to-[#ffffff] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-brand-accent-pink/5 blur-[90px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-brand-accent-gold/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-gradient-rose-gold text-xs font-bold uppercase tracking-[0.2em]">Our Blog</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark">
            Professional Beauty Tips
          </h2>
          <div className="w-20 h-[3px] bg-gradient-pink-sunset mx-auto rounded-full" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-brand-accent-gold/15 hover:border-brand-accent-pink/40 hover:bg-white shadow-md transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-750 ease-out brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider text-brand-accent-gold bg-brand-dark/85 border border-brand-accent-gold/15 shadow-sm">
                  {tip.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  {/* Meta Details */}
                  <div className="flex items-center gap-4 text-[10px] text-[#664e60] uppercase font-bold">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5 text-brand-accent-pink" />
                      {tip.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-brand-accent-gold" />
                      {tip.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark group-hover:text-brand-accent-pink transition-colors duration-300 leading-snug line-clamp-2">
                    {tip.title}
                  </h3>

                  {/* Snippet */}
                  <p className="font-sans text-xs text-[#664e60] leading-relaxed line-clamp-3">
                    {tip.snippet}
                  </p>
                </div>

                {/* Read More link */}
                <div className="pt-6 mt-6 border-t border-brand-accent-gold/15">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent-gold hover:text-brand-accent-pink transition-colors duration-300 group/link"
                  >
                    <span>Read full article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
