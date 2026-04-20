"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay antar teks (h1, p, button)
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-[110vh] flex items-center overflow-hidden pb-20">
      {/* Background Image dengan efek zooming pelan (Parallax) */}
      <motion.div 
        className="absolute inset-0 z-0 scale-110"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/hero.webp" 
          alt="Teknisi AC"
          fill
          className="object-cover object-[center_top]"
          priority
        />
        {/* Gradient Overlay (Transparan dikit seperti di referensi) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1627]/95 via-[#0d1627]/70 to-transparent z-10"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-8 relative z-20 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div 
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
              Service AC <br />
              Alfaro Jaya <br />
              Teknik
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-white/80 md:text-xl font-light mb-10 max-w-xl leading-relaxed">
              Kami menyediakan layanan perbaikan AC berkualitas tinggi untuk memastikan kenyamanan Anda. Dengan tim teknisi berpengalaman, kami siap membantu dari perawatan rutin hingga perbaikan mendalam di Surabaya dan sekitarnya.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-white text-gray-900 font-medium py-3.5 px-8 rounded-full hover:-translate-y-1 hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
              >
                Let's Talk Alfaro Jaya Teknik
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
