import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Khushi",
      role: "Regular Client",
      initials: "K",
      avatarColor: "bg-gradient-to-br from-pink-500 to-rose-600",
      stars: 5,
      comment:
        "Every once in a while, we girls just have to take a break from our routine daily hectic errands and job and just step aside for some relaxation... Whenever I do it, this is the place where all the relaxation starts for me. The atmosphere is calming, and the service is incredibly professional.",
    },
    {
      name: "Neha",
      role: "Regular Client",
      initials: "N",
      avatarColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
      stars: 5,
      comment:
        "Whenever I feel depressed, anxious, or just tired, I always need to take a chill pill and relax... Luckily, I always have this place for those matters. Here I can both delve into a meditative rest and also take care of my skin's health. The advanced facials work absolute wonders!",
    },
    {
      name: "Priya",
      role: "Bridesmaid Client",
      initials: "P",
      avatarColor: "bg-gradient-to-br from-amber-500 to-sunset-600",
      stars: 5,
      comment:
        "The absolute best waxing and bridal henna services in Singapore! The therapists are extremely polite and clean, and the intricate mehndi artwork got so many compliments at my sister's wedding. Their rates are highly competitive too!",
    },
  ];

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent-rose/5 blur-[90px]" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-brand-accent-pink/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-gradient-rose-gold text-xs font-bold uppercase tracking-[0.2em]">Verified Google Reviews</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark">
            Happy Visitors & Reviews
          </h2>
          <div className="w-20 h-[3px] bg-gradient-pink-sunset mx-auto rounded-full" />
          
          {/* Google Star Badge & Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fdf8fa] border border-brand-accent-gold/20 shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span className="font-bold text-xs text-brand-dark">4.5 ★ Rating (121 Google Reviews)</span>
            </div>
            <a
              href="https://share.google/1gQRTlGT8kF7fUYhv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent-pink hover:text-brand-accent-rose transition-colors"
            >
              <span>View Google Reviews</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group relative bg-[#fff9fc]/85 backdrop-blur-md rounded-3xl p-8 border border-brand-accent-gold/15 hover:border-brand-accent-pink/40 hover:bg-white shadow-[0_10px_35px_rgba(45,11,36,0.05)] hover:shadow-[0_12px_45px_rgba(209,27,93,0.08)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-brand-accent-pink/15 mb-6 flex justify-between items-start">
                  <Quote className="w-10 h-10 fill-current text-brand-accent-pink/15" />
                  {/* Stars */}
                  <div className="flex gap-1 text-brand-accent-gold">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="font-sans text-sm text-[#4a3344] leading-relaxed italic mb-8">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-brand-accent-gold/10">
                {/* Stylized Initial Avatar */}
                <div
                  className={`w-12 h-12 rounded-full ${review.avatarColor} flex items-center justify-center font-serif text-lg font-bold text-white shadow-md border border-brand-accent-gold/25`}
                >
                  {review.initials}
                </div>
                
                <div className="flex flex-col">
                  <span className="font-serif text-base font-bold text-brand-dark group-hover:text-brand-accent-pink transition-colors duration-300">
                    {review.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-brand-accent-gold/85 font-extrabold">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
