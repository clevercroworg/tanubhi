import Image from "next/image";

export default function ServicesOverview() {
  const items = [
    {
      number: "1",
      title: "Waxing",
      description:
        "Tanubhi Beauty Care is proud of its waxing services. Our certified therapists provide the best waxing experience to our clients as they know the exact art of hair removal. We guarantee a seamless, clean session with minimum pain.",
    },
    {
      number: "2",
      title: "Facial Treatments",
      description:
        "We can't turn back the clock, but you bet we will do all we can to slow it down. Begone dull skin, signs of ageing, and dark spots! We utilize advanced, organic extracts to revitalize and restore your natural glowing cellular health.",
    },
    {
      number: "3",
      title: "Makeup & Henna",
      description:
        "At Tanubhi Beauty Care, we have extended our services to include makeup and henna artwork. Within one year, our bridal makeovers and traditional mehndi designs have become extremely popular among Singapore's Indian & Malay communities.",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 w-full overflow-hidden">
      {/* Absolute Premium Background Image */}
      <Image
        src="/images/services_bg_new.png"
        alt="Premium Beauty Salon Background"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Rose-Tinted Translucent Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-[#fdfafb]/80 backdrop-blur-[1px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark">
            See Our Services
          </h2>
          <div className="w-16 h-[2px] bg-brand-accent-gold mx-auto rounded-full" />
          <p className="font-sans text-sm text-[#664e60] max-w-xl mx-auto leading-relaxed">
            We&apos;ve got a whole range of skincare and haircare related services custom-tailored for our lady customers!
          </p>
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-stretch mb-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start space-y-5 p-6 rounded-2xl hover:bg-white/40 border border-transparent hover:border-brand-accent-gold/10 transition-all duration-300"
            >
              {/* Large Number Marker */}
              <div className="relative flex flex-col items-start">
                <span className="font-serif text-6xl sm:text-7xl font-extrabold text-gradient-rose-gold select-none leading-none opacity-85">
                  {item.number}
                </span>
                <div className="w-12 h-[2px] bg-brand-accent-pink/50 mt-1" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-[#664e60] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <a
            href="#pricelist"
            className="shimmer-hover inline-flex items-center justify-center px-8 py-3.5 rounded-full font-sans text-sm font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset shadow-md hover:shadow-lg hover:shadow-rose-500/25 active:scale-95 transition-all duration-300"
          >
            Explore Full Service Menu
          </a>
        </div>

      </div>
    </section>
  );
}
