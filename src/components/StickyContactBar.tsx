"use client";

import React from "react";

export default function StickyContactBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_40px_rgba(45,11,36,0.16),0_2px_12px_rgba(0,0,0,0.06)] border border-brand-accent-gold/20 p-3 flex items-center justify-between gap-4 z-50 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(45,11,36,0.22)] md:bottom-6 md:p-3.5 font-sans">
      
      {/* Brand Badge (Visible on tablet & desktop, hidden on mobile for optimal button width) */}
      <div className="hidden sm:flex flex-col items-start gap-0.5 border-r border-brand-accent-gold/20 pr-4.5 flex-shrink-0 select-none">
        <span className="font-serif text-sm font-bold text-brand-dark">Tanubhi Care</span>
        <span className="text-[9px] font-bold text-brand-accent-gold uppercase tracking-wider">Ladies Only</span>
      </div>

      {/* Buttons Action Area */}
      <div className="flex-grow flex items-center gap-3 w-full sm:w-auto">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6583853886?text=Hi%20Tanubhi%20Beauty%20Care%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2.5 py-3 px-4 sm:px-6 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] text-xs sm:text-sm group"
        >
          {/* Authentic WhatsApp SVG Icon */}
          <svg 
            className="w-4.5 h-4.5 fill-current transition-transform duration-300 group-hover:scale-110" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.004 0C5.378 0 .004 5.374.004 12c0 2.112.551 4.17 1.595 5.986L.004 24l6.19-1.623c1.762.96 3.738 1.467 5.81 1.467 6.626 0 12-5.374 12-12s-5.374-12-12-12zm6.368 17.068c-.27.765-1.353 1.4-1.854 1.493-.456.084-.91.134-2.88-.65-2.52-1.002-4.148-3.568-4.274-3.734-.127-.168-.94-1.25-.94-2.385 0-1.134.59-1.69.802-1.914.212-.224.464-.28.62-.28.156 0 .312.002.448.006.146.004.34-.056.53.4.2.48.68 1.666.74 1.785.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.312-.36.42-.12.12-.246.252-.106.492.14.24.62 1.022 1.33 1.654.914.814 1.684 1.066 1.924 1.186.24.12.38.1.52-.06.14-.16.6-1.002.76-1.344.16-.34.32-.28.54-.2.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.2 1.344z"/>
          </svg>
          <span className="tracking-wide">WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+6583853886"
          className="flex-1 flex items-center justify-center gap-2.5 py-3 px-4 sm:px-6 rounded-xl font-bold text-white bg-gradient-pink-sunset hover:opacity-95 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] text-xs sm:text-sm group"
        >
          {/* Authentic Call SVG Icon */}
          <svg 
            className="w-4 h-4 fill-none stroke-current stroke-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
            viewBox="0 0 24 24"
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="tracking-wide">Call Salon</span>
        </a>
      </div>
    </div>
  );
}
