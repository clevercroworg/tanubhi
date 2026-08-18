"use client";

import { useState } from "react";
import { Star, Quote, CheckCircle, MessageSquare } from "lucide-react";

interface Review {
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  stars: number;
  comment: string;
  date: string;
}

const defaultReviews: Review[] = [
  {
    name: "Khushi",
    role: "Regular Client",
    initials: "K",
    avatarColor: "bg-gradient-to-br from-pink-500 to-rose-600",
    stars: 5,
    comment:
      "Every once in a while, we girls just have to take a break from our routine daily hectic errands and job and just step aside for some relaxation... Whenever I do it, this is the place where all the relaxation starts for me. The atmosphere is calming, and the service is incredibly professional.",
    date: "2 weeks ago",
  },
  {
    name: "Neha",
    role: "Regular Client",
    initials: "N",
    avatarColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
    stars: 5,
    comment:
      "Whenever I feel depressed, anxious, or just tired, I always need to take a chill pill and relax... Luckily, I always have this place for those matters. Here I can both delve into a meditative rest and also take care of my skin's health. The advanced facials work absolute wonders!",
    date: "3 weeks ago",
  },
  {
    name: "Priya",
    role: "Bridesmaid Client",
    initials: "P",
    avatarColor: "bg-gradient-to-br from-amber-500 to-sunset-600",
    stars: 5,
    comment:
      "The absolute best waxing and bridal henna services in Singapore! The therapists are extremely polite and clean, and the intricate mehndi artwork got so many compliments at my sister's wedding. Their rates are highly competitive too!",
    date: "1 month ago",
  },
  {
    name: "Farhana",
    role: "Bridal Client",
    initials: "F",
    avatarColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
    stars: 5,
    comment:
      "Stunning bridal makeup! The Tanubhi team and bridal specialists did an exceptional job coordinating our group. They are punctual, professional, and our makeup lasted flawless throughout the entire evening event. Highly recommend for Singapore brides!",
    date: "2 months ago",
  },
];

