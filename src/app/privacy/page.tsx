import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-[#fdf8fa] via-white to-[#fdf8fa] min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="text-xs text-brand-dark/40 font-semibold tracking-wider uppercase mb-8">
          <Link href="/" className="hover:text-brand-accent-pink transition-colors">Home</Link>
          <span className="mx-2">&bull;</span>
          <span className="text-brand-accent-gold">Privacy Policy</span>
        </div>

        {/* Page Header */}
        <div className="space-y-4 mb-16">
          <span className="text-gradient-rose-gold text-xs font-extrabold uppercase tracking-[0.25em]">
            Tanubhi Beauty Care
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
            Privacy Policy
          </h1>
          <div className="w-20 h-[3px] bg-gradient-pink-sunset rounded-full" />
          <p className="font-sans text-xs text-[#664e60] italic">
            Last Updated: June 5, 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="font-sans text-sm text-[#4a3344] space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">1. Introduction</h2>
            <p>
              At Tanubhi Beauty Care, we respect your privacy and are committed to protecting the personal data of our lady visitors. This Privacy Policy explains how we collect, use, and safeguard your details when you book an appointment, visit our salon in Bedok, or use our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">2. Information We Collect</h2>
            <p>
              To provide a seamless, customized beauty and wellness experience, we may collect the following details when you coordinate bookings:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, phone number (WhatsApp), and email address.</li>
              <li><strong>Booking Preferences:</strong> Selected services (waxing, facial treatments, mehndi, etc.), preferred times, and dates.</li>
              <li><strong>Feedback:</strong> Reviews, ratings, and feedback shared on our guestbook or reviews page.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">3. How We Use Your Information</h2>
            <p>
              We use your personal information strictly to deliver and improve our beauty salon services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scheduling, confirming, or rescheduling your salon appointments via WhatsApp or direct calls.</li>
              <li>Custom-tailoring organic facial treatments and skincare applications to match your declared skin type.</li>
              <li>Responding to your inquiries and support requests.</li>
              <li>Publishing guest feedback on our verified reviews page (only with your name or initials).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">4. Privacy & Ladies-Only Safety</h2>
            <p>
              As a dedicated **female-only beauty care salon**, we prioritize your comfort and safety above all else. 
              We do not share, sell, or rent your database records, booking files, or contact information to any third parties. All consultation records regarding skincare treatments are kept completely confidential.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">5. Cookies & Site Analytics</h2>
            <p>
              Our website uses small session cookies and static analytics packages to understand visitor traffic patterns and optimize page load speeds. You can disable cookies inside your browser settings if you prefer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request the deletion of your booking history records, please contact our privacy compliance representative:
            </p>
            <p className="pt-2">
              <strong>Tanubhi Beauty Care</strong><br />
              631 Bedok Reservoir Road, #01-906, Singapore 470631<br />
              WhatsApp: +65 8385 3886<br />
              Email: info@tanubhi.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
