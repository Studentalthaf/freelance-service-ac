import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alfarojayateknik.com";

export const metadata: Metadata = {
  title: "Hubungi Kami - Konsultasi & Pesan Service AC Surabaya",
  description:
    "Hubungi Alfaro Jaya Teknik untuk konsultasi gratis dan pemesanan jasa service AC di Surabaya, Gresik, Sidoarjo. Respon cepat via WhatsApp +62 877-6802-7765. Teknisi profesional siap datang ke lokasi Anda.",
  keywords:
    "hubungi Alfaro Jaya Teknik, kontak service AC Surabaya, WhatsApp service AC, konsultasi AC gratis, pesan service AC Surabaya, telepon tukang AC Surabaya, nomor teknisi AC Surabaya Gresik Sidoarjo",
  openGraph: {
    title: "Hubungi Alfaro Jaya Teknik - Service AC Surabaya",
    description:
      "Konsultasi gratis dan pemesanan jasa service AC. Respon cepat via WhatsApp. Melayani Surabaya, Gresik, Sidoarjo.",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/images/hero/google.webp`,
        width: 1200,
        height: 630,
        alt: "Hubungi Alfaro Jaya Teknik",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

// JSON-LD for Contact page
const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${siteUrl}/contact/#contactpage`,
      name: "Hubungi Alfaro Jaya Teknik",
      description: "Halaman kontak untuk konsultasi dan pemesanan jasa service AC di Surabaya, Gresik, Sidoarjo",
      url: `${siteUrl}/contact`,
      mainEntity: {
        "@type": "HVACBusiness",
        name: "Alfaro Jaya Teknik",
        telephone: "+6287768027765",
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surabaya",
          addressRegion: "Jawa Timur",
          addressCountry: "ID",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+6287768027765",
          contactType: "customer service",
          availableLanguage: "Indonesian",
          areaServed: ["Surabaya", "Gresik", "Sidoarjo"],
        },
      },
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
          name: "Hubungi Kami",
          item: `${siteUrl}/contact`,
        },
      ],
    },
  ],
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Hubungi Kami" },
  ];
  return (
    <>
      {/* JSON-LD for Contact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <HeroSub
        title="Hubungi Kami"
        description="Konsultasi gratis seputar masalah AC Anda. Teknisi profesional siap membantu di Surabaya, Gresik, Sidoarjo dan sekitarnya."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
