"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { trackAppointmentConversion, reportCallConversion } from "@/lib/gtag";

export default function ThankYouClient() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "Salon Beauty Service";
  const name = searchParams.get("name") || "";

  useEffect(() => {
    // Trigger Google Ads Conversion Event
    trackAppointmentConversion({
      service,
      method: "whatsapp_form",
    });
  }, [service]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b0416] via-[#250a20] to-[#160212] text-pink-50 py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Ambient Lighting Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-accent-pink/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-accent-gold/10 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-12">
        {/* Top Success Badge & Heading */}
        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-pink-sunset shadow-2xl shadow-rose-950/60 animate-bounce-subtle">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-brand-accent-gold/30 text-brand-accent-gold text-xs font-bold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent-pink" />
            <span>Appointment Request Received</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white pt-2">
            Thank You{name ? `, ${name}` : ""}!
          </h1>
          <p className="font-sans text-base sm:text-lg text-pink-200/90 max-w-xl mx-auto leading-relaxed">
            Your appointment booking request for{" "}
            <span className="text-gradient-rose-gold font-semibold">
              {service}
            </span>{" "}
            has been sent to our reception team.
          </p>
        </div>

        {/* Appointment Status Card */}
        <div className="glass-card-plum rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-6 flex-wrap gap-4">
            <div>
              <span className="text-xs text-brand-accent-gold uppercase font-extrabold tracking-wider">
                Service Booked
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                {service}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Pending Slot Confirmation</span>
            </div>
          </div>

          {/* Next Steps Timeline */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-pink-300 font-bold flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-brand-accent-pink" />
              <span>What Happens Next</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-7 h-7 rounded-full bg-brand-accent-pink/30 flex items-center justify-center text-xs font-bold text-pink-200">
                  1
                </div>
                <h5 className="font-sans text-sm font-bold text-white">
                  WhatsApp Confirmation
                </h5>
                <p className="text-xs text-pink-200/75 leading-relaxed">
                  Our salon therapists will verify availability and send your time confirmation via WhatsApp.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-7 h-7 rounded-full bg-brand-accent-pink/30 flex items-center justify-center text-xs font-bold text-pink-200">
                  2
                </div>
                <h5 className="font-sans text-sm font-bold text-white">
                  Preparation Tips
                </h5>
                <p className="text-xs text-pink-200/75 leading-relaxed">
                  Please arrive 5 minutes early. Avoid harsh scrubs 24h prior to facials or waxing treatments.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-7 h-7 rounded-full bg-brand-accent-pink/30 flex items-center justify-center text-xs font-bold text-pink-200">
                  3
                </div>
                <h5 className="font-sans text-sm font-bold text-white">
                  Visit Sanctuary
                </h5>
                <p className="text-xs text-pink-200/75 leading-relaxed">
                  Enjoy Singapore&apos;s exclusive 100% ladies-only care with certified specialists.
                </p>
              </div>
            </div>
          </div>

          {/* Salon Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs text-pink-100/90">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand-accent-gold shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-sans">Salon Address</strong>
                <span>#01-906, 631 Bedok Reservoir Road, Singapore 470631</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-brand-accent-gold shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-sans">Opening Hours</strong>
                <span>Mon–Sat: 10:30 AM – 8 PM | Sun: 10:30 AM – 7 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.me/6583853886"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-wider text-white bg-gradient-pink-sunset shadow-lg shadow-rose-950/50 hover:scale-103 transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+65 8385 3886)</span>
          </a>

          <a
            href="tel:+6569625490"
            onClick={() => reportCallConversion("tel:+6569625490")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-sans text-sm font-semibold tracking-wider text-pink-100 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all"
          >
            <Phone className="w-4 h-4 text-brand-accent-gold" />
            <span>Call Reception (6962 5490)</span>
          </a>
        </div>

        {/* Return Links */}
        <div className="flex items-center justify-center gap-6 pt-4 text-xs text-pink-200/70 font-semibold uppercase tracking-wider">
          <Link
            href="/"
            className="hover:text-brand-accent-gold transition-colors flex items-center gap-1.5"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span>&bull;</span>
          <Link
            href="/pricelist"
            className="hover:text-brand-accent-gold transition-colors flex items-center gap-1.5"
          >
            <span>View Full Price Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Trust Note */}
        <div className="text-center pt-6">
          <p className="text-[11px] text-pink-300/60 uppercase tracking-widest inline-flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-accent-gold" />
            <span>100% Ladies-Only Privacy • Singapore GST-Free Pricing</span>
          </p>
        </div>
      </div>
    </div>
  );
}
