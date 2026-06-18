import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import ServicesBento from "@/components/Home/ServicesBento";
import Testimonial from "@/components/Home/Testimonial";
import ContactMe from "@/components/Home/ContactMe";
import OurServices from "@/components/Home/OurServices";
import WhyUs from "@/components/Home/WhyUs";
import StickyBanner from "@/components/Home/StickyBanner";
import ServicePriceList from "@/components/Home/ServicePriceList";

export const metadata: Metadata = {
  title: "Alfaro Jaya Teknik - Jasa Service AC Profesional di Surabaya",
  description:
    "Alfaro Jaya Teknik: jasa service AC terpercaya di Surabaya. Cuci AC, isi freon, bongkar pasang, perbaikan AC semua merek (Daikin, Samsung, Sharp, LG, Panasonic, Gree). Teknisi ahli berpengalaman dengan harga transparan. Hubungi kami sekarang!",
  keywords:
    "service AC Surabaya, jasa cuci AC Surabaya, isi freon AC, bongkar pasang AC, perbaikan AC Surabaya, service AC Daikin, service AC Samsung, service AC Sharp, service AC LG, service AC Panasonic, service AC Gree, teknisi AC profesional, Alfaro Jaya Teknik, cuci AC murah, service AC terdekat Surabaya, tukang AC Surabaya, jasa AC Sidoarjo",
  openGraph: {
    title: "Alfaro Jaya Teknik - Jasa Service AC Profesional di Surabaya",
    description:
      "Layanan jasa cuci, bongkar pasang, dan perbaikan AC profesional di Surabaya. Melayani semua merek: Daikin, Samsung, Sharp, LG, Panasonic, Gree. Teknisi ahli & harga transparan.",
    url: "/",
    images: [
      {
        url: "/images/hero/google.webp",
        width: 1200,
        height: 630,
        alt: "Alfaro Jaya Teknik - Jasa Service AC Profesional Surabaya",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Alfaro Jaya Teknik",
  description:
    "Jasa service AC profesional di Surabaya. Melayani cuci AC, isi freon, bongkar pasang, dan perbaikan AC semua merek termasuk Daikin, Samsung, Sharp, LG, Panasonic, dan Gree.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  telephone: "+6287768027765",
  image: "/images/hero/google.webp",
  priceRange: "Rp 50.000 - Rp 650.000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surabaya",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.2575,
    longitude: 112.7521,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Surabaya",
    },
    {
      "@type": "City",
      name: "Sidoarjo",
    },
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
  ],
  brand: [
    { "@type": "Brand", name: "Daikin" },
    { "@type": "Brand", name: "Samsung" },
    { "@type": "Brand", name: "Sharp" },
    { "@type": "Brand", name: "LG" },
    { "@type": "Brand", name: "Panasonic" },
    { "@type": "Brand", name: "Gree" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "21:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
};

export default function Home() {
  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="beranda">
        <Hero />
      </section>

      <section id="layanan">
        <ServicesBento />
        <OurServices />
      </section>

      <section id="hubungi">
        <ContactMe />
      </section>

      <ServicePriceList />

      <section id="mengapa">
        <WhyUs />
      </section>

      <section id="testimoni">
        <Testimonial />
      </section>


      <StickyBanner />
    </main>
  );
}

