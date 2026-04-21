import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import ServicesBento from "@/components/Home/ServicesBento";
import Testimonial from "@/components/Home/Testimonial";
import ContactMe from "@/components/Home/ContactMe";
import OurServices from "@/components/Home/OurServices";
import WhyUs from "@/components/Home/WhyUs";
import StickyBanner from "@/components/Home/StickyBanner";

export const metadata: Metadata = {
  title: "Alfaro Jaya Teknik - Jasa Perbaikan AC Berkualitas di Surabaya",
  description: "Layanan jasa cuci, bongkar pasang, dan perbaikan AC profesional, terpercaya dengan teknisi ahli. Hubungi kami untuk solusi pendingin ruangan Anda.",
  keywords: "Service AC Alfaro, Jasa Perbaikan AC Berkualitas di Surabaya, Cuci AC, Bongkar Pasang AC",
  openGraph: {
    title: "Alfaro Jaya Teknik - Jasa Perbaikan AC Berkualitas di Surabaya",
    description: "Layanan jasa cuci, bongkar pasang, dan perbaikan AC profesional, terpercaya dengan teknisi ahli. Hubungi kami untuk solusi pendingin ruangan Anda.",
    images: [
      {
        url: "/images/hero/google.webp",
        width: 800,
        height: 600,
        alt: "Alfaro Jaya Teknik Service AC",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
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
