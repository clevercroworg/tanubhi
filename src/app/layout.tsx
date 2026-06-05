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
  title: "Tanubhi Beauty Care | Premium Beauty & Hair Salon Singapore",
  description: "Discover the beauty within at Tanubhi Beauty Care, Bedok Reservoir Road, Singapore. Experience luxury waxing, advanced facial treatments, professional makeup, and intricate bridal henna.",
  keywords: "Tanubhi Beauty Care, beauty salon Singapore, Bedok beauty salon, waxing services Singapore, bridal henna Singapore, facial treatments Singapore, Indian makeup, Malay bridal, hair protein treatment",
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
