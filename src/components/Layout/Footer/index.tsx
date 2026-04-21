import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="pt-8 bg-midnight_text relative">
      <div className="container mx-auto px-4 lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-dark_border pb-14 mb-8 pt-8">
          
          {/* Company Info */}
          <div className="md:col-span-5 col-span-12 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-4">Alfaro Jaya Teknik</h3>
            <p className="text-foottext text-16 mb-6 max-w-sm">
              Layanan profesional jasa cuci, bongkar pasang, dan perbaikan AC terbaik dan terpercaya di Surabaya.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center text-foottext text-16">
                <Icon icon="weui:location-outlined" className="w-6 h-6 mr-3 text-primary" />
                <span>Surabaya, Jawa Timur</span>
              </div>
              <div className="flex items-center text-foottext text-16">
                <Icon icon="majesticons:phone-retro-line" className="w-6 h-6 mr-3 text-primary" />
                <Link href="https://wa.me/6281556442718" target="_blank" className="hover:text-primary">
                  +62 815-5644-2718
                </Link>
              </div>
            </div>
            {/* Socials */}
            <div className="flex gap-4 mt-8">
              <Link href="#" className="text-muted hover:text-primary transition-colors">
                <Icon icon="fe:facebook" width="28" height="28" />
              </Link>
              <Link href="#" className="text-muted hover:text-primary transition-colors">
                <Icon icon="mdi:instagram" width="28" height="28" />
              </Link>
              <Link href="https://wa.me/6281556442718" target="_blank" className="text-muted hover:text-primary transition-colors">
                <Icon icon="mdi:whatsapp" width="28" height="28" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 col-span-6 mb-4 md:mb-0 md:ml-auto">
            <h4 className="text-18 text-white font-bold mb-4">Tautan Cepat</h4>
            <ul>
              <li className="pb-3">
                <Link href="#beranda" className="text-foottext text-16 hover:text-primary transition-colors">Beranda</Link>
              </li>
              <li className="pb-3">
                <Link href="#layanan" className="text-foottext text-16 hover:text-primary transition-colors">Layanan Kami</Link>
              </li>
              <li className="pb-3">
                <Link href="#mengapa" className="text-foottext text-16 hover:text-primary transition-colors">Mengapa Kami</Link>
              </li>
              <li className="pb-3">
                <Link href="#testimoni" className="text-foottext text-16 hover:text-primary transition-colors">Testimoni</Link>
              </li>
              <li className="pb-3">
                <Link href="#hubungi" className="text-foottext text-16 hover:text-primary transition-colors">Hubungi Kami</Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="md:col-span-4 col-span-6 mb-4 md:mb-0 md:ml-auto">
            <h4 className="text-18 text-white font-bold mb-4">Jam Operasional</h4>
            <ul className="text-foottext text-16 space-y-3">
              <li className="flex justify-between border-b border-dark_border/50 pb-2">
                <span>Senin - Jumat:</span>
                <span className="text-white">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-dark_border/50 pb-2">
                <span>Sabtu:</span>
                <span className="text-white">08:00 - 15:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Minggu & Libur:</span>
                <span className="text-white text-primary">Tutup / Janji Temu</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              *Tersedia panggilan darurat 24 jam dengan menghubungi nomor WhatsApp kami.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center sm:flex-row flex-col justify-between py-6">
          <p className="text-16 text-foottext text-center sm:text-left w-full">
            © {new Date().getFullYear()}. Hak Cipta Dilindungi oleh <span className="text-white font-medium">Alfaro Jaya Teknik</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
