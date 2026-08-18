"use client";

import { useState } from "react";
import { Download, Printer, Check, X } from "lucide-react";

export default function DownloadCatalogButton() {
  const [showModal, setShowModal] = useState(false);

  const priceData = [
    {
      category: "Waxing & Smoothness",
      items: [
        { name: "Brazilian Waxing", price: "$45", duration: "30 min" },
        { name: "Full Legs Waxing", price: "$38", duration: "40 min" },
        { name: "Full Arms Waxing", price: "$28", duration: "30 min" },
        { name: "Half Legs Waxing", price: "$22", duration: "20 min" },
        { name: "Half Arms Waxing", price: "$18", duration: "20 min" },
        { name: "Underarms Gentle Waxing", price: "$15", duration: "15 min" },
      ],
    },
    {
      category: "Facial Treatments",
      items: [
        { name: "Gold Glow Brightening Therapy", price: "$90", duration: "90 min" },
        { name: "Advanced Anti-Aging Facial", price: "$75", duration: "75 min" },
        { name: "Premium Pearl Whitening Facial", price: "$65", duration: "75 min" },
        { name: "Fruit Glow Herbal Facial", price: "$50", duration: "60 min" },
        { name: "Organic Aloe Soothing Treatment", price: "$40", duration: "45 min" },
      ],
    },
    {
      category: "Hair Studio & Spa",
      items: [
        { name: "Brazilian Keratin Treatment", price: "$120", duration: "120 min" },
        { name: "Hair Protein Repair Therapy", price: "$60", duration: "60 min" },
        { name: "Premium Hair Highlights", price: "$80+", duration: "90 min" },
        { name: "Organic Herbal Henna Treatment", price: "$35", duration: "45 min" },
        { name: "Nourishing Head-Oil Massage", price: "$25", duration: "30 min" },
      ],
    },
    {
      category: "Makeup & Henna",
      items: [
        { name: "Luxury Bridal Hair & Makeup Package", price: "$250+", duration: "180 min" },
        { name: "Custom Intricate Bridal Henna", price: "$120+", duration: "120 min" },
        { name: "Henna Artwork & Styling Combo", price: "$90", duration: "90 min" },
        { name: "Elegant Party Makeup & Hair", price: "$70", duration: "75 min" },
        { name: "Simple Festive Henna (Per Hand)", price: "$15", duration: "20 min" },
      ],
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="shimmer-hover inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 shrink-0 cursor-pointer"
      >
        <Download className="w-4 h-4" />
        <span>View & Download Catalog PDF</span>
      </button>

      {/* Catalog Preview & Print Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-brand-accent-gold/25 p-6 sm:p-10 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-brand-dark transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Document Header */}
            <div className="text-center border-b border-brand-accent-gold/20 pb-6 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent-gold bg-brand-dark/5 px-3 py-1 rounded-full">
                Official Price Brochure • Singapore GST-Free
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mt-3">
                Tanubhi Beauty Care
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                #01-906, 631 Bedok Reservoir Road, Singapore 470631 • WhatsApp: +65 8385 3886
              </p>
              <p className="text-[10px] text-brand-accent-pink font-semibold mt-1 uppercase tracking-wider">
                Exclusively for Ladies • Certified Therapists
              </p>
            </div>

            {/* Price Menu Sections */}
            <div className="space-y-6">
              {priceData.map((cat, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-serif text-sm font-bold text-brand-accent-pink uppercase tracking-wider border-b border-gray-100 pb-1">
                    {cat.category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-gray-50/80">
                        <span className="font-medium text-gray-800">{item.name}</span>
                        <div className="text-right shrink-0 ml-2">
                          <span className="font-bold text-brand-dark">{item.price}</span>
                          <span className="text-[10px] text-gray-500 block">{item.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Policy Notes */}
            <div className="mt-6 pt-4 border-t border-gray-100 text-[10px] text-gray-500 space-y-1">
              <p className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Transparent pricing with Zero GST / No hidden charges.</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Advance booking recommended via WhatsApp +65 8385 3886 or Appointy.</span>
              </p>
            </div>

            {/* Action Buttons in Modal */}
            <div className="mt-8 flex flex-wrap gap-3 justify-end border-t border-gray-100 pt-4">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-brand-dark bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save as PDF</span>
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset hover:opacity-90 shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Brochure</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
