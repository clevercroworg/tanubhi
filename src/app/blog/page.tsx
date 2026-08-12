"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, User, ArrowRight, Search } from "lucide-react";

interface BlogPost {
  title: string;
  snippet: string;
  content: string;
  date: string;
  author: string;
  image: string;
  tag: string;
  category: "threading" | "facials" | "haircare" | "bridal";
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Topics" },
    { id: "threading", label: "Threading & Waxing" },
    { id: "facials", label: "Skincare & Facials" },
    { id: "haircare", label: "Hair Spa & Care" },
    { id: "bridal", label: "Bridal Henna & Makeup" },
  ];

  const posts: BlogPost[] = [
    {
      title: "How to Care for Your Skin After Eyebrow Threading",
      snippet: "To get the absolute best results, avoid applying makeup or touching the threaded area for at least 2 hours. Use chilled aloe vera gel to calm sensitivity.",
      content: "Detailed post content...",
      date: "May 24, 2026",
      author: "Tanubhi Specialists",
      image: "/images/parlour_interior.png",
      tag: "Threading Care",
      category: "threading",
    },
    {
      title: "How Often Should You Schedule a Facial Session?",
      snippet: "For optimal skin cell rejuvenation and deep pore extraction, professional facials are highly recommended once every 4 weeks to maintain a healthy glow.",
      content: "Detailed post content...",
      date: "May 18, 2026",
      author: "Skin Therapists",
      image: "/images/facial_treatment.png",
      tag: "Facial Frequency",
      category: "facials",
    },
    {
      title: "Nourishing Summer Remedies for Humidity-Stressed Hair",
      snippet: "Shield your hair cuticles from heat and humidity by applying deep conditioning protein treatments or natural henna masks once a week to seal in moisture.",
      content: "Detailed post content...",
      date: "May 10, 2026",
      author: "Hair Stylists",
      image: "/images/hair_care.png",
      tag: "Hair Care",
      category: "haircare",
    },
    {
      title: "The Secret to Deep, Long-Lasting Bridal Henna Stains",
      snippet: "Discover how to prepare your skin before applying bridal mehndi, and the organic eucalyptus oil recipes to lock in a rich, dark maroon stain for your wedding.",
      content: "Detailed post content...",
      date: "May 02, 2026",
      author: "Mehndi Artists",
      image: "/images/bridal_henna.png",
      tag: "Bridal Henna",
      category: "bridal",
    },
    {
      title: "Why Organic Wax is Better for Sensitive Skin Types",
      snippet: "Chemical resins in cheap waxes often peel skin layers. Organic honey and fruit-based waxes grip only the hair shaft, reducing redness and ingrown hairs.",
      content: "Detailed post content...",
      date: "April 26, 2026",
      author: "Waxing Experts",
      image: "/images/face_model_relax.png",
      tag: "Sensitive Waxing",
      category: "threading",
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
    <div className="bg-gradient-to-b from-[#fdf8fa] via-white to-[#fdf8fa] min-h-screen py-16 md:py-24">
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
            Professional skincare guidance, hair restoration advice, and bridal mehndi inspiration curated by our top stylists.
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
                className={`px-4 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
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

                  {/* Read More link */}
                  <div className="pt-6 mt-6 border-t border-brand-accent-gold/15">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Opening full post: "${post.title}"\n(This features detailed, organic beauty tips and recipes in the full version.)`);
                      }}
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
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-brand-accent-gold/15 shadow-sm space-y-4">
            <span className="font-serif text-xl font-bold text-brand-dark block">No Articles Found</span>
            <p className="font-sans text-sm text-[#664e60]">
              We couldn&apos;t find any beauty tips matching your keyword &ldquo;{searchTerm}&rdquo;. Try another term!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
