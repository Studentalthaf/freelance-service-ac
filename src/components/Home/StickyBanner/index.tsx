"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";
import { getWhatsAppLink, getConsultationMessage } from '@/app/api/data';

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Munculkan banner setelah scroll sedikit agar tidak langsung menutup konten header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden pointer-events-none"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-gray-800 p-4 relative pointer-events-auto overflow-hidden">
            
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>

            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded-full transition-colors z-10"
            >
              <Icon icon="solar:close-circle-bold" className="text-xl" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center">
                <Icon icon="solar:phone-calling-bold-duotone" className="text-2xl" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5 line-clamp-1">
                  Mau Konsultasi Dulu?
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                  Tanya teknisi kami secara gratis!
                </p>
              </div>
            </div>

            <a 
              href={getWhatsAppLink(getConsultationMessage())} 
              target="_blank" 
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:bg-green-600 active:scale-95"
            >
              <Icon icon="mdi:whatsapp" className="text-xl" />
              Chat via WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBanner;