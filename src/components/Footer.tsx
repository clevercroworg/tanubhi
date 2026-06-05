import Link from "next/link";
import { Sparkles, PhoneCall } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Price List", href: "#pricelist" },
    { name: "Reviews", href: "#reviews" },
    { name: "Beauty Tips", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-brand-darker border-t border-brand-accent-gold/10 pt-16 pb-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-brand-accent-gold group-hover:scale-108 transition-all duration-300">
                <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent-gold/40" />
                  <circle cx="32" cy="32" r="27" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" className="text-brand-accent-gold/30" />
                  <path d="M32 14C32 14 36 22 36 28C36 34 32 38 32 38C32 38 28 34 28 28C28 22 32 14 32 14Z" fill="url(#logo-grad-pink-foot)" />
                  <path d="M32 18C32 18 40 22 42 28C44 34 39 38 39 38C39 38 34 36 32 32C30 36 25 38 25 38C25 38 20 34 22 28C24 22 32 18 32 18Z" fill="url(#logo-grad-gold-foot)" className="opacity-80" />
                  <path d="M32 26L33.5 29L36.5 30.5L33.5 32L32 35L30.5 32L27.5 30.5L30.5 29L32 26Z" fill="#ffffff" />
                  <defs>
                    <linearGradient id="logo-grad-pink-foot" x1="28" y1="14" x2="36" y2="38" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#d11b5d" />
                      <stop offset="100%" stopColor="#be123c" />
                    </linearGradient>
                    <linearGradient id="logo-grad-gold-foot" x1="22" y1="18" x2="42" y2="38" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="100%" stopColor="#c59b27" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-gradient-rose-gold">
                  TANUBHI
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent-gold font-sans font-semibold">
                  Beauty Care
                </span>
              </div>
            </a>
            
            <p className="text-sm text-pink-200/60 leading-relaxed max-w-sm">
              Discover the beauty within at Tanubhi Beauty Care. We offer Singapore&apos;s finest female-only wellness experiences, specialized in advanced skincare facials, waxing, and intricate bridal makeup.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-brand-accent-gold/15 flex items-center justify-center text-brand-accent-gold hover:text-white hover:bg-brand-accent-pink hover:border-brand-accent-pink hover:scale-105 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-brand-accent-gold/15 flex items-center justify-center text-brand-accent-gold hover:text-white hover:bg-brand-accent-pink hover:border-brand-accent-pink hover:scale-105 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-pink-100 uppercase tracking-wider">Sitemap</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-pink-200/60 hover:text-brand-accent-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-pink-100 uppercase tracking-wider">Hotline Support</h4>
            <div className="space-y-3.5 text-sm text-pink-200/60">
              <a
                href="tel:83853886"
                className="flex items-center gap-2 text-pink-200/80 hover:text-brand-accent-gold transition-colors duration-300"
              >
                <PhoneCall className="w-4 h-4 text-brand-accent-pink" />
                <span>+65 8385 3886 (WhatsApp)</span>
              </a>
              <p className="text-xs text-pink-200/50">
                #01-906, 631 Bedok Reservoir Road, Singapore 470631
              </p>
              <p className="text-[10px] text-brand-accent-gold font-semibold uppercase tracking-wider">
                Exclusively for Ladies
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-accent-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-pink-200/40">
          <p>
            &copy; {currentYear} Tanubhi Beauty Care. All rights reserved. Registered Singapore Business.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-accent-gold transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-brand-accent-gold transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
