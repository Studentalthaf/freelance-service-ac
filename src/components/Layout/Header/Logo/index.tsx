"use client";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="inline-flex items-center transition-all hover:scale-105 duration-300">
      <Image
        src="/images/logo/alfaro-teknisi.webp"
        alt="Alfaro Jaya Teknik Logo"
        width={120}
        height={40}
        quality={100}
        className="w-20 md:w-22 h-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
