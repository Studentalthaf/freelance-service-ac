"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const CustomerService = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  return (
    <section className="dark:bg-darkmode py-10 px-4 md:px-8" ref={ref}>
      <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) mx-auto">
        <motion.div
           {...TopAnimation}
           className="relative w-full h-[650px] md:h-[600px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-xl"
        >
          {/* Main Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact-page/contact.webp"
              alt="Layanan Customer Service"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
          </div>

          {/* Glassmorphism Card */}
          <div className="relative z-10 w-full h-full p-4 md:p-8 lg:p-12 flex items-end md:items-center">
            <motion.div 
              {...leftAnimation}
              className="w-full max-w-3xl backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-white/20 shadow-2xl rounded-3xl p-6 md:p-8 lg:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight max-w-lg">
                  Butuh Bantuan Cepat? <br /> Hubungi Kami
                </h2>

                <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-3 py-1.5 rounded-full backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-white tracking-wide">Online 24/7</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-8 mb-8 gap-6">
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl font-light">
                  Layanan pelanggan kami siap sedia menjawab pertanyaan Anda dan mengatur penjadwalan kunjungan teknisi langsung ke lokasi secara instan, transparan, dan profesional.
                </p>

                {/* Overlapping Avatars Mimic */}
                <div className="flex -space-x-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden bg-gray-300">
                    <Image src="/images/search/profile.png" alt="CS" width={48} height={48} className="object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden bg-gray-400">
                    <Image src="/images/search/profile.png" alt="CS" width={48} height={48} className="object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center bg-primary text-white text-xs font-bold backdrop-blur-md">
                    <Icon icon="solar:chat-line-bold" width="20" height="20" />
                  </div>
                </div>
              </div>

              {/* Grid 3 Columns Stats / Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">&lt; 5 <span className="text-lg font-medium text-white/70">Min</span></h3>
                  <p className="text-xs md:text-sm text-white/70 font-light border-l-2 border-green-400 pl-3">
                    Respon super cepat dari admin untuk keluhan Anda
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Rp 0</h3>
                  <p className="text-xs md:text-sm text-white/70 font-light border-l-2 border-blue-400 pl-3">
                    Konsultasi awal kerusakan AC bebas biaya
                  </p>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Link
                    href="https://wa.me/6281234567890?text=Halo%20saya%20butuh%20bantuan%20terkait%20servis%20AC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold h-12 md:h-full w-full rounded-xl hover:bg-[#20bd5a] transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                      <div className="relative h-full w-8 bg-white/20"></div>
                    </div>
                    <Icon icon="logos:whatsapp-icon" width="20" height="20" />
                    Hubungi via WhatsApp
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerService;
