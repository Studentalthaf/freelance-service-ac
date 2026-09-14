import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alfarojayateknik.com";

export const metadata: Metadata = {
  title: "Blog & Tips Perawatan AC - Panduan Lengkap dari Ahli",
  description:
    "Baca artikel tips perawatan AC, cara hemat listrik, panduan memilih AC yang tepat, dan solusi masalah AC dari teknisi ahli Alfaro Jaya Teknik Surabaya. Update rutin setiap minggu.",
  keywords:
    "tips perawatan AC, cara merawat AC, panduan AC, hemat listrik AC, masalah AC, blog AC, Alfaro Jaya Teknik blog, tips cuci AC sendiri, cara memilih AC yang bagus, AC tidak dingin solusi",
  openGraph: {
    title: "Blog & Tips Perawatan AC - Alfaro Jaya Teknik",
    description:
      "Artikel tips perawatan AC, cara hemat listrik, dan panduan memilih AC dari teknisi ahli Alfaro Jaya Teknik Surabaya.",
    url: `${siteUrl}/blog`,
    images: [
      {
        url: `${siteUrl}/images/hero/google.webp`,
        width: 1200,
        height: 630,
        alt: "Blog Alfaro Jaya Teknik",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

// JSON-LD for Blog page
const blogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${siteUrl}/blog/#blog`,
      name: "Blog & Tips Perawatan AC - Alfaro Jaya Teknik",
      description: "Artikel tips perawatan AC, panduan memilih AC, dan solusi masalah AC dari teknisi ahli.",
      url: `${siteUrl}/blog`,
      publisher: {
        "@type": "Organization",
        name: "Alfaro Jaya Teknik",
        url: siteUrl,
      },
      inLanguage: "id-ID",
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
          name: "Blog",
          item: `${siteUrl}/blog`,
        },
      ],
    },
  ],
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];
  return (
    <>
      {/* JSON-LD for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <HeroSub
        title="Blog & Tips AC"
        description="Artikel dan tips perawatan AC dari teknisi ahli Alfaro Jaya Teknik. Pelajari cara merawat AC agar tetap awet dan hemat listrik."
        breadcrumbLinks={breadcrumbLinks}
      />
      <BlogList />
    </>
  );
};

export default Page;