export default function ReviewsClient() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("tanubhi_guest_reviews");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch {
        // ignore parse error
      }
    }
    return defaultReviews;
  });

  const [name, setName] = useState("");
  const [service, setService] = useState("Facial Treatment");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview: Review = {
      name,
      role: service + " Client",
      initials: name.charAt(0).toUpperCase(),
      avatarColor: "bg-gradient-to-br from-pink-500 via-rose-500 to-brand-accent-pink",
      stars: rating,
      comment,
      date: "Just now",
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    setSubmitted(true);

    try {
      localStorage.setItem("tanubhi_guest_reviews", JSON.stringify(updated));
    } catch {
      // localStorage error fallback
    }

    // Reset Form
    setName("");
    setComment("");
    setRating(5);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-gradient-rose-gold text-xs font-extrabold uppercase tracking-[0.25em]">
          Google Reviews & Guestbook
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-dark">
          What Our Guests Say
        </h1>
        <div className="w-24 h-[3px] bg-gradient-pink-sunset mx-auto rounded-full" />
        <p className="font-sans text-base sm:text-lg text-[#664e60] leading-relaxed">
          Read verified reviews from our valued clients on Google Maps, or leave your feedback for our team.
        </p>

        {/* Google Reviews Official Integration Banner */}
        <div className="pt-4 max-w-2xl mx-auto">
          <div className="glass-panel-heavy p-6 rounded-3xl border border-brand-accent-gold/25 shadow-lg bg-white/90 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Google Rating Summary */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold text-brand-dark">
                    4.5
                  </span>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <Star className="w-4 h-4 fill-current opacity-70" />
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#664e60]">
                  121 Verified Google Reviews
                </span>
              </div>
            </div>

            {/* Direct Google Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto">
              <a
                href="https://share.google/1gQRTlGT8kF7fUYhv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset hover:shadow-md transition-all text-center"
              >
                Write Google Review
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2-Column Layout: Form & Reviews Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Write a Review Form - Column Left */}
        <div className="lg:col-span-4 glass-panel rounded-3xl p-6 sm:p-8 border border-brand-accent-gold/20 shadow-xl bg-white sticky top-28">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-brand-accent-pink" />
            <span>Write a Review</span>
          </h3>
          <p className="font-sans text-xs text-[#664e60] mb-6 leading-relaxed">
            Your feedback helps us continue providing the best ladies-only spa experiences in Singapore.
          </p>

          {submitted ? (
            <div className="p-6 bg-brand-card-hover rounded-2xl border border-brand-accent-pink/20 flex flex-col items-center justify-center text-center space-y-3 animate-fade-in">
              <CheckCircle className="w-12 h-12 text-brand-accent-pink" />
              <span className="font-serif text-lg font-bold text-brand-dark">
                Thank You!
              </span>
              <p className="font-sans text-xs text-[#664e60]">
                Your review has been saved to our guestbook.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-name"
                  className="font-sans text-xs font-bold text-[#523d4c] uppercase tracking-wider"
                >
                  Your Name
                </label>
                <input
                  id="form-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-accent-gold/20 font-sans text-sm text-brand-dark focus:outline-none focus:border-brand-accent-pink/65 focus:ring-1 focus:ring-brand-accent-pink/35 transition-colors"
                />
              </div>

              {/* Rating selection */}
              <div className="space-y-1.5">
                <label className="font-sans text-xs font-bold text-[#523d4c] uppercase tracking-wider block">
                  Rating
                </label>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 transition-all duration-200 ${
                          star <= rating
                            ? "fill-current text-brand-accent-gold scale-110"
                            : "text-brand-dark/20 hover:scale-105"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-service"
                  className="font-sans text-xs font-bold text-[#523d4c] uppercase tracking-wider"
                >
                  Service Experience
                </label>
                <select
                  id="form-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-accent-gold/20 font-sans text-sm text-brand-dark focus:outline-none focus:border-brand-accent-pink/65 focus:ring-1 focus:ring-brand-accent-pink/35 transition-colors bg-white"
                >
                  <option value="Waxing">Waxing</option>
                  <option value="Facial Treatment">Facial Treatment</option>
                  <option value="Bridal Henna">Bridal Henna</option>
                  <option value="Threading">Threading</option>
                  <option value="Hair Service">Hair Service</option>
                  <option value="Whitening Bleach">Whitening Bleach</option>
                </select>
              </div>

              {/* Comment */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-comment"
                  className="font-sans text-xs font-bold text-[#523d4c] uppercase tracking-wider"
                >
                  Your Review
                </label>
                <textarea
                  id="form-comment"
                  required
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share details of your experience..."
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-accent-gold/20 font-sans text-sm text-brand-dark focus:outline-none focus:border-brand-accent-pink/65 focus:ring-1 focus:ring-brand-accent-pink/35 transition-colors resize-none"
                />
              </div>

              {/* Privacy / Publishing Consent Checkbox */}
              <div className="flex items-start gap-2 pt-1 text-[11px] text-[#664e60]">
                <input
                  type="checkbox"
                  id="consent-check"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-0.5 accent-brand-accent-pink"
                />
                <label htmlFor="consent-check" className="cursor-pointer">
                  I agree to display my review in accordance with the Tanubhi Privacy Policy.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset hover:opacity-95 hover:shadow-lg active:scale-98 transition-all duration-300 cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>

        {/* Reviews List - Column Right */}
        <div className="lg:col-span-8 space-y-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-brand-accent-gold/15 hover:border-brand-accent-pink/40 shadow-md transition-all duration-500 flex flex-col justify-between"
            >
              {/* Accent line on top hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-pink-sunset rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Rating Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex gap-1 text-brand-accent-gold">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-sans text-xs text-brand-dark/30 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Comment */}
                <p className="font-sans text-sm text-[#4a3344] leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-brand-accent-gold/10">
                <div
                  className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center font-serif text-base font-bold text-white shadow-sm border border-brand-accent-gold/20`}
                >
                  {review.initials}
                </div>

                <div className="flex flex-col">
                  <span className="font-serif text-sm font-bold text-brand-dark group-hover:text-brand-accent-pink transition-colors duration-300">
                    {review.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-brand-accent-gold/90 font-extrabold">
                    {review.role}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-brand-accent-pink/5 ml-auto fill-current" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
