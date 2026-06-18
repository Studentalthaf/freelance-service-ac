import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog & Tips AC",
  description:
    "Baca artikel tips perawatan AC, cara hemat listrik, dan panduan memilih AC yang tepat dari Alfaro Jaya Teknik Surabaya.",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];
  return (
    <>
      <HeroSub
        title="Blog"
         description=""
        breadcrumbLinks={breadcrumbLinks}  
         />
      <BlogList />
    </>
  );
};

export default Page;
