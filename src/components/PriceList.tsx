"use client";

import { useState } from "react";
import { Sparkles, Clock } from "lucide-react";

interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
  description: string;
  popular?: boolean;
}

interface ServiceCategories {
  [key: string]: ServiceItem[];
}

export default function PriceList() {
  const [activeCategory, setActiveCategory] = useState<string>("waxing");

  const categories = [
    { id: "waxing", label: "Waxing & Smoothness" },
    { id: "facials", label: "Facial Treatments" },
    { id: "haircare", label: "Hair Studio & Spa" },
    { id: "bridal", label: "Makeup & Henna" },
  ];

  const services: ServiceCategories = {
    waxing: [
      { name: "Brazilian Waxing", price: "$45", duration: "30 min", description: "Complete gentle hair removal using premium low-temperature wax.", popular: true },
      { name: "Full Legs Waxing", price: "$38", duration: "40 min", description: "Smooth waxing from hip to ankle for beautiful hair-free skin.", popular: false },
      { name: "Full Arms Waxing", price: "$28", duration: "30 min", description: "Complete waxing for hands, including shoulders and fingers.", popular: false },
      { name: "Half Legs Waxing", price: "$22", duration: "20 min", description: "Standard waxing for lower legs below the knee.", popular: false },
      { name: "Half Arms Waxing", price: "$18", duration: "20 min", description: "Waxing for lower arms below the elbow.", popular: false },
      { name: "Underarms Gentle Waxing", price: "$15", duration: "15 min", description: "Quick and soothing underarm hair removal.", popular: true },
    ],
    facials: [
      { name: "Gold Glow Brightening Therapy", price: "$90", duration: "90 min", description: "Luxurious 24K gold dust leaf facial for ultimate skin radiance and lifting.", popular: true },
      { name: "Advanced Anti-Aging Facial", price: "$75", duration: "75 min", description: "Targeted collagen-infusion therapy to smooth lines and restore youthfulness.", popular: false },
      { name: "Premium Pearl Whitening Facial", price: "$65", duration: "75 min", description: "Natural pearl powder extraction for pigmentation reduction and skin tone evening.", popular: false },
      { name: "Fruit Glow Herbal Facial", price: "$50", duration: "60 min", description: "Organic fresh fruit pulp scrub and pack for standard skin conditioning.", popular: false },
      { name: "Organic Aloe Soothing Treatment", price: "$40", duration: "45 min", description: "Hydrating aloe vera massage ideal for sensitive and sun-exposed skin.", popular: false },
    ],
    haircare: [
      { name: "Brazilian Keratin Treatment", price: "$120", duration: "120 min", description: "Premium protein blowout to eliminate frizz, restore shine, and straighten.", popular: true },
      { name: "Hair Protein Repair Therapy", price: "$60", duration: "60 min", description: "Deep conditioning and steam therapy to reconstruct damaged cuticles.", popular: false },
      { name: "Premium Hair Highlights", price: "$80+", duration: "90 min", description: "Custom foil highlights or balayage with high-quality nourishing colors.", popular: false },
      { name: "Organic Herbal Henna Treatment", price: "$35", duration: "45 min", description: "Natural hair conditioning and scalp cooling treatment with organic henna.", popular: false },
      { name: "Nourishing Head-Oil Massage", price: "$25", duration: "30 min", description: "Traditional hot oil massage to stimulate hair growth and relieve stress.", popular: true },
    ],
    bridal: [
      { name: "Luxury Bridal Hair & Makeup Package", price: "$250+", duration: "180 min", description: "Includes professional high-definition wedding makeup, hair updos, and dupatta draping.", popular: true },
      { name: "Custom Intricate Bridal Henna", price: "$120+", duration: "120 min", description: "Full elaborate traditional mehndi artwork for palms, forearms, and feet.", popular: true },
      { name: "Henna Artwork & Styling Combo", price: "$90", duration: "90 min", description: "Medium-level festive henna styling paired with standard party hair styling.", popular: false },
      { name: "Elegant Party Makeup & Hair", price: "$70", duration: "75 min", description: "Professional makeup and blowout styling for parties, bridesmaids, and festivals.", popular: false },
      { name: "Simple Festive Henna (Per Hand)", price: "$15", duration: "20 min", description: "Clean, elegant Arabic style patterns for palms.", popular: false },
    ],
  };

  return (
    <section id="pricelist" className="relative py-24 md:py-32 bg-gradient-to-b from-[#ffffff] to-[#fdf8fa] overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-brand-accent-pink/5 blur-[90px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brand-accent-rose/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-gradient-rose-gold text-xs font-bold uppercase tracking-[0.2em]">Our Pricing Menu</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark">
            Premium Services & Price List
          </h2>
          <p className="font-sans text-sm text-[#664e60]">
            Exquisite skin, hair, and bridal solutions custom-designed for modern women. 
            Select a category to view pricing.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-3 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 ${
                activeCategory === tab.id
                  ? "bg-gradient-pink-sunset border-transparent text-white shadow-md shadow-rose-200/50 scale-102"
                  : "bg-white border-brand-accent-gold/25 text-brand-dark hover:text-brand-accent-pink hover:border-brand-accent-pink/50 shadow-sm"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Price Grid */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-brand-accent-gold/20 shadow-xl relative">
          <div className="absolute -top-3 left-8 px-4 py-1 rounded-full bg-brand-accent-pink text-white text-[9px] uppercase font-bold tracking-wider shadow-sm">
            Singapore GST-Free Pricing
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {services[activeCategory].map((service, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-3.5 rounded-2xl hover:bg-brand-accent-pink/5 transition-all duration-300 border border-transparent hover:border-brand-accent-pink/10"
              >
                <div className="flex items-baseline justify-between gap-4">
                  {/* Name */}
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-accent-pink transition-colors duration-300">
                      {service.name}
                    </span>
                    {service.popular && (
                      <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-extrabold text-white bg-brand-accent-pink uppercase tracking-wider scale-90 shadow-sm">
                        <Sparkles className="w-2.5 h-2.5" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  {/* Divider Line */}
                  <div className="flex-grow border-b border-dashed border-brand-dark/10 group-hover:border-brand-accent-pink/20 transition-colors duration-300 mx-2" />
                  
                  {/* Price */}
                  <span className="font-sans text-base sm:text-lg font-extrabold text-brand-accent-gold">
                    {service.price}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="flex items-center justify-between gap-4 mt-2">
                  <p className="font-sans text-xs text-[#664e60] leading-relaxed max-w-[80%]">
                    {service.description}
                  </p>
                  {service.duration && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-brand-dark/40 font-semibold">
                      <Clock className="w-3 h-3 text-brand-accent-pink" />
                      {service.duration}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs text-[#664e60]/60">
            * Prices listed above are general starting guidelines. Final quotes may vary slightly depending on individual skin/hair length and requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-brand-accent-gold hover:text-brand-accent-pink transition-colors duration-300 group"
          >
            <span>Request custom package quote</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
