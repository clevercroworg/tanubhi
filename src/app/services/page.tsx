import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Beauty & Salon Services",
  description:
    "Explore our complete range of female-only services in Bedok, Singapore: Brazilian waxing, custom facial treatments, bridal makeup, henna art, precision threading, and hair repair.",
  alternates: {
    canonical: "https://tanubhi.com/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Waxing",
      image: "/images/waxing_treatment.png",
      tag: "Smooth & Clean",
      description:
        "Experience silky smooth skin with our professional waxing services. Our certified therapists use premium waxes and precise techniques to ensure maximum comfort and long-lasting, clean results with minimal discomfort.",
      benefits: [
        "Exclusively for Ladies",
        "Sensitive-skin organic wax formula",
        "Minimal discomfort & quick sessions",
        "Strict single-use hygiene standards",
      ],
    },
    {
      title: "Facial Treatments",
      image: "/images/facial_treatment.png",
      tag: "Glowing & Youthful",
      description:
        "Shed dullness, signs of ageing, and stress. Our advanced, skin-specific facials combine active botanical extracts and deep-cleansing techniques to revitalize, firm, and restore your skin's natural healthy cellular glow.",
      benefits: [
        "Tailored skin type analysis",
        "Anti-ageing & hyperpigmentation targeting",
        "Deep cellular pore detoxification",
        "Relaxing face & neck lymphatic massage",
      ],
    },
    {
      title: "Makeup & Henna",
      image: "/images/bridal_henna.png",
      tag: "Festive & Bridal",
      description:
        "Celebrate your special occasions with stunning makeup look designs and intricate henna art. We specialize in bridal makeovers and traditional mehndi designs beloved across Singapore's diverse Indian & Malay communities.",
      benefits: [
        "Flawless HD & airbrush bridal makeup",
        "Custom-tailored traditional & modern mehndi",
        "Organic, long-lasting rich henna stain",
        "Sourced premium international cosmetics",
      ],
    },
    {
      title: "Threading",
      image: "/images/threading_treatment.png",
      tag: "Famous Signature",
      description:
        "Define your features with Bedok's most famous brow threading and shaping. We utilize premium antibacterial cotton threads and rapid, gentle motions to deliver perfectly defined brows and clean facial hair removal.",
      benefits: [
        "Signature precise brow map shaping",
        "Gentle upper lip & full face threading",
        "Antibacterial cotton thread technique",
        "Fast, clean, and highly defined finish",
      ],
    },
    {
      title: "Hair Services",
      image: "/images/hair_care.png",
      tag: "Glossy & Healthy",
      description:
        "Revitalize your hair with our affordable, high-quality hair care treatments. From nourishing hot oil therapy to deep conditioning and protein-infused hair masks, we ensure your tresses look glossy, strong, and full of life.",
      benefits: [
        "Nourishing scalp & hot oil massage",
        "Keratin and protein restoration treatment",
        "Therapeutic anti-dandruff treatments",
        "Ladies-only private, comfortable salon setup",
      ],
    },
    {
      title: "Whitening Treatment",
      image: "/images/whitening_treatment.png",
      tag: "Brighten & Balance",
      description:
        "Brighten and even out your complexion with our targeted skin-whitening and bleaching treatments. Safely targets hyperpigmentation, uneven underarm tones, and skin discoloration for a radiant, balanced glow.",
      benefits: [
        "Safe, tested bleaching formulations",
        "Targets hyperpigmentation & sun damage",
        "Underarm & specific area lightening",
        "Deep moisturizing and post-care mask",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fdf8fa] via-white to-[#fdf8fa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-gradient-rose-gold text-xs font-extrabold uppercase tracking-[0.25em]">
            Exclusively for Ladies
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-dark">
            Tanubhi Services
          </h1>
          <div className="w-24 h-[3px] bg-gradient-pink-sunset mx-auto rounded-full" />
          <p className="font-sans text-base sm:text-lg text-[#664e60] leading-relaxed">
            Our salon offers a comprehensive selection of skin, hair, and traditional body care services for any occasion out there, providing you with the ultimate experience and the utmost relaxation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-brand-accent-gold/15 shadow-md hover:shadow-xl hover:border-brand-accent-pink/35 transition-all duration-500 scroll-mt-32"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Accent Tag */}
                <div className="absolute top-4 left-4 bg-gradient-pink-sunset text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  {service.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-grow p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-brand-dark group-hover:text-brand-accent-pink transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-[#664e60] leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Benefits checklist */}
                  <ul className="space-y-2.5 pt-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#523d4c] font-medium">
                        <CheckCircle className="w-4 h-4 text-brand-accent-gold shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-brand-accent-gold/10 flex items-center justify-between">
                  <Link
                    href="/pricelist"
                    className="font-sans text-xs font-bold uppercase tracking-wider text-brand-accent-gold hover:text-brand-accent-pink transition-colors"
                  >
                    View Pricing
                  </Link>
                  <a
                    href="https://booking.appointy.com/en-US/tanubhi/bookings/service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-white bg-brand-dark hover:bg-brand-accent-pink hover:shadow-md transition-all duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-brand-dark text-white relative overflow-hidden border border-brand-accent-gold/20 shadow-2xl text-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,var(--color-brand-accent-pink),transparent)]" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-accent-gold">
              Looking for a custom combination package?
            </h3>
            <p className="font-sans text-sm text-pink-100/70 leading-relaxed">
              We offer customizable beauty packages tailored to your skin concerns, weddings, or celebratory parties. Get in touch with us via WhatsApp to build your custom package today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <a
                href="https://wa.me/6583853886"
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-hover inline-flex items-center justify-center px-7 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset hover:shadow-lg transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-pink-100 hover:text-white border border-pink-100/20 hover:border-white transition-all duration-300"
              >
                Inquire Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
