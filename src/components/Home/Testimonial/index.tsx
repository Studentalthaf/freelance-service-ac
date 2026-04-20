"use client";
import React from "react";
import Image from "next/image";
import { testimonialsRow1, testimonialsRow2 } from "@/app/api/data";

const Testimonial = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-[#001f3f] pt-12 md:pt-16 pb-8 md:pb-12">
      {/* Inline Styles for Animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scroll-left 35s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scroll-right 35s linear infinite;
        }
        .animate-scroll-left:hover, .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
         

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            Apa kata pelanggan kami
          </h2>

        </div>
      </div>

      {/* Marquee Rows */}
      <div className="w-full relative pt-2 pb-0">
        {/* Gradients for fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-[#001f3f] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-[#001f3f] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Moves Left */}
        <div className="mb-4 overflow-hidden">
          <div className="animate-scroll-left">
            {/* Multiply the list to ensure screen coverage for infinite loop illusion */}
            {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="w-[280px] md:w-[350px] flex-shrink-0 mx-2 bg-white dark:bg-[#1D2144] border border-gray-100 dark:border-white/5 shadow-sm rounded-xl p-5 hover:shadow-md dark:hover:shadow-white/5 transition-shadow duration-300"
              >
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center mt-auto pt-3 border-t border-gray-50 dark:border-white/5">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold uppercase mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="overflow-hidden mb-0 pb-0">
          <div className="animate-scroll-right">
            {/* Multiply the list to ensure screen coverage for infinite loop illusion */}
            {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="w-[280px] md:w-[350px] flex-shrink-0 mx-2 bg-white dark:bg-[#1D2144] border border-gray-100 dark:border-white/5 shadow-sm rounded-xl p-5 hover:shadow-md dark:hover:shadow-white/5 transition-shadow duration-300"
              >
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center mt-auto pt-3 border-t border-gray-50 dark:border-white/5">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400 text-sm font-bold uppercase mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;