import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Somu Cars | Premium Second-Hand Car Dealer in Chennai",
  description:
    "Somu Cars offers certified pre-owned cars in Chennai with transparent pricing, financing and warranty. Explore curated inventory and book a test drive today.",
  openGraph: {
    title: "Somu Cars | Premium Second-Hand Cars in Chennai",
    description:
      "Discover Somu Certified vehicles with financing support, transparent inspections, and concierge delivery.",
    url: "https://agentic-e2855e6d.vercel.app",
    siteName: "Somu Cars",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somu Cars | Premium Second-Hand Cars in Chennai",
    description:
      "Curated second-hand cars with Somu Assurance. Finance, exchange and warranty under one roof.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
