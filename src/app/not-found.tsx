import NotFound from "@/components/NotFound";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  description: "Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Alfaro Jaya Teknik.",
  robots: {
    index: false,
    follow: false,
  },
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/404", text: "404" },
  ];
  return (
    <>
      <HeroSub
        title="404"
        description="Halaman yang Anda cari tidak ditemukan. Silakan kembali ke beranda."
        breadcrumbLinks={breadcrumbLinks}
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
