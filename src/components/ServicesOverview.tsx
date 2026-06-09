import Image from "next/image";
import Link from "next/link";

export default function ServicesOverview() {
  const services = [
    {
      title: "Waxing",
      image: "/images/waxing_treatment.png",
      href: "/services#waxing",
    },
    {
      title: "Facial Treatments",
      image: "/images/facial_treatment.png",
      href: "/services#facial-treatments",
    },
    {
      title: "Makeup & Henna",
      image: "/images/bridal_henna.png",
      href: "/services#makeup-henna",
    },
    {
      title: "Threading",
      image: "/images/threading_treatment.png",
      href: "/services#threading",
    },
    {
      title: "Hair Services",
      image: "/images/hair_care.png",
      href: "/services#hair-services",
    },
    {
      title: "Whitening Treatment",
      image: "/images/whitening_treatment.png",
      href: "/services#whitening-treatment",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 w-full overflow-hidden bg-gradient-to-b from-[#fdfafb] to-[#fcf5f7]">
      {/* Absolute Premium Background Image */}
      <Image
        src="/images/services_bg_new.png"
        alt="Premium Beauty Salon Background"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-40 mix-blend-overlay"
      />

      {/* Rose-Tinted Translucent Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdfafb]/90 via-[#fdfafb]/60 to-[#fdfafb]/95" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-gradient-rose-gold text-xs font-bold uppercase tracking-[0.2em]">Our Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark">
            See Our Services
          </h2>
          <div className="w-16 h-[2px] bg-gradient-pink-sunset mx-auto rounded-full" />
          <p className="font-sans text-sm sm:text-base text-[#664e60] max-w-xl mx-auto leading-relaxed">
            We&apos;ve got a whole range of skincare and haircare related services custom-tailored for our lady customers!
          </p>
        </div>

        {/* 6-Service Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch mb-16">
          {services.map((service, idx) => (
            <Link
              href={service.href}
              key={idx}
              className="group relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-md border border-brand-accent-gold/15 hover:border-brand-accent-pink/40 hover:shadow-xl transition-all duration-500 ease-out bg-[#1b0416]"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />

              {/* Dark Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Service name overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-brand-accent-gold transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  {service.title}
                </h3>
                <div className="w-10 h-[2px] bg-brand-accent-gold mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="shimmer-hover inline-flex items-center justify-center px-8 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset shadow-md hover:shadow-lg hover:shadow-rose-500/25 active:scale-95 transition-all duration-300"
          >
            Explore Full Service Menu
          </Link>
        </div>

      </div>
    </section>
  );
}
