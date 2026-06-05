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
    <section id="reviews" className="relative py-24 md:py-32 bg-gradient-to-b from-[#1b0416] to-[#2d0b24] overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent-rose/10 blur-[90px]" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-brand-accent-pink/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-gradient-rose-gold text-xs font-bold uppercase tracking-[0.2em]">Our Guests</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-pink-50">
            Happy Visitors & Reviews
          </h2>
          <div className="w-20 h-[3px] bg-gradient-pink-sunset mx-auto rounded-full" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-brand-accent-gold/20 hover:border-brand-accent-pink/50 hover:bg-white shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Gold border hover animation */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-pink-sunset rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
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
