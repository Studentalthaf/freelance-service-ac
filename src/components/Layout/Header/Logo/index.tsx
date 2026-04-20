import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
      <Image
        src="/images/logo/alfaro-teknisi.webp"
        alt="Alfaro Jaya Teknik Logo"
        width={160}
        height={50}
        quality={100}
        className="w-28 md:w-32 lg:w-40 h-auto object-contain dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
      />
    </Link>
  );
};

export default Logo;
