import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/services" },
  { label: "Harga", href: "/pricing" },
  {
    label: "Artikel",
    href: "#",
    submenu: [
      { label: "Daftar Artikel", href: "/blog" },
      { label: "Tips & Trik AC", href: "/blog" },
    ],
  },
  { label: "Hubungi Kami", href: "/contact" },
];
