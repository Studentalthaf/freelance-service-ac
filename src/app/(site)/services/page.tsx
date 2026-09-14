import HeroSub from "@/components/SharedComponents/HeroSub";
import Spend from "@/components/Home/Spend";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alfarojayateknik.com";

export const metadata: Metadata = {
  title: "Layanan Service AC Lengkap - Cuci AC, Isi Freon, Bongkar Pasang Surabaya",
  description:
    "Daftar lengkap layanan service AC dari Alfaro Jaya Teknik Surabaya, Gresik, Sidoarjo: cuci AC mulai Rp 75.000, bongkar pasang AC, isi freon, perbaikan kapasitor, vacum & flushing, las pipa, overhaul AC semua merek. Teknisi profesional & bergaransi.",
  keywords:
    "layanan service AC Surabaya, cuci AC Surabaya, isi freon AC Surabaya, bongkar pasang AC Surabaya, perbaikan AC Surabaya, jasa AC Gresik, jasa AC Sidoarjo, Alfaro Jaya Teknik layanan, vacum AC, flushing AC, las pipa AC, overhaul AC, service AC semua merek",
  openGraph: {
    title: "Layanan Service AC Lengkap - Alfaro Jaya Teknik Surabaya",
    description:
      "Cuci AC, isi freon, bongkar pasang, perbaikan AC semua merek di Surabaya, Gresik, Sidoarjo. Teknisi profesional dengan harga transparan.",
    url: `${siteUrl}/services`,
    images: [
      {
        url: `${siteUrl}/images/hero/google.webp`,
        width: 1200,
        height: 630,
        alt: "Layanan Service AC Alfaro Jaya Teknik",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

// JSON-LD for Services page
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteUrl}/services/#service`,
      name: "Jasa Service AC Alfaro Jaya Teknik",
      description: "Layanan service AC profesional meliputi cuci AC, isi freon, bongkar pasang AC, perbaikan kapasitor, vacum & flushing, las pipa, dan overhaul AC untuk semua merek.",
      provider: {
        "@type": "HVACBusiness",
        name: "Alfaro Jaya Teknik",
        url: siteUrl,
      },
      areaServed: [
        { "@type": "City", name: "Surabaya" },
        { "@type": "City", name: "Gresik" },
        { "@type": "City", name: "Sidoarjo" },
      ],
      serviceType: [
        "Cuci AC",
        "Isi Freon AC",
        "Tambah Freon AC",
        "Bongkar Pasang AC",
        "Perbaikan AC",
        "Penggantian Kapasitor AC",
        "Vacum dan Flushing AC",
        "Las Pipa AC",
        "Overhaul AC",
        "Pengecekan AC",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Layanan",
          item: `${siteUrl}/services`,
        },
      ],
    },
  ],
};

const Services = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      {/* JSON-LD for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <HeroSub
        title="Layanan Kami"
        description="Alfaro Jaya Teknik menyediakan berbagai layanan service AC profesional untuk memastikan kenyamanan ruangan Anda tetap optimal."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Spend />
    </>
  );
};

export default Services;
