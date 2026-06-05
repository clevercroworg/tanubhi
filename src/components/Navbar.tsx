"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, PhoneCall, MapPin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Services", href: "/services" },
    { name: "Price List", href: "/pricelist" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="w-full z-50">
        {/* Top bar */}
        <div className="bg-brand-dark text-pink-100/90 py-1.5 sm:py-2.5 px-6 md:px-12 text-xs border-b border-brand-accent-gold/15">
          <div className="max-w-7xl mx-auto flex items-center justify-end sm:justify-between gap-2">
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 text-center sm:text-left">
              <span className="flex items-center gap-1.5 hover:text-brand-accent-gold transition-colors">
                <MapPin className="w-3.5 h-3.5 text-brand-accent-pink" />
                <span>631 Bedok Reservoir Road, Singapore</span>
              </span>
              <span className="hidden md:inline text-pink-100/25">|</span>
              <a href="tel:83853886" className="flex items-center gap-1.5 hover:text-brand-accent-gold transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-brand-accent-pink" />
                <span>WhatsApp: +65 8385 3886</span>
              </a>
            </div>
            
            {/* Social Icons Corner */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent-gold hover:scale-108 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent-gold hover:scale-108 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://wa.me/6583853886"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent-gold hover:scale-108 transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <header
          className={`transition-all duration-500 ${
            scrolled
              ? "fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-8 max-w-7xl mx-auto mt-4 rounded-2xl glass-panel-heavy shadow-xl"
              : "relative w-full py-5 px-6 md:px-12 bg-white/40 border-b border-brand-accent-gold/10 backdrop-blur-md"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-brand-dark/5 text-brand-accent-gold group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent-gold/40" />
                  <circle cx="32" cy="32" r="27" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" className="text-brand-accent-gold/30" />
                  <path d="M32 14C32 14 36 22 36 28C36 34 32 38 32 38C32 38 28 34 28 28C28 22 32 14 32 14Z" fill="url(#logo-grad-pink-nav)" />
                  <path d="M32 18C32 18 40 22 42 28C44 34 39 38 39 38C39 38 34 36 32 32C30 36 25 38 25 38C25 38 20 34 22 28C24 22 32 18 32 18Z" fill="url(#logo-grad-gold-nav)" className="opacity-80" />
                  <path d="M32 26L33.5 29L36.5 30.5L33.5 32L32 35L30.5 32L27.5 30.5L30.5 29L32 26Z" fill="#ffffff" />
                  <defs>
                    <linearGradient id="logo-grad-pink-nav" x1="28" y1="14" x2="36" y2="38" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#d11b5d" />
                      <stop offset="100%" stopColor="#be123c" />
                    </linearGradient>
                    <linearGradient id="logo-grad-gold-nav" x1="22" y1="18" x2="42" y2="38" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="100%" stopColor="#c59b27" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-brand-dark group-hover:text-brand-accent-pink transition-colors">
                  TANUBHI
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent-gold font-sans font-bold">
                  Beauty Care
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-sans text-sm font-semibold tracking-wide hover:text-brand-accent-pink transition-colors duration-300 relative py-2 group ${
                      isActive ? "text-brand-accent-pink" : "text-brand-dark"
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-pink-sunset transition-all duration-300 rounded-full ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </Link>
                );
              })}
            </nav>

            {/* Book Now Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="shimmer-hover inline-flex items-center justify-center px-6 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset hover:shadow-lg hover:shadow-rose-950/20 active:scale-95 transition-all duration-300"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-brand-dark hover:text-brand-accent-pink hover:bg-brand-accent-pink/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-white p-6 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-in-out md:hidden border-l border-brand-accent-gold/15 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 mt-12">
          <div className="flex items-center gap-3 pb-6 border-b border-brand-accent-gold/15">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark/5 text-brand-accent-gold">
              <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent-gold/40" />
                <circle cx="32" cy="32" r="27" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" className="text-brand-accent-gold/30" />
                <path d="M32 14C32 14 36 22 36 28C36 34 32 38 32 38C32 38 28 34 28 28C28 22 32 14 32 14Z" fill="url(#logo-grad-pink-mob)" />
                <path d="M32 18C32 18 40 22 42 28C44 34 39 38 39 38C39 38 34 36 32 32C30 36 25 38 25 38C25 38 20 34 22 28C24 22 32 18 32 18Z" fill="url(#logo-grad-gold-mob)" className="opacity-80" />
                <path d="M32 26L33.5 29L36.5 30.5L33.5 32L32 35L30.5 32L27.5 30.5L30.5 29L32 26Z" fill="#ffffff" />
                <defs>
                  <linearGradient id="logo-grad-pink-mob" x1="28" y1="14" x2="36" y2="38" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#d11b5d" />
                    <stop offset="100%" stopColor="#be123c" />
                  </linearGradient>
                  <linearGradient id="logo-grad-gold-mob" x1="22" y1="18" x2="42" y2="38" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="100%" stopColor="#c59b27" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider text-brand-dark">
                TANUBHI
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-brand-accent-gold font-bold">
                Beauty Care
              </span>
            </div>
          </div>

          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-base font-semibold tracking-wide hover:text-brand-accent-pink transition-colors py-2 border-b border-brand-dark/5 ${
                    isActive ? "text-brand-accent-pink font-bold" : "text-brand-dark"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="tel:83853886"
            className="flex items-center justify-center gap-2 py-3 rounded-xl border border-brand-accent-gold/20 text-brand-accent-gold font-semibold hover:bg-brand-card-hover transition-colors text-sm"
          >
            <PhoneCall className="w-4 h-4 text-brand-accent-pink" />
            <span>Call +65 8385 3886</span>
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-xl font-sans text-sm font-bold tracking-wide text-white bg-gradient-pink-sunset hover:opacity-90 active:scale-95 transition-all duration-300"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
}
