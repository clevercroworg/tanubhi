"use client";

import React from "react";
import { PhoneCall } from "lucide-react";

export default function StickyContactBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(45,11,36,0.12),0_4px_12px_rgba(0,0,0,0.05)] border border-brand-accent-gold/15 p-2.5 flex items-center justify-between gap-3 z-50 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(45,11,36,0.16)] md:bottom-6 md:right-6 md:left-auto md:translate-x-0 md:w-80 font-sans">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6583853886?text=Hi%20Tanubhi%20Beauty%20Care%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-sm hover:shadow-md transition-all duration-300 active:scale-98 text-xs sm:text-sm group"
      >
        <svg 
          className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.782 1.45h.007c5.489 0 9.954-4.466 9.957-9.957.002-2.661-1.034-5.162-2.915-7.046C16.538 1.717 14.04 .68 11.381.68c-5.49 0-9.956 4.466-9.959 9.958-.001 1.71.472 3.38 1.37 4.86L1.7 20.89l5.65-1.48c.002 0 .003-.001.005-.001zm11.236-7.643c-.301-.15-1.785-.881-2.062-.982-.278-.1-.48-.15-.68.15-.2.3-.775.982-.95 1.183-.175.2-.35.225-.65.075-.302-.15-1.274-.469-2.427-1.496-.897-.8-1.502-1.79-1.278-2.193.125-.2.25-.4.375-.55.125-.15.201-.25.3-.45.1-.2.05-.375-.025-.525-.075-.15-.68-1.636-.932-2.238-.246-.593-.497-.513-.68-.522-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.027-1.05 2.505 0 1.477 1.075 2.903 1.225 3.103.15.2 2.11 3.224 5.116 4.522.715.31 1.273.495 1.708.633.72.227 1.374.195 1.892.118.577-.087 1.784-.73 2.035-1.434.25-.705.25-1.31.175-1.433-.075-.125-.275-.201-.575-.351z" />
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+6583853886"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-gradient-pink-sunset hover:opacity-95 shadow-sm hover:shadow-md transition-all duration-300 active:scale-98 text-xs sm:text-sm group"
      >
        <PhoneCall className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
        <span>Call Salon</span>
      </a>
    </div>
  );
}
