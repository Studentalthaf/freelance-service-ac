import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";

const dmsans = DM_Sans({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alfarojayateknik.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alfaro Jaya Teknik - Jasa Service AC Murah & Profesional Surabaya, Gresik, Sidoarjo",
    template: "%s | Alfaro Jaya Teknik - Service AC Surabaya",
  },
  description:
    "Alfaro Jaya Teknik - jasa service AC murah dan terpercaya di Surabaya, Gresik, Sidoarjo dan sekitarnya. Layanan cuci AC, isi freon, bongkar pasang AC, perbaikan AC semua merek (Daikin, Samsung, Sharp, LG, Panasonic, Gree). Teknisi berpengalaman, harga transparan, bergaransi. Hubungi sekarang!",
  keywords: [
    // Brand keyword
    "Alfaro Jaya Teknik",
    "alfaro jaya teknik",
    "alfarojayateknik",
    // Primary keywords
    "service AC Surabaya",
    "service AC murah Surabaya",
    "jasa service AC Surabaya",
    "jasa cuci AC Surabaya",
    "service AC murah",
    // Area coverage keywords
    "service AC Gresik",
    "service AC Sidoarjo",
    "service AC murah daerah Surabaya Gresik Sidoarjo",
    "service AC Surabaya dan sekitarnya",
    "service AC Lamongan",
    "service AC Mojokerto",
    "service AC Bangkalan",
    // Sub-area keywords
    "service AC Surabaya Barat",
    "service AC Surabaya Timur",
    "service AC Surabaya Selatan",
    "service AC Surabaya Utara",
    // Service type keywords
    "cuci AC murah Surabaya",
    "isi freon AC Surabaya",
    "tambah freon AC murah",
    "bongkar pasang AC Surabaya",
    "perbaikan AC Surabaya",
    "service AC panggilan Surabaya",
    "service AC terdekat",
    "tukang AC Surabaya",
    "teknisi AC Surabaya",
    "teknisi AC profesional",
    // Brand-specific keywords
    "service AC Daikin Surabaya",
    "service AC Samsung Surabaya",
    "service AC Sharp Surabaya",
    "service AC LG Surabaya",
    "service AC Panasonic Surabaya",
    "service AC Gree Surabaya",
    // Long-tail keywords
    "jasa cuci AC murah di Surabaya",
    "jasa perbaikan AC semua merek Surabaya",
    "cuci AC murah daerah Surabaya dan sekitarnya",
    "service AC rumah kantor Surabaya",
    "service AC harga terjangkau Surabaya",
    "jasa AC Sidoarjo murah",
    "jasa AC Gresik murah",
  ],
  authors: [{ name: "Alfaro Jaya Teknik", url: siteUrl }],
  creator: "Alfaro Jaya Teknik",
  publisher: "Alfaro Jaya Teknik",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Alfaro Jaya Teknik",
    title: "Alfaro Jaya Teknik - Jasa Service AC Murah & Profesional Surabaya, Gresik, Sidoarjo",
    description:
      "Jasa service AC murah dan terpercaya di Surabaya, Gresik, Sidoarjo. Cuci AC, isi freon, bongkar pasang, perbaikan AC semua merek. Teknisi ahli, harga transparan, bergaransi.",
    images: [
      {
        url: `${siteUrl}/images/hero/google.webp`,
        width: 1200,
        height: 630,
        alt: "Alfaro Jaya Teknik - Jasa Service AC Profesional Surabaya Gresik Sidoarjo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfaro Jaya Teknik - Jasa Service AC Murah Surabaya, Gresik, Sidoarjo",
    description:
      "Jasa service AC murah dan terpercaya di Surabaya, Gresik, Sidoarjo. Cuci AC, isi freon, bongkar pasang, perbaikan AC. Teknisi ahli & harga transparan.",
    images: [`${siteUrl}/images/hero/google.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  // Google Search Console verification - ganti dengan kode verifikasi asli nanti
  verification: {
    google: "GANTI_DENGAN_KODE_VERIFIKASI_GOOGLE_SEARCH_CONSOLE",
  },
  other: {
    // Geo-targeting untuk SEO lokal
    "geo.region": "ID-JI",
    "geo.placename": "Surabaya",
    "geo.position": "-7.2575;112.7521",
    "ICBM": "-7.2575, 112.7521",
    // Content language
    "content-language": "id",
    // Classification
    "classification": "Jasa Service AC",
    "category": "Service AC, Cuci AC, Perbaikan AC",
    "coverage": "Surabaya, Gresik, Sidoarjo, Jawa Timur",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Preconnect untuk performa */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${dmsans.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
