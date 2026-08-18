import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanubhi.com"),
  title: {
    default: "Tanubhi Beauty Care | Premium Ladies Salon Singapore",
    template: "%s | Tanubhi Beauty Care",
  },
  description:
    "Discover luxury ladies-only beauty wellness at Tanubhi Beauty Care, Bedok Reservoir Road, Singapore. Specializing in waxing, advanced facials, precision threading, hair studio, and bridal henna.",
  keywords: [
    "Tanubhi Beauty Care",
    "beauty salon Singapore",
    "ladies salon Bedok",
    "waxing services Singapore",
    "bridal henna Singapore",
    "facial treatments Singapore",
    "eyebrow threading Bedok",
    "hair protein treatment",
    "GST-free beauty salon",
  ],
  openGraph: {
    title: "Tanubhi Beauty Care | Premium Ladies Salon Singapore",
    description:
      "Exclusive ladies-only beauty salon & wellness in Bedok Reservoir Road, Singapore. Advanced facials, waxing, and bridal henna.",
    url: "https://tanubhi.com",
    siteName: "Tanubhi Beauty Care",
    locale: "en_SG",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Tanubhi Beauty Care",
  "image": "https://tanubhi.com/images/facial_treatment.png",
  "@id": "https://tanubhi.com/#salon",
  "url": "https://tanubhi.com",
  "telephone": "+6583853886",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "631 Bedok Reservoir Road, #01-906",
    "addressLocality": "Singapore",
    "postalCode": "470631",
    "addressCountry": "SG",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 1.3344,
    "longitude": 103.9094,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "10:30",
      "closes": "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:30",
      "closes": "19:00",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "121",
    "bestRating": "5",
    "worstRating": "1",
  },
  "sameAs": [
    "https://www.facebook.com/tanubhibeautycare",
    "https://www.instagram.com/tanubhibeautycare",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-brand-dark text-pink-50 flex flex-col selection:bg-brand-accent-pink selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
