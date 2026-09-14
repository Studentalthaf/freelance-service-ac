import Pricing from "@/components/Home/Pricing";
import HeroSub from "@/components/SharedComponents/HeroSub";
import React from "react";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alfarojayateknik.com";

export const metadata: Metadata = {
  title: "Daftar Harga Service AC Murah Surabaya - Cuci AC Mulai Rp 75.000",
  description:
    "Daftar harga jasa service AC murah Alfaro Jaya Teknik Surabaya, Gresik, Sidoarjo. Cuci AC mulai Rp 75.000, isi freon mulai Rp 250.000, bongkar pasang mulai Rp 550.000. Harga transparan, tanpa biaya tersembunyi, bergaransi.",
  keywords:
    "harga service AC Surabaya, harga cuci AC murah, biaya isi freon AC, harga bongkar pasang AC, tarif service AC Surabaya, daftar harga AC Surabaya Gresik Sidoarjo, Alfaro Jaya Teknik harga, cuci AC murah 75000, service AC murah daerah Surabaya",
  openGraph: {
    title: "Daftar Harga Service AC Murah - Alfaro Jaya Teknik Surabaya",
    description:
      "Harga service AC transparan dan kompetitif. Cuci AC mulai Rp 75.000. Melayani Surabaya, Gresik, Sidoarjo dan sekitarnya.",
    url: `${siteUrl}/pricing`,
    images: [
      {
        url: `${siteUrl}/images/hero/google.webp`,
        width: 1200,
        height: 630,
        alt: "Daftar Harga Service AC Alfaro Jaya Teknik",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/pricing`,
  },
};

// JSON-LD for Pricing page
const pricingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/pricing/#catalog`,
      name: "Daftar Harga Service AC Alfaro Jaya Teknik",
      description: "Harga jasa service AC murah dan transparan di Surabaya, Gresik, Sidoarjo",
      provider: {
        "@type": "HVACBusiness",
        name: "Alfaro Jaya Teknik",
      },
      numberOfItems: 32,
      itemListElement: [
        { "@type": "Offer", name: "Service Cuci AC 0,5-1 PK", price: "75000", priceCurrency: "IDR", description: "Jasa cuci + Filter Indoor & Outdoor AC" },
        { "@type": "Offer", name: "Service Cuci AC 1,5-2 PK", price: "85000", priceCurrency: "IDR", description: "Jasa cuci + Filter Indoor & Outdoor AC" },
        { "@type": "Offer", name: "Service Cuci AC Inverter 0,5-2 PK", price: "135000", priceCurrency: "IDR", description: "Jasa cuci + Filter Indoor & Outdoor AC Inverter" },
        { "@type": "Offer", name: "Tambah Freon R22 0,5-1 PK", price: "250000", priceCurrency: "IDR", description: "Termasuk jasa & sparepart" },
        { "@type": "Offer", name: "Tambah Freon R22 1,5-2 PK", price: "300000", priceCurrency: "IDR", description: "Termasuk jasa & sparepart" },
        { "@type": "Offer", name: "Isi Freon R32/R410 0,5-1 PK", price: "350000", priceCurrency: "IDR", description: "Termasuk jasa & sparepart" },
        { "@type": "Offer", name: "Isi Freon R32/R410 1,5-2 PK", price: "450000", priceCurrency: "IDR", description: "Termasuk jasa & sparepart" },
        { "@type": "Offer", name: "Bongkar AC", price: "250000", priceCurrency: "IDR", description: "Hanya jasa bongkar" },
        { "@type": "Offer", name: "Pasang AC 0,5-1 PK", price: "425000", priceCurrency: "IDR", description: "Jasa pasang, belum termasuk material" },
        { "@type": "Offer", name: "Bongkar Pasang AC 0,5-1 PK", price: "550000", priceCurrency: "IDR", description: "Jasa bongkar pasang, belum termasuk material" },
        { "@type": "Offer", name: "Bongkar Pasang AC 1,5-2 PK", price: "650000", priceCurrency: "IDR", description: "Jasa bongkar pasang, belum termasuk material" },
        { "@type": "Offer", name: "Penggantian Kapasitor 0,5-1 PK", price: "375000", priceCurrency: "IDR", description: "Termasuk jasa dan sparepart" },
        { "@type": "Offer", name: "Vacum dan Flushing", price: "475000", priceCurrency: "IDR", description: "Termasuk jasa dan sparepart" },
        { "@type": "Offer", name: "Overhaul AC", price: "475000", priceCurrency: "IDR", description: "Termasuk jasa dan sparepart" },
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
          name: "Daftar Harga",
          item: `${siteUrl}/pricing`,
        },
      ],
    },
  ],
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/pricing", text: "Daftar Harga" },
  ];
  return (
    <>
      {/* JSON-LD for Pricing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <HeroSub
        title="Daftar Harga"
        description="Harga transparan dan kompetitif untuk semua layanan service AC. Tanpa biaya tersembunyi."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Pricing />
    </>
  );
};

export default page;
