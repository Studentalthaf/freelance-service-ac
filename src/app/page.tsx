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
  title: "service-ac - Jasa Perbaikan AC Berkualitas di Surabaya",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesBento />
      <ContactMe />
      <OurServices />
      <WhyUs />

      <Testimonial />
      <StickyBanner />
    </main>
  );
}
