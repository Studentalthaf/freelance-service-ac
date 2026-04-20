"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from "motion/react";
import { Icon } from "@iconify/react";

const ContactMe = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const leftVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const rightVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-white dark:bg-darkmode overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-8 lg:max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          {/* Left Column - Text Content */}
          <motion.div 
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={leftVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <Icon icon="solar:routing-2-bold" className="text-gray-900 dark:text-white text-xl" />
                <span className="text-sm font-bold tracking-wider uppercase text-gray-900 dark:text-white">
                  HUBUNGI KAMI
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Butuh Bantuan Layanan AC?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6 max-w-2xl">
                Hubungi kami dengan menekan tombol WA berikut untuk mendapatkan solusi dan layanan terbaik kami.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 mb-4 text-base font-bold text-white transition-all bg-green-500 rounded-xl hover:bg-green-600 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <Icon icon="mdi:whatsapp" className="text-2xl" />
                Chat WhatsApp Sekarang
              </a>
            </motion.div>

            {/* Feature Cards Grid */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                  <Icon icon="solar:box-minimalistic-bold" className="text-2xl" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Proses Mudah</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Tim kami berkomitmen menggunakan standar kualitas pekerjaan tertinggi.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={cardVariants} className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow relative z-10 md:-mt-4">
                <div className="w-14 h-14 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                  <Icon icon="solar:wallet-money-bold" className="text-2xl" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Hemat Biaya</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Kami selalu memastikan layanan kami terjangkau dan efisien untuk Anda.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                  <Icon icon="solar:shield-check-bold" className="text-2xl" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Keamanan Tinggi</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Tim profesional kami bekerja dengan aman dan dapat diandalkan sepenuhnya.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Images Layout (Two vertical overlapping images) */}
          <motion.div 
            className="flex-1 relative w-full lg:min-w-[400px] xl:min-w-[500px] hidden lg:block"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={rightVariants}
          >
            <div className="flex flex-row gap-4 h-full relative" style={{ minHeight: '500px' }}>
              {/* Image Left */}
              <div 
                className="w-1/2 relative h-[80%] my-auto mt-auto mb-0 rounded-2xl overflow-hidden shadow-lg z-10 hidden sm:block"
                style={{ borderBottomLeftRadius: '100px' }}
              >
                <Image 
                  src="/images/contact-us/1212.webp" 
                  alt="Technician working" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Image Right (Taller, slightly offset) */}
              <div 
                className="w-full sm:w-[60%] absolute right-0 top-0 h-[90%] rounded-2xl md:rounded-bl-none overflow-hidden shadow-lg" 
                style={{ borderTopRightRadius: '100px' }}
              >
                 <Image 
                  src="/images/contact-us/cuci.webp" 
                  alt="Technician inspecting" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;