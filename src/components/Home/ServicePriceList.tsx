"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { servicesData, SupportedBrandsData } from "@/app/api/data";

const ServicePriceList = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });

  const brandsRef = useRef(null);
  const brandsInView = useInView(brandsRef, { amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };



  return (
    <section className="bg-white dark:bg-darkmode py-24 overflow-hidden" id="daftar-harga" ref={ref}>
      <div className="container mx-auto px-4 sm:px-8 lg:max-w-7xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Icon icon="solar:tag-price-bold" className="text-gray-900 dark:text-white text-xl" />
            <span className="text-sm font-bold tracking-wider uppercase text-gray-900 dark:text-white">
              DAFTAR HARGA
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Pricelist Layanan Kami
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mx-auto max-w-2xl">
            Harga transparan dan kompetitif untuk semua jenis kebutuhan perawatan AC Anda.
          </p>
        </motion.div>

        <motion.div 
          className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/40 shadow-xl"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
                    Layanan & Detail
                  </th>
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 text-right">
                    Harga
                  </th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service) => (
                  <motion.tr 
                    key={service.id} 
                    variants={itemVariants}
                    className="group hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
                  >
                    <td className="px-6 py-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </span>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                            {service.category}
                          </span>
                          {service.description && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {service.description}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right align-middle font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
                      {service.price}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <Icon icon="solar:info-circle-bold" className="text-lg" />
            * Harga dapat berubah sewaktu-waktu tergantung pada kondisi di lapangan.
          </p>
        </motion.div>

        {/* Supported Brands Section - Infinite Marquee */}
        <motion.div
          ref={brandsRef}
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={brandsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="mb-10 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Brand Pendukung
            </h3>
          </div>

          {/* Marquee Carousel */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-darkmode to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-darkmode to-transparent pointer-events-none" />

            {/* Scrolling track */}
            <div className="brand-marquee-track">
              {/* Render 3 copies for seamless infinite loop */}
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="brand-marquee-set">
                  {SupportedBrandsData.map((brand) => (
                    <div
                      key={`${setIndex}-${brand.id}`}
                      className="brand-marquee-item"
                    >
                      <Image
                        src={brand.logo}
                        alt={`Logo ${brand.name}`}
                        width={160}
                        height={60}
                        className="max-h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0 dark:hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ServicePriceList;

