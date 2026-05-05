"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from "motion/react";
import { ServicesBentoData, getWhatsAppLink, getConsultationMessage } from '@/app/api/data';

import { Icon } from "@iconify/react";

const ServicesBento = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const popUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ServicesBentoData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === ServicesBentoData.length - 1 ? 0 : prev + 1));
  };

  // Autoplay functionality for the mobile carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === ServicesBentoData.length - 1 ? 0 : prev + 1));
    }, 4000); // Geser setiap 4 detik

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pb-20 pt-10 bg-gray-50 dark:bg-darkmode" ref={ref}>
      <motion.div 
        className="container mx-auto px-4 lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Title Section (Full Width) */}
        <motion.div variants={popUpVariants} className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-midnight_text dark:text-white mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-muted dark:text-white/70">
            Solusi lengkap untuk segala masalah pendingin ruangan Anda
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Layanan Content */}
          <div className="flex-1 w-full">
            
            {/* Desktop Grid Layout */}
            <div className="hidden sm:grid grid-cols-2 xl:grid-cols-3 auto-rows-[auto] gap-6">
              {ServicesBentoData.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={popUpVariants} 
                  className="bg-sky-50 dark:bg-sky-950/40 rounded-3xl p-6 flex flex-col justify-between shadow-sm dark:border dark:border-gray-800 h-full"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-full relative h-[160px] flex items-center justify-center mt-auto rounded-2xl overflow-hidden shrink-0">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill
                      className="object-cover" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Carousel Layout */}
            <div className="block sm:hidden w-full relative">
              <div className="flex items-center justify-between gap-4">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 shrink-0 bg-blue-600 outline-none text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
                >
                  <Icon icon="solar:double-alt-arrow-left-bold" className="text-xl" />
                </button>
                
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 bg-white dark:bg-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:border dark:border-gray-700"
                  style={{ height: '350px' }}
                >
                  <div className="w-24 h-24 relative mb-6">
                    {/* Decorative outer glow circle */}
                    <div className="absolute inset-0 border border-blue-100 dark:border-blue-900 rounded-full scale-125" />
                    <div className="absolute -left-2 top-1/2 w-4 h-4 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full blur-[2px]" />
                    <div className="absolute -right-1 bottom-1 w-3 h-3 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full blur-[1px]" />
                    
                    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full border border-blue-50 dark:border-gray-700 shadow-sm flex items-center justify-center relative z-10 overflow-hidden p-4">
                      <Image 
                        src={ServicesBentoData[currentIndex].image} 
                        alt={ServicesBentoData[currentIndex].title} 
                        fill
                        className="object-cover opacity-80" 
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-midnight_text dark:text-white mt-2">
                    {ServicesBentoData[currentIndex].title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                    {ServicesBentoData[currentIndex].description}
                  </p>
                </motion.div>

                <button 
                  onClick={handleNext}
                  className="w-10 h-10 shrink-0 bg-blue-600 outline-none text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
                >
                  <Icon icon="solar:double-alt-arrow-right-bold" className="text-xl" />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {ServicesBentoData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                  />
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Column: Sticky Sidebar Banner */}
          <div className="hidden lg:block w-full lg:w-[320px] xl:w-[380px] shrink-0 sticky top-24">
            <motion.div 
              variants={popUpVariants}
              className="bg-white dark:bg-black/40 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 dark:border-gray-800/80 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Icon icon="solar:phone-calling-bold-duotone" className="text-3xl" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                Mau Konsultasi Dulu?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                Ceritakan masalah AC Anda kepada tim teknisi kami. Layanan cepat, responsif, dan gratis konsultasi awal.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/20 text-green-500 flex items-center justify-center">
                    <Icon icon="solar:check-circle-bold" className="text-lg" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Respon Cepat 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/20 text-green-500 flex items-center justify-center">
                    <Icon icon="solar:check-circle-bold" className="text-lg" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Teknisi Berpengalaman</span>
                </div>
              </div>

              <a 
                href={getWhatsAppLink(getConsultationMessage())} 
                target="_blank" 
                rel="noreferrer"
                className="group relative flex w-full items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-semibold overflow-hidden transition-all hover:shadow-[0_8px_25px_rgba(37,211,102,0.3)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
                <Icon icon="logos:whatsapp-icon" className="text-xl" />
                Chat via WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesBento;
