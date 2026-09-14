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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alfarojayateknik.com";

export const metadata: Metadata = {
  title: "Alfaro Jaya Teknik - Jasa Service AC Murah & Profesional di Surabaya, Gresik, Sidoarjo",
  description:
    "Alfaro Jaya Teknik: jasa service AC murah dan terpercaya di Surabaya, Gresik, Sidoarjo dan sekitarnya. Cuci AC mulai Rp 75.000, isi freon, bongkar pasang AC, perbaikan AC semua merek (Daikin, Samsung, Sharp, LG, Panasonic, Gree). Teknisi ahli berpengalaman dengan harga transparan dan bergaransi. Hubungi kami sekarang!",
  keywords:
    "Alfaro Jaya Teknik, service AC Surabaya, jasa cuci AC Surabaya, service AC murah Surabaya, isi freon AC, bongkar pasang AC, perbaikan AC Surabaya, service AC Daikin, service AC Samsung, service AC Sharp, service AC LG, service AC Panasonic, service AC Gree, teknisi AC profesional, cuci AC murah, service AC terdekat Surabaya, tukang AC Surabaya, jasa AC Sidoarjo, jasa AC Gresik, service AC murah daerah Surabaya Gresik Sidoarjo, service AC panggilan Surabaya, cuci AC murah daerah Surabaya dan sekitarnya",
  openGraph: {
    title: "Alfaro Jaya Teknik - Jasa Service AC Murah & Profesional di Surabaya, Gresik, Sidoarjo",
    description:
      "Jasa service AC murah dan terpercaya. Cuci AC, bongkar pasang, isi freon, dan perbaikan AC semua merek di Surabaya, Gresik, Sidoarjo. Teknisi ahli & harga transparan mulai Rp 75.000.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/images/hero/google.webp`,
        width: 1200,
        height: 630,
        alt: "Alfaro Jaya Teknik - Jasa Service AC Profesional Surabaya Gresik Sidoarjo",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD Multi-Schema Structured Data untuk SEO maksimal
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. LocalBusiness - Schema utama bisnis lokal
    {
      "@type": "HVACBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Alfaro Jaya Teknik",
      alternateName: ["Alfaro Jaya Teknik Surabaya", "Service AC Alfaro"],
      description:
        "Alfaro Jaya Teknik adalah jasa service AC murah dan terpercaya di Surabaya, Gresik, Sidoarjo dan sekitarnya. Melayani cuci AC, isi freon, bongkar pasang, dan perbaikan AC semua merek termasuk Daikin, Samsung, Sharp, LG, Panasonic, dan Gree. Teknisi berpengalaman, harga transparan, dan bergaransi.",
      url: siteUrl,
      telephone: "+6287768027765",
      image: `${siteUrl}/images/hero/google.webp`,
      logo: `${siteUrl}/icon.png`,
      priceRange: "Rp 50.000 - Rp 650.000",
      currenciesAccepted: "IDR",
      paymentAccepted: "Cash, Transfer Bank",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Surabaya",
        addressLocality: "Surabaya",
        addressRegion: "Jawa Timur",
        postalCode: "60000",
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
          sameAs: "https://id.wikipedia.org/wiki/Kota_Surabaya",
        },
        {
          "@type": "City",
          name: "Gresik",
          sameAs: "https://id.wikipedia.org/wiki/Kabupaten_Gresik",
        },
        {
          "@type": "City",
          name: "Sidoarjo",
          sameAs: "https://id.wikipedia.org/wiki/Kabupaten_Sidoarjo",
        },
        {
          "@type": "City",
          name: "Lamongan",
        },
        {
          "@type": "City",
          name: "Mojokerto",
        },
        {
          "@type": "City",
          name: "Bangkalan",
        },
        {
          "@type": "State",
          name: "Jawa Timur",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Service AC Alfaro Jaya Teknik",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Service Cuci AC",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Service Cuci AC 0,5 PK - 1 PK",
                  description: "Jasa cuci AC 0.5 - 1 PK termasuk filter indoor & outdoor",
                },
                price: "75000",
                priceCurrency: "IDR",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Service Cuci AC 1,5 PK - 2 PK",
                  description: "Jasa cuci AC 1.5 - 2 PK termasuk filter indoor & outdoor",
                },
                price: "85000",
                priceCurrency: "IDR",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Service Cuci AC Inverter 0,5 - 2 PK",
                  description: "Jasa cuci AC Inverter 0.5 - 2 PK termasuk filter indoor & outdoor",
                },
                price: "135000",
                priceCurrency: "IDR",
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Isi & Tambah Freon AC",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Tambah Freon R22 0,5-1 PK",
                  description: "Biaya sudah termasuk jasa & sparepart",
                },
                price: "250000",
                priceCurrency: "IDR",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Isi Freon R32/R410 0,5-1 PK",
                  description: "Biaya sudah termasuk jasa & sparepart",
                },
                price: "350000",
                priceCurrency: "IDR",
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Bongkar Pasang AC",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Bongkar Pasang AC 0,5-1 PK",
                  description: "Jasa bongkar pasang, belum termasuk material",
                },
                price: "550000",
                priceCurrency: "IDR",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Bongkar Pasang AC 1,5-2 PK",
                  description: "Jasa bongkar pasang, belum termasuk material",
                },
                price: "650000",
                priceCurrency: "IDR",
              },
            ],
          },
        ],
      },
      brand: [
        { "@type": "Brand", name: "Daikin" },
        { "@type": "Brand", name: "Samsung" },
        { "@type": "Brand", name: "Sharp" },
        { "@type": "Brand", name: "LG" },
        { "@type": "Brand", name: "Panasonic" },
        { "@type": "Brand", name: "Gree" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "08:00",
          closes: "15:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "200",
        reviewCount: "150",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Budi Santoso" },
          datePublished: "2025-08-15",
          reviewBody: "AC di rumah tiba-tiba panas dan bocor. Panggil jasa dari sini, teknisi datang cepat, langsung dicek dan diperbaiki. Sekarang AC saya sedingin es lagi!",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Siti Aminah" },
          datePublished: "2025-07-20",
          reviewBody: "Pengerjaannya sangat rapi dan profesional. Teknisi tidak asal bongkar, tapi dicari dulu sumber masalahnya. Harga perbaikan juga transparan sejak awal.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Hendra Wijaya" },
          datePublished: "2025-06-10",
          reviewBody: "Langganan service cuci AC rutin di sini. Selalu tepat waktu dan mesin AC tetap awet. Pelayanan customer service-nya juga ramah banget.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Johan Setiawan" },
          datePublished: "2025-05-05",
          reviewBody: "Sangat puas dengan hasilnya. Freon diisi sesuai takaran, tekanan dicek dengan teliti. Angin AC tidak bau lagi dan hembusannya kencang.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
      ],
      sameAs: [],
    },
    // 2. WebSite schema - untuk Google Sitelinks Search Box
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Alfaro Jaya Teknik",
      description: "Jasa Service AC Murah dan Terpercaya di Surabaya, Gresik, Sidoarjo",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
      inLanguage: "id-ID",
    },
    // 3. WebPage schema
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Alfaro Jaya Teknik - Jasa Service AC Murah & Profesional Surabaya, Gresik, Sidoarjo",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#business`,
      },
      description:
        "Alfaro Jaya Teknik menyediakan jasa service AC murah dan terpercaya di Surabaya, Gresik, Sidoarjo. Cuci AC, isi freon, bongkar pasang, perbaikan AC semua merek.",
      inLanguage: "id-ID",
    },
    // 4. FAQPage schema - dari FAQ di WhyUs component
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Mengapa memilih Alfaro Jaya Teknik untuk service AC di Surabaya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alfaro Jaya Teknik memiliki teknisi profesional dan berpengalaman bertahun-tahun dalam menangani berbagai masalah dan merek AC. Kami menawarkan harga transparan tanpa biaya tersembunyi, pelayanan cepat dan tepat waktu, serta garansi pasca perbaikan di area Surabaya, Gresik, dan Sidoarjo.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa harga service cuci AC di Alfaro Jaya Teknik?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Harga service cuci AC di Alfaro Jaya Teknik mulai dari Rp 75.000 untuk AC 0,5-1 PK, Rp 85.000 untuk AC 1,5-2 PK, dan Rp 135.000 untuk AC Inverter 0,5-2 PK. Harga sudah termasuk cuci filter indoor & outdoor.",
          },
        },
        {
          "@type": "Question",
          name: "Apa saja area layanan service AC Alfaro Jaya Teknik?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alfaro Jaya Teknik melayani service AC di Surabaya (Barat, Timur, Selatan, Utara), Gresik, Sidoarjo, Lamongan, Mojokerto, Bangkalan dan sekitarnya di wilayah Jawa Timur.",
          },
        },
        {
          "@type": "Question",
          name: "Merek AC apa saja yang dilayani oleh Alfaro Jaya Teknik?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alfaro Jaya Teknik melayani service AC semua merek termasuk Daikin, Samsung, Sharp, LG, Panasonic, dan Gree. Baik tipe standard maupun inverter.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana cara memesan service AC di Alfaro Jaya Teknik?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anda bisa memesan service AC melalui WhatsApp di nomor +62 877-6802-7765 atau langsung melalui website kami di alfarojayateknik.com. Pilih layanan yang dibutuhkan, isi data diri, dan teknisi kami akan segera menghubungi Anda.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa harga isi freon AC di Surabaya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Harga isi freon AC di Alfaro Jaya Teknik: Tambah freon R22 mulai Rp 250.000, Isi freon R32/R410 mulai Rp 350.000. Biaya sudah termasuk jasa dan sparepart.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa harga bongkar pasang AC di Surabaya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Harga bongkar pasang AC di Alfaro Jaya Teknik: Bongkar AC Rp 250.000, Pasang AC mulai Rp 425.000, Bongkar Pasang AC mulai Rp 550.000. Hanya jasa, belum termasuk material.",
          },
        },
      ],
    },
    // 5. BreadcrumbList schema
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: siteUrl,
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main>
      {/* JSON-LD Multi-Schema Structured Data */}
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
