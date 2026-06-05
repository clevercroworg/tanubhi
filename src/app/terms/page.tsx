import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="bg-gradient-to-b from-[#fdf8fa] via-white to-[#fdf8fa] min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="text-xs text-brand-dark/40 font-semibold tracking-wider uppercase mb-8">
          <Link href="/" className="hover:text-brand-accent-pink transition-colors">Home</Link>
          <span className="mx-2">&bull;</span>
          <span className="text-brand-accent-gold">Terms of Service</span>
        </div>

        {/* Page Header */}
        <div className="space-y-4 mb-16">
          <span className="text-gradient-rose-gold text-xs font-extrabold uppercase tracking-[0.25em]">
            Tanubhi Beauty Care
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
            Terms of Service
          </h1>
          <div className="w-20 h-[3px] bg-gradient-pink-sunset rounded-full" />
          <p className="font-sans text-xs text-[#664e60] italic">
            Last Updated: June 5, 2026
          </p>
        </div>

        {/* Terms Content */}
        <div className="font-sans text-sm text-[#4a3344] space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">1. Ladies-Only Salon Policy</h2>
            <p>
              Please note that Tanubhi Beauty Care is strictly a **female-only** beauty and wellness salon. All services, treatments, and appointments scheduled through this website or WhatsApp are reserved exclusively for ladies. Male visitors, companions, or clients will not be admitted into the treatment rooms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">2. Appointment Bookings & Cancellations</h2>
            <p>
              To ensure all our guests receive exceptional care, we enforce the following appointment guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Punctuality:</strong> We request clients to arrive 5–10 minutes before their scheduled slot. Late arrivals of more than 15 minutes may result in a shortened session or rescheduling.</li>
              <li><strong>Cancellation Notice:</strong> Rescheduling or cancellation requests must be sent at least 2 hours before the appointment via WhatsApp to free up slots for other clients.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">3. Prices and GST-Free Terms</h2>
            <p>
              All prices listed on our [Price List Page](/pricelist) are transparent and starting guidelines. 
              Tanubhi Beauty Care is a registered Singapore business, and we offer **GST-free pricing**. No additional hidden taxes will be added to your bill. Prices are subject to slight adjustments for custom-blended face treatments or extreme hair lengths, which will always be discussed with you before the treatment begins.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">4. Skin Sensitivities & Medical Declarations</h2>
            <p>
              Your health and safety are paramount. Clients are required to disclose any allergies, skin sensitivities, medical conditions, or recent dermatological treatments (e.g. chemical peels, laser surgeries) prior to receiving waxing, bleaching, or advanced facial treatments. Tanubhi Beauty Care is not liable for reactions occurring due to undisclosed skin sensitivities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">5. Guest Reviews & User Conduct</h2>
            <p>
              When writing review comments on our guestbook, users agree to provide honest, respectful feedback. We reserve the right to remove any inappropriate, abusive, or spam comments to protect our guests and community environment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">6. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of Singapore. Any disputes arising from salon services will be resolved under the jurisdiction of the Singapore Courts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
