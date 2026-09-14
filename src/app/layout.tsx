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
    // ===== BRAND =====
    "Alfaro Jaya Teknik",
    "alfaro jaya teknik",
    "alfarojayateknik",
    "alfaro jaya teknik surabaya",

    // ===== 1. SERVICE AC DI SURABAYA =====
    "service AC Surabaya",
    "service AC di Surabaya",
    "service AC murah Surabaya",
    "service AC murah di Surabaya",
    "jasa service AC Surabaya",
    "jasa service AC murah Surabaya",
    "service AC terdekat Surabaya",
    "service AC terdekat dari sini",
    "service AC panggilan Surabaya",
    "tukang AC Surabaya",
    "tukang service AC Surabaya",
    "teknisi AC Surabaya",
    "teknisi AC panggilan Surabaya",
    "service AC terpercaya Surabaya",
    "service AC terbaik Surabaya",
    "service AC bergaransi Surabaya",
    "service AC profesional Surabaya",
    "service AC 24 jam Surabaya",
    "rekomendasi service AC Surabaya",
    "cuci AC Surabaya",
    "cuci AC murah Surabaya",
    "jasa cuci AC Surabaya",
    "jasa cuci AC murah Surabaya",
    "harga cuci AC Surabaya",
    "cuci AC murah daerah Surabaya dan sekitarnya",
    // Area Gresik
    "service AC Gresik",
    "service AC murah Gresik",
    "jasa service AC Gresik",
    "cuci AC Gresik",
    "cuci AC murah Gresik",
    // Area Sidoarjo
    "service AC Sidoarjo",
    "service AC murah Sidoarjo",
    "jasa service AC Sidoarjo",
    "cuci AC Sidoarjo",
    "cuci AC murah Sidoarjo",
    // Multi-area
    "service AC murah daerah Surabaya Gresik Sidoarjo",
    "service AC Surabaya Gresik Sidoarjo dan sekitarnya",
    "jasa AC Surabaya Gresik Sidoarjo",
    "service AC Lamongan",
    "service AC Mojokerto",
    // Sub-area
    "service AC Surabaya Barat",
    "service AC Surabaya Timur",
    "service AC Surabaya Selatan",
    "service AC Surabaya Utara",
    "service AC Wiyung",
    "service AC Rungkut",
    "service AC Waru",
    "service AC Driyorejo",

    // ===== 2. AC BOCOR =====
    "AC bocor Surabaya",
    "AC bocor air Surabaya",
    "service AC bocor Surabaya",
    "perbaikan AC bocor Surabaya",
    "jasa perbaikan AC bocor Surabaya",
    "AC bocor netes air",
    "kenapa AC bocor",
    "penyebab AC bocor",
    "solusi AC bocor",
    "cara mengatasi AC bocor",
    "tukang AC bocor Surabaya",
    "AC netes air Surabaya",
    "AC tidak dingin Surabaya",
    "AC mati Surabaya",
    "AC bau Surabaya",
    "AC berisik Surabaya",
    "perbaikan AC Surabaya",
    "jasa perbaikan AC Surabaya",
    "solusi AC tidak dingin",
    "kenapa AC tidak dingin",

    // ===== 3. ISI FREON AC =====
    "isi freon AC Surabaya",
    "isi freon AC murah Surabaya",
    "jasa isi freon AC Surabaya",
    "tambah freon AC Surabaya",
    "tambah freon AC murah Surabaya",
    "jasa tambah freon AC Surabaya",
    "harga isi freon AC Surabaya",
    "biaya isi freon AC Surabaya",
    "berapa harga isi freon AC",
    "isi freon AC R32 Surabaya",
    "isi freon AC R410 Surabaya",
    "isi freon AC R22 Surabaya",
    "isi freon AC murah Gresik",
    "isi freon AC murah Sidoarjo",
    "freon AC habis Surabaya",
    "AC kurang freon Surabaya",
    "AC kurang dingin isi freon",

    // ===== 4. PASANG AC / BONGKAR PASANG =====
    "pasang AC Surabaya",
    "pasang AC murah Surabaya",
    "jasa pasang AC Surabaya",
    "jasa pasang AC murah Surabaya",
    "harga pasang AC Surabaya",
    "biaya pasang AC Surabaya",
    "bongkar pasang AC Surabaya",
    "bongkar pasang AC murah Surabaya",
    "jasa bongkar pasang AC Surabaya",
    "harga bongkar pasang AC Surabaya",
    "bongkar AC Surabaya",
    "jasa bongkar AC Surabaya",
    "pindahan AC Surabaya",
    "jasa pindah AC Surabaya",
    "pasang AC baru Surabaya",
    "jasa instalasi AC Surabaya",
    "pasang AC Gresik",
    "pasang AC Sidoarjo",
    "bongkar pasang AC Gresik Sidoarjo",
    "pasang AC rumah Surabaya",
    "pasang AC kantor Surabaya",

    // ===== 5. BELI AC =====
    "beli AC Surabaya",
    "beli AC murah Surabaya",
    "jual AC Surabaya",
    "jual beli AC Surabaya",
    "toko AC Surabaya",
    "AC murah Surabaya",
    "beli AC baru Surabaya",
    "beli AC plus pasang Surabaya",
    "AC murah Gresik",
    "AC murah Sidoarjo",
    "rekomendasi AC murah Surabaya",

    // ===== MEREK AC =====
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
