"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PaymentImage } from "@/app/api/data";
import Image from "next/image";

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  const bottomAnimation = (index: number) => ({
    initial: { y: 40, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 },
    transition: { duration: 0.6, delay: 0.3 + index * 0.15 },
  });

  const featureItems = [
    "Teknisi Profesional",
    "Harga Terjangkau",
    "Bergaransi",
    "Respon Cepat",
    "Suku Cadang Asli",
  ];

  return (
    <section className="dark:bg-darkmode py-20 relative overflow-hidden bg-gray-50">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 sm:px-8 relative z-10"
      >
        <motion.div {...TopAnimation} className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-midnight_text dark:text-white leading-tight">
            Kemudahan Perawatan & Perbaikan AC Anda
          </h2>
          <p className="text-lg md:text-xl text-primary font-medium mb-10">
            Layanan profesional, cepat, dan terpercaya di Jawa Timur
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
            {featureItems.map((item, index) => (
              <span
                key={index}
                className="bg-white dark:bg-midnight_text shadow-sm border border-gray-100 dark:border-gray-800 px-5 py-2.5 rounded-full text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 sm:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {PaymentImage.map((item, index) => (
              <motion.div key={index} {...bottomAnimation(index)}>
                <div className="bg-white dark:bg-[#1a2332] p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-gray-100 dark:border-gray-800/60 h-full transition-transform duration-300 hover:-translate-y-2 group">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={item.lightimage}
                      alt={`Feature: ${item.title}`}
                      width={32}
                      height={32}
                      className="dark:hidden object-contain"
                    />
                    <Image
                      src={item.darkimage}
                      alt={`Feature: ${item.title}`}
                      width={32}
                      height={32}
                      className="hidden dark:block object-contain"
                    />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-midnight_text dark:text-white mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
