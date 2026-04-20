"use client";
import React, { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    id: 1,
    question: "Teknisi Profesional & Berpengalaman",
    answer: "Tim kami terdiri dari tenaga ahli handal yang telah berpengalaman bertahun-tahun dalam menangani berbagai masalah dan merek AC.",
  },
  {
    id: 2,
    question: "Pelayanan Cepat & Tepat Waktu",
    answer: "Kami sangat menghargai waktu Anda. Teknisi kami selalu berkomitmen untuk datang tepat waktu dan menyelesaikan perbaikan secara efisien.",
  },
  {
    id: 3,
    question: "Harga Transparan & Bergaransi",
    answer: "Tidak ada biaya tersembunyi. Kami memberikan estimasi biaya pemeriksaan di awal secara jelas beserta garansi pasca perbaikan.",
  },
];

const WhyUs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-16 md:pb-20 md:pt-20">
      {/* Background Image for the whole section */}
      <div className="absolute inset-0 z-[-1] h-full w-full">
        <Image
          src="/images/why-us/why-us.webp"
          alt="Why Choose Us Background"
          fill
          className="object-cover object-center bg-gray-900 opacity-60"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[40px] bg-white/80 dark:bg-black/60 backdrop-blur-md p-8 md:p-12 lg:p-16 text-gray-900 dark:text-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-2xl border border-white/50 dark:border-gray-600/30 transition-colors duration-300">
          
          <div className="flex flex-wrap items-center -mx-4 relative z-10">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
              <div className="relative max-w-[500px]">
                <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-8">
                  Kenapa <br /> Pilih Kami?
                </h2>
                
                {/* Decorative image inside the card */}
                <div className="relative w-full max-w-[320px] h-[220px] rounded-lg overflow-hidden transform -rotate-6 shadow-2xl border-4 border-white/70 dark:border-white/10">
                  <Image
                    src="/images/why-us/why-us.webp"
                    alt="Why Choose Us Highlight"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 px-4">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-gray-800 dark:text-white">
                Solusi Cerdas Untuk Kesejukan Ruangan Anda.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm md:text-base leading-relaxed max-w-[450px]">
                Kami paham betapa pentingnya sirkulasi udara dingin dan bersih bagi kenyamanan sehari-hari Anda. Pelayanan profesional kami diformulasikan demi menjamin pendingin ruangan Anda kembali beroperasi secara optimal.
              </p>

              {/* Accordion / FAQ section */}
              <div className="space-y-4 max-w-[500px]">
                {faqData.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="border-b border-gray-200 dark:border-gray-600/50 pb-4"
                  >
                    <button
                      className="flex w-full items-center justify-between text-left focus:outline-none group"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h4 className="text-lg md:text-xl font-medium group-hover:text-blue-600 dark:group-hover:text-primary transition-colors text-gray-900 dark:text-white">
                        {item.id}. {item.question}
                      </h4>
                      <span className={`transform transition-transform duration-300 text-gray-600 dark:text-gray-300 ${openIndex === index ? "rotate-180" : ""}`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 8L10 13L5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? "max-h-[200px] pt-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base pr-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
