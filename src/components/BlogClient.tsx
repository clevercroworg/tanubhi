"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, User, ArrowRight, Search, X, CheckCircle, Sparkles } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  fullContent: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    conclusion: string;
  };
  date: string;
  author: string;
  image: string;
  tag: string;
  category: "threading" | "facials" | "haircare" | "bridal";
  readTime: string;
}

export default function BlogClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = [
    { id: "all", label: "All Topics" },
    { id: "threading", label: "Threading & Waxing" },
    { id: "facials", label: "Skincare & Facials" },
    { id: "haircare", label: "Hair Spa & Care" },
    { id: "bridal", label: "Bridal Henna & Makeup" },
  ];

  const posts: BlogPost[] = [
    {
      id: "threading-aftercare",
      title: "How to Care for Your Skin After Eyebrow Threading",
      snippet: "To get the absolute best results, avoid applying makeup or touching the threaded area for at least 2 hours. Use chilled aloe vera gel to calm sensitivity.",
      fullContent: {
        intro: "Eyebrow and facial threading is one of the cleanest, most precise hair removal methods available. Because threading pulls hairs directly from the follicle, the skin pores remain open and temporarily sensitive right after treatment.",
        sections: [
          {
            heading: "Immediate Aftercare (First 2–4 Hours)",
            body: "The skin surrounding the brows and upper lip needs breathing room to close follicles without infection:",
            bulletPoints: [
              "Avoid touching the threaded area with unwashed hands to prevent transferring bacteria.",
              "Do not apply foundation, concealer, or heavy powders for at least 2 to 4 hours.",
              "Apply pure, chilled aloe vera gel or rosewater to cool tingling and reduce redness immediately.",
            ],
          },
          {
            heading: "Preventing Post-Threading Bumps",
            body: "If you have delicate or acne-prone skin, follow these simple preventive rules:",
            bulletPoints: [
              "Avoid chlorinated swimming pools, steam rooms, or vigorous gym workouts for 24 hours.",
              "Do not use harsh chemical exfoliants (AHAs/BHAs or scrubs) for 48 hours.",
              "Keep the area hydrated with non-comedogenic, fragrance-free soothing lotions.",
            ],
          },
        ],
        conclusion: "With regular gentle care and professional threading every 3 to 4 weeks at Tanubhi Beauty Care, your eyebrow shape will remain crisp, defined, and healthy without unwanted irritation.",
      },
      date: "May 24, 2026",
      author: "Tanubhi Specialists",
      image: "/images/parlour_interior.png",
      tag: "Threading Care",
      category: "threading",
      readTime: "3 min read",
    },
    {
      id: "facial-frequency",
      title: "How Often Should You Schedule a Facial Session?",
      snippet: "For optimal skin cell rejuvenation and deep pore extraction, professional facials are highly recommended once every 4 weeks to maintain a healthy glow.",
      fullContent: {
        intro: "Your skin undergoes a natural biological regeneration cycle approximately every 28 days. As old skin cells shed and new cells rise to the surface, dead cell buildup and sebum can clog pores and dull your radiance.",
        sections: [
          {
            heading: "The 4-Week Gold Standard",
            body: "A professional facial once every 4 weeks harmonizes perfectly with your skin's cellular turnover cycle. Regular treatments remove deep-seated blackheads, stimulate blood circulation through lymphatic massage, and accelerate skin firming.",
          },
          {
            heading: "Tailoring Frequency by Skin Concern",
            body: "Depending on your specific lifestyle and skin needs:",
            bulletPoints: [
              "Oily / Acne-Prone Skin: Deep cleansing and extraction every 3 to 4 weeks prevent breakouts and balance sebum.",
              "Dry / Dehydrated Skin: Nourishing hydrating facials with hyaluronic serums every 4 weeks replenish lipid barriers.",
              "Mature / Anti-Aging Focus: Collagen-boosting and Gold Glow facials every 3 to 4 weeks maximize elasticity and reduce fine lines.",
              "Pre-Bridal Glow: Starting a customized facial series 3 months before your wedding date ensures peak radiance on your big day.",
            ],
          },
        ],
        conclusion: "Consult with our certified therapists at Tanubhi Beauty Care to determine the ideal facial routine tailored to your unique skin profile.",
      },
      date: "May 18, 2026",
      author: "Skin Therapists",
      image: "/images/blog_facial_schedule.png",
      tag: "Facial Frequency",
      category: "facials",
      readTime: "4 min read",
    },
    {
      id: "hair-humidity-remedies",
      title: "Nourishing Summer Remedies for Humidity-Stressed Hair",
      snippet: "Shield your hair cuticles from heat and humidity by applying deep conditioning protein treatments or natural henna masks once a week to seal in moisture.",
      fullContent: {
        intro: "Singapore's tropical humidity often causes hair cuticles to swell, leading to frizz, split ends, and moisture loss. Rebuilding keratin protein and sealing moisture into the hair shaft is the secret to silky, manageable tresses.",
        sections: [
          {
            heading: "Natural Botanical Remedies",
            body: "Incorporate these deeply hydrating therapies into your hair wellness routine:",
            bulletPoints: [
              "Organic Henna Mask: Henna binds to keratin protein, coating the hair shaft with natural strength and glossy shine while cooling the scalp.",
              "Warm Herbal Oil Massage: Nourishing warm coconut and almond oil massages stimulate scalp circulation and strengthen roots against hair fall.",
              "Leave-in Argan Serum: Apply 2 drops to damp hair tips before stepping outside into tropical humidity.",
            ],
          },
          {
            heading: "Professional Salon Protein Care",
            body: "When home remedies aren't enough, in-salon Brazilian Keratin or Hair Protein Repair therapy infuses hydrolysed amino acids into damaged hair cuticles, providing up to 3 months of frizz-free smoothness.",
          },
        ],
        conclusion: "Book a revitalizing scalp massage and protein blowout at Tanubhi Beauty Care to keep your hair resilient and vibrant all year round.",
      },
      date: "May 10, 2026",
      author: "Hair Stylists",
      image: "/images/blog_hair_remedies.png",
      tag: "Hair Care",
      category: "haircare",
      readTime: "4 min read",
    },
    {
      id: "bridal-henna-stains",
      title: "The Secret to Deep, Long-Lasting Bridal Henna Stains",
      snippet: "Discover how to prepare your skin before applying bridal mehndi, and the organic eucalyptus oil recipes to lock in a rich, dark maroon stain for your wedding.",
      fullContent: {
        intro: "Bridal henna is the centerpiece of celebration for Singapore's Indian and Malay weddings. Achieving a deep, rich mahogany-maroon stain requires careful skin preparation and proper post-application sealing.",
        sections: [
          {
            heading: "Skin Preparation Before Application",
            body: "For the henna paste to penetrate deeply into the skin layers:",
            bulletPoints: [
              "Schedule waxing and body scrubs 24 to 48 hours BEFORE your henna session, never right before.",
              "Wash hands and feet with plain soap and water without applying any body lotions or oils on the day of henna.",
              "Keep your hands warm, as body warmth activates the natural Lawsone dye in organic henna leaves.",
            ],
          },
          {
            heading: "Post-Henna Care for Peak Darkness",
            body: "After your intricate design is applied:",
            bulletPoints: [
              "Keep the dry paste on for at least 6 to 8 hours (or overnight with gentle wrapping).",
              "Dab a light mixture of lemon juice and sugar to keep the paste adhering to the skin.",
              "Scrape the dry paste off gently — NEVER wash it off with water for the first 24 hours.",
              "Apply natural eucalyptus oil, mustard oil, or Vicks balm to deepen the oxidation process.",
            ],
          },
        ],
        conclusion: "At Tanubhi Beauty Care, we use 100% pure organic henna paste free from chemicals or black dye, ensuring safe, breathtaking bridal stains that last for weeks.",
      },
      date: "May 02, 2026",
      author: "Mehndi Artists",
      image: "/images/blog_bridal_henna.png",
      tag: "Bridal Henna",
      category: "bridal",
      readTime: "5 min read",
    },
    {
      id: "organic-wax-sensitive-skin",
      title: "Why Organic Wax is Better for Sensitive Skin Types",
      snippet: "Chemical resins in cheap waxes often peel skin layers. Organic honey and fruit-based waxes grip only the hair shaft, reducing redness and ingrown hairs.",
      fullContent: {
        intro: "Waxing sensitive areas like the bikini line, underarms, and facial zones requires gentle formulas that protect the delicate skin barrier while ensuring clean, roots-out hair extraction.",
        sections: [
          {
            heading: "The Difference in Wax Quality",
            body: "Conventional synthetic waxes rely on harsh rosin and petrochemical binders that adhere directly to the live epidermis. In contrast, our premium organic waxes use natural honey, beeswax, and botanical resins that adhere strictly to the hair shaft.",
            bulletPoints: [
              "Significantly less pain and minimal pulling on skin tissue.",
              "Low operating temperature prevents burning or post-wax hyperpigmentation.",
              "Natural anti-inflammatory properties soothe the skin during treatment.",
            ],
          },
          {
            heading: "Our Strict Hygiene Protocol",
            body: "At Tanubhi Beauty Care, we enforce strict zero double-dipping standards, medical-grade sanitization, and soothing post-wax aloe treatments for complete peace of mind.",
          },
        ],
        conclusion: "Experience smooth, silky, hair-free skin without irritation by scheduling your gentle waxing appointment with our certified therapists in Bedok.",
      },
      date: "April 26, 2026",
      author: "Waxing Experts",
      image: "/images/face_model_relax.png",
      tag: "Sensitive Waxing",
      category: "threading",
      readTime: "3 min read",
    },
  ];

  // Filtering logic
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.snippet.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-gradient-rose-gold text-xs font-extrabold uppercase tracking-[0.25em]">
          Tanubhi Beauty Blog
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-dark">
          Beauty Tips & Secrets
        </h1>
        <div className="w-24 h-[3px] bg-gradient-pink-sunset mx-auto rounded-full" />
        <p className="font-sans text-base sm:text-lg text-[#664e60] leading-relaxed">
          Professional skincare guidance, hair restoration advice, and bridal mehndi inspiration curated by our certified therapists.
        </p>
      </div>

      {/* Filter Controls (Search + Tabs) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 pb-8 border-b border-brand-accent-gold/15">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-brand-dark border-transparent text-white shadow-sm"
                  : "bg-white border-brand-accent-gold/20 text-brand-dark hover:border-brand-accent-pink hover:text-brand-accent-pink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-accent-gold/20 font-sans text-xs text-brand-dark placeholder-brand-dark/30 focus:outline-none focus:border-brand-accent-pink transition-colors bg-white shadow-sm"
          />
          <Search className="w-4 h-4 text-brand-accent-gold absolute left-3.5 top-3.5" />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-white border border-brand-accent-gold/15 hover:border-brand-accent-pink/40 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-750 ease-out brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/10 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center px-3.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-brand-accent-gold bg-brand-dark border border-brand-accent-gold/15 shadow-md">
                  {post.tag}
                </span>
                <span className="absolute bottom-4 right-4 inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-semibold text-white bg-black/60 backdrop-blur-xs">
                  {post.readTime}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  {/* Meta Details */}
                  <div className="flex items-center gap-4 text-[10px] text-[#664e60] uppercase font-bold">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5 text-brand-accent-pink" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-brand-accent-gold" />
                      {post.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark group-hover:text-brand-accent-pink transition-colors duration-300 leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Snippet */}
                  <p className="font-sans text-xs sm:text-sm text-[#664e60] leading-relaxed line-clamp-3">
                    {post.snippet}
                  </p>
                </div>

                {/* Read More button opening full article modal */}
                <div className="pt-6 mt-6 border-t border-brand-accent-gold/15">
                  <button
                    onClick={() => setActiveArticle(post)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent-gold hover:text-brand-accent-pink transition-colors duration-300 group/link cursor-pointer"
                  >
                    <span>Read full article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-brand-accent-gold/15 shadow-sm space-y-4">
          <span className="font-serif text-xl font-bold text-brand-dark block">No Articles Found</span>
          <p className="font-sans text-sm text-[#664e60]">
            We couldn&apos;t find any beauty tips matching your keyword &ldquo;{searchTerm}&rdquo;. Try another term!
          </p>
        </div>
      )}

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-brand-accent-gold/25 relative flex flex-col">
            
            {/* Header Image */}
            <div className="relative h-64 sm:h-72 w-full shrink-0">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-brand-dark/70 text-white hover:bg-brand-accent-pink transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-accent-pink text-white">
                  <Sparkles className="w-3 h-3" />
                  {activeArticle.tag}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-pink-200/80">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-6 font-sans text-sm text-[#4a3344] leading-relaxed">
              <p className="text-base sm:text-lg font-serif italic text-brand-dark border-l-4 border-brand-accent-pink pl-4 py-1">
                {activeArticle.fullContent.intro}
              </p>

              {activeArticle.fullContent.sections.map((sec, i) => (
                <div key={i} className="space-y-3 pt-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark">
                    {sec.heading}
                  </h3>
                  <p>{sec.body}</p>
                  {sec.bulletPoints && (
                    <ul className="space-y-2 pt-1 pl-2">
                      {sec.bulletPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-accent-pink shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-[#fdf8fa] border border-brand-accent-gold/20 text-xs sm:text-sm text-brand-dark space-y-2">
                <span className="font-bold text-brand-accent-gold uppercase tracking-wider block text-[10px]">
                  Professional Stylist Note
                </span>
                <p>{activeArticle.fullContent.conclusion}</p>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  Tanubhi Beauty Care • 631 Bedok Reservoir Road, Singapore
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/6583853886"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full font-sans text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors"
                  >
                    WhatsApp Stylist
                  </a>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 rounded-full font-sans text-xs font-bold text-brand-dark bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
