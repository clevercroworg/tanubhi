"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Brazilian Waxing");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) {
      alert("Please fill in all details to book your appointment.");
      return;
    }
    
    const countryCode = "65"; // Singapore
    const whatsappNum = "83853886"; // Primary contact from screenshot
    const text = encodeURIComponent(
      `Hi Tanubhi Beauty Care, I would like to book a premium appointment:\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Service:* ${service}\n` +
      `*Preferred Date:* ${date}\n` +
      `*Preferred Time:* ${time}\n\n` +
      `Please confirm availability. Thank you!`
    );
    
    window.open(`https://wa.me/${countryCode}${whatsappNum}?text=${text}`, "_blank");
  };

  const businessHours = [
    { day: "Monday", hours: "10:30 AM - 8:00 PM" },
    { day: "Tuesday", hours: "10:30 AM - 8:00 PM" },
    { day: "Wednesday", hours: "10:30 AM - 8:00 PM" },
    { day: "Thursday", hours: "10:30 AM - 8:00 PM" },
    { day: "Friday", hours: "10:30 AM - 8:00 PM", active: true },
    { day: "Saturday", hours: "10:30 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:30 AM - 7:00 PM" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-[#1b0416] to-[#250a20] overflow-hidden">
      {/* Decorative Glow Spheres */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-accent-pink/10 blur-[90px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-brand-accent-rose/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-gradient-rose-gold text-xs font-bold uppercase tracking-[0.2em]">Book & Visit</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-pink-50">
            Contact Us & Booking
          </h2>
          <div className="w-20 h-[3px] bg-gradient-pink-sunset mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Column 1: Contact Details & Map */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="rounded-3xl p-8 border border-brand-accent-gold/15 shadow-md space-y-6 bg-[#2d0b24]/30 backdrop-blur-md">
              <h3 className="font-serif text-2xl font-bold text-pink-50 mb-6 border-b border-brand-accent-gold/15 pb-4">
                Location Details
              </h3>
              
              <div className="space-y-4 font-sans">
                {/* Address Sub-Card */}
                <a
                  href="https://maps.google.com/?q=631+Bedok+Reservoir+Road,+Singapore+470631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-[#1b0416]/30 border border-brand-accent-gold/10 hover:border-brand-accent-pink/30 hover:bg-[#1b0416]/50 transition-all duration-300 text-pink-200/80 hover:text-white"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-accent-pink/15 text-brand-accent-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-pink-50 text-sm group-hover:text-brand-accent-gold transition-colors">
                      Tanubhi Beauty Care
                    </span>
                    <span className="text-xs text-pink-200/70">
                      #01-906, 631 Bedok Reservoir Road, Singapore 470631
                    </span>
                  </div>
                </a>

                {/* Grid for Contact lines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp sub-card */}
                  <a
                    href="https://wa.me/6583853886"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-[#1b0416]/30 border border-brand-accent-gold/10 hover:border-brand-accent-pink/30 hover:bg-[#1b0416]/50 transition-all duration-300 text-pink-200/80 hover:text-white"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-accent-pink/15 text-brand-accent-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] text-pink-300/40 block font-bold uppercase tracking-wider">
                        WhatsApp Hotline
                      </span>
                      <span className="font-bold text-pink-50 text-sm group-hover:text-brand-accent-gold transition-colors">
                        8385 3886
                      </span>
                    </div>
                  </a>

                  {/* Shop Line sub-card */}
                  <a
                    href="tel:69625490"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-[#1b0416]/30 border border-brand-accent-gold/10 hover:border-brand-accent-pink/30 hover:bg-[#1b0416]/50 transition-all duration-300 text-pink-200/80 hover:text-white"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-accent-pink/15 text-brand-accent-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] text-pink-300/40 block font-bold uppercase tracking-wider">
                        Shop Line
                      </span>
                      <span className="font-bold text-pink-50 text-sm group-hover:text-brand-accent-gold transition-colors">
                        6962 5490
                      </span>
                    </div>
                  </a>
                </div>

                {/* Email sub-card */}
                <a
                  href="mailto:info@tanubhi.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-brand-accent-gold/20 hover:border-brand-accent-pink/40 hover:bg-white/15 transition-all duration-300 text-pink-200/80 hover:text-white"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-accent-pink/15 text-brand-accent-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-pink-300/40 block font-bold uppercase tracking-wider">
                      Email Inquiries
                    </span>
                    <span className="font-bold text-pink-100 text-sm group-hover:text-brand-accent-gold transition-colors">
                      info@tanubhi.com
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative aspect-[16/9] lg:flex-grow rounded-3xl overflow-hidden border border-brand-accent-gold/20 shadow-md min-h-[300px]">
              <iframe
                title="Tanubhi Beauty Care Google Map"
                src="https://maps.google.com/maps?q=631%20Bedok%20Reservoir%20Road,%20Singapore%20470631&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-95 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Column 2: Booking Form & Operating Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Quick Booking Form */}
            <div className="rounded-3xl p-8 border border-brand-accent-gold/25 shadow-2xl relative bg-white/[0.08] backdrop-blur-xl">
              <div className="absolute top-0 right-8 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold text-white bg-gradient-pink-sunset uppercase tracking-wider shadow-sm">
                <Sparkles className="w-2.5 h-2.5 animate-spin-slow" />
                Quick Book
              </div>

              <h3 className="font-serif text-2xl font-bold text-pink-50 mb-6">Schedule Session</h3>
              
              <div className="mb-6 pb-6 border-b border-brand-accent-gold/15">
                <a
                  href="https://booking.appointy.com/en-US/tanubhi/bookings/service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 rounded-xl font-sans text-sm font-bold tracking-wide text-white bg-gradient-pink-sunset hover:shadow-xl hover:shadow-rose-500/25 active:scale-95 transition-all duration-300 block uppercase"
                >
                  Book Instantly Online
                </a>
                <p className="text-[10px] text-pink-200/50 mt-2 text-center uppercase tracking-wider">
                  Or request custom appointment via WhatsApp
                </p>
              </div>
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4 font-sans">
                <div>
                  <label className="block text-pink-200/80 font-bold uppercase tracking-widest text-[10px] mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-brand-accent-gold/20 text-white placeholder-pink-200/50 focus:outline-none focus:border-brand-accent-pink focus:bg-white/15 transition-colors text-sm shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-pink-200/80 font-bold uppercase tracking-widest text-[10px] mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +65 8385 3886"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-brand-accent-gold/20 text-white placeholder-pink-200/50 focus:outline-none focus:border-brand-accent-pink focus:bg-white/15 transition-colors text-sm shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-pink-200/80 font-bold uppercase tracking-widest text-[10px] mb-1.5">Select Service</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-brand-accent-gold/20 text-white focus:outline-none focus:border-brand-accent-pink focus:bg-white/15 transition-colors text-sm [&>option]:bg-brand-dark [&>option]:text-white shadow-sm"
                  >
                    <option value="Brazilian Waxing">Brazilian Waxing ($45)</option>
                    <option value="Full Legs Waxing">Full Legs Waxing ($38)</option>
                    <option value="Gold Glow Facial">Gold Glow Facial ($90)</option>
                    <option value="Advanced Anti-Aging Facial">Advanced Anti-Aging Facial ($75)</option>
                    <option value="Brazilian Keratin Treatment">Brazilian Keratin ($120)</option>
                    <option value="Hair Protein Repair">Hair Protein Repair ($60)</option>
                    <option value="Bridal Makeup Package">Bridal Makeup Package ($250+)</option>
                    <option value="Intricate Bridal Henna">Bridal Henna ($120+)</option>
                    <option value="Festive Henna Combo">Henna & Blowout Combo ($90)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-pink-200/80 font-bold uppercase tracking-widest text-[10px] mb-1.5">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-brand-accent-gold/20 text-white focus:outline-none focus:border-brand-accent-pink focus:bg-white/15 transition-colors text-sm shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-pink-200/80 font-bold uppercase tracking-widest text-[10px] mb-1.5">Preferred Time</label>
                    <input
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-brand-accent-gold/20 text-white focus:outline-none focus:border-brand-accent-pink focus:bg-white/15 transition-colors text-sm shadow-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="shimmer-hover w-full py-4 mt-4 rounded-xl bg-gradient-pink-sunset text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:shadow-rose-500/25 active:scale-98 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Request Booking via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Operating Hours */}
            <div className="rounded-3xl p-8 border border-brand-accent-gold/25 shadow-2xl bg-white/[0.06] backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-brand-accent-pink" />
                <h3 className="font-serif text-xl font-bold text-pink-50">Operating Hours</h3>
              </div>
              
              <div className="space-y-2.5 font-sans text-xs">
                {businessHours.map((row, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg border border-transparent ${
                      row.active
                        ? "bg-brand-accent-pink/20 border-brand-accent-pink/30 text-brand-accent-pink font-bold"
                        : "text-pink-200/70 border-b border-pink-200/5 last:border-b-0"
                    }`}
                  >
                    <span>{row.day}</span>
                    <div className="flex items-center gap-2">
                      <span>{row.hours}</span>
                      {row.active && (
                        <span className="inline-flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent-pink opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent-pink"></span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
