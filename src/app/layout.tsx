import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Alfaro Jaya Teknik - Jasa Service AC Profesional Surabaya",
    template: "%s | Alfaro Jaya Teknik",
  },
  description:
    "Alfaro Jaya Teknik menyediakan jasa service AC profesional di Surabaya: cuci AC, isi freon, bongkar pasang, perbaikan AC semua merek (Daikin, Samsung, Sharp, LG, Panasonic, Gree). Teknisi berpengalaman & harga transparan.",
  keywords: [
    "service AC Surabaya",
    "jasa cuci AC",
    "isi freon AC",
    "bongkar pasang AC",
    "perbaikan AC",
    "service AC Daikin",
    "service AC Samsung",
    "service AC Sharp",
    "service AC LG",
    "service AC Panasonic",
    "service AC Gree",
    "teknisi AC Surabaya",
    "Alfaro Jaya Teknik",
    "service AC terdekat",
    "cuci AC murah Surabaya",
  ],
  authors: [{ name: "Alfaro Jaya Teknik" }],
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
    siteName: "Alfaro Jaya Teknik",
    title: "Alfaro Jaya Teknik - Jasa Service AC Profesional Surabaya",
    description:
      "Layanan jasa cuci, bongkar pasang, dan perbaikan AC profesional di Surabaya. Teknisi ahli, harga transparan, melayani semua merek AC.",
    images: [
      {
        url: "/images/hero/google.webp",
        width: 1200,
        height: 630,
        alt: "Alfaro Jaya Teknik - Service AC Surabaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfaro Jaya Teknik - Jasa Service AC Profesional Surabaya",
    description:
      "Layanan jasa cuci, bongkar pasang, dan perbaikan AC profesional di Surabaya. Teknisi ahli & harga transparan.",
    images: ["/images/hero/google.webp"],
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
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
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

