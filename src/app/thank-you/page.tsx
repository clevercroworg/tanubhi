import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYouClient from "@/components/ThankYouClient";

export const metadata: Metadata = {
  title: "Appointment Request Received | Thank You",
  description:
    "Thank you for requesting an appointment at Tanubhi Beauty Care. Our team in Bedok, Singapore will confirm your appointment shortly.",
  alternates: {
    canonical: "https://tanubhi.com/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-brand-dark flex items-center justify-center text-pink-200">
          <div className="animate-pulse font-serif text-lg">Loading confirmation...</div>
        </div>
      }
    >
      <ThankYouClient />
    </Suspense>
  );
}
