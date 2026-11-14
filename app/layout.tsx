

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
  metadataBase: new URL("https://garasiotoparts.netlify.app"),
  title: {
    default: "Garasi Otoparts Medan | Bengkel Mobil & Sparepart",
    template: "%s | Garasi Otoparts Medan",
  },
  description:
    "Garasi Otoparts Medan melayani service mobil, perbaikan mesin, scanner, sparepart, oli mesin, tune up, dan perawatan kendaraan. Kunjungi kami di Jl. Setia Budi No. 213, Medan.",
  keywords: [
    "Garasi Otoparts Medan",
    "bengkel mobil Medan",
    "service mobil Medan",
    "sparepart mobil Medan",
    "oli mesin Medan",
    "perbaikan mesin mobil Medan",
  ],
  openGraph: {
    title: "Garasi Otoparts Medan",
    description:
      "Bengkel mobil, sparepart, oli mesin, dan perawatan kendaraan di Medan.",
    url: "https://garasiotoparts.netlify.app",
    siteName: "Garasi Otoparts",
    locale: "id_ID",
    type: "website",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

