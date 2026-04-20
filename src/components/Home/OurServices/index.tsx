"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@iconify/react";
import { servicesData, categories } from '@/app/api/data';

// Helper for parsing prices string like "Rp 300.000" into actual Number 300000
const parsePrice = (priceStr: string) => {
  if (!priceStr) return 0;
  return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
};

// Helper for formatting Number 300000 back to "Rp 300.000"
const formatPrice = (price: number) => {
  return "Rp " + price.toLocaleString('id-ID');
};

const OurServices = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayCount, setDisplayCount] = useState(6);

  // Modal States
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [formData, setFormData] = useState({ name: "", address: "" });
  const [cooldown, setCooldown] = useState(0); // State untuk cooldown Anti-Spam WA
  const [phoneError, setPhoneError] = useState(""); // Error Nomor HP Dummy

  // Effect Untuk Anti-Spam Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const filteredServices = servicesData.filter(service => 
    activeCategory === "All" ? true : service.category === activeCategory
  );

  const displayedServices = filteredServices.slice(0, displayCount);

  // Reset display count when category changes
  useEffect(() => {
    setDisplayCount(6);
  }, [activeCategory]);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  // --- Modal Logic ---
  const openModal = (service: any) => {
    setSelectedService(service);
    setQty(1);
    setFormData({ name: "", address: "" });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 300); // give time for exit animation
  };

  const handleOrderWhatsApp = () => {
    if (cooldown > 0) {
      alert(`Mohon tunggu ${cooldown} detik sebelum memesan layanan lagi!`);
      return;
    }

    if (!selectedService || !formData.name || !formData.address) {
      alert("Harap lengkapi nama dan alamat Anda terlebih dahulu!");
      return;
    }

    const basePrice = parsePrice(selectedService.price);
    const totalPrice = basePrice * qty;
    
    // The target WhatsApp number
    const waNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Service AC Merek Anda sebenarnya!

    const message = `Halo Admin, saya ingin memesan layanan Service AC:
    
*Layanan:* ${selectedService.title}
*Kategori:* ${selectedService.category}
*Harga Satuan:* ${selectedService.price}
*Jumlah (Qty):* ${qty}
*Total Harga:* ${formatPrice(totalPrice)}

*Data Pemesan:*
*Nama:* ${formData.name}
*Alamat Lengkap:* ${formData.address}

Mohon informasi lebih lanjut. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    // Set cooldown Anti-Spam (misal 60 detik)
    setCooldown(60); 

    // Buka WhatsApp Web/App di tab baru
    window.open(waLink, "_blank");
  };

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-[#001f3f]">
      
      {/* Wavy Background Transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[30px] md:h-[50px] lg:h-[70px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.23,24.12,143.6,41.97,214.34,50.14h0C250.1,54.34,285.83,57.16,321.39,56.44Z" className="fill-gray-50 dark:fill-[#001f3f]"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Semua Layanan Kami
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                  ${activeCategory === category 
                    ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                    : "bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.1 }}
              className="group relative bg-white dark:bg-gray-800/50 rounded-[32px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] dark:shadow-none dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-gray-100/80 dark:border-gray-700/50"
            >
              {/* Image Section */}
              <div className="relative w-full h-[260px] p-4 pb-0">
                <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Text & Action Section */}
              <div className="relative bg-white dark:bg-gray-900 mt-6 p-6 md:p-8 rounded-t-[32px] shadow-[0_-4px_20px_rgba(0,0,0,0.02)] dark:shadow-none flex items-end justify-between">
                
                {/* Info */}
                <div className="flex-1 pr-6">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">{service.category}</p>
                  <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-bold mb-3 line-clamp-2 min-h-[56px] leading-snug">{service.title}</h3>
                  <div className="font-extrabold text-blue-600 dark:text-blue-400 text-xl">
                    {service.price}
                  </div>
                </div>
                
                {/* Action Button - Floating positioned on the joint */}
                <button 
                  onClick={() => openModal(service)}
                  className="absolute -top-6 right-6 md:right-8 px-5 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center space-x-2 transition-all duration-300 transform group-hover:scale-105 shadow-xl group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_10px_20px_rgba(255,255,255,0.15)] z-10"
                >
                  <span className="text-xs font-bold uppercase tracking-wider">Selengkapnya</span>
                  <Icon icon="solar:arrow-right-up-linear" className="text-lg group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Pagination */}
        {filteredServices.length > displayCount && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center space-x-3 group"
            >
              <span>Tampilkan Lebih Banyak</span>
              <Icon icon="solar:alt-arrow-down-linear" className="text-xl group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        )}

      </div>

      {/* --- Modal Pop Up untuk Booking / Form Service --- */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <>
            {/* Backdrop / Overlay Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center cursor-pointer"
              onClick={closeModal}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-3xl z-[101] shadow-2xl overflow-hidden custom-scrollbar"
            >
              {/* Close Button X */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 backdrop-blur-md dark:bg-black/50 text-gray-800 dark:text-white rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Batal"
              >
                <Icon icon="solar:close-circle-linear" className="text-2xl" />
              </button>

              {/* Cover Image */}
              <div className="relative w-full h-[200px] md:h-[220px] bg-gray-200 dark:bg-gray-700">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">{selectedService.category}</span>
                  <h2 className="text-2xl text-white font-bold">{selectedService.title}</h2>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 pt-6 space-y-6">
                
                {/* Form Inputs */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nama Lengkap Anda <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      placeholder="Masukkan nama Anda"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Alamat Terjadinya Service <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none"
                      placeholder="Contoh: Jl. Sudirman No 12, Pintu Putih"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                    
                    {/* Quantity Control */}
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">Qty (Jumlah AC)</span>
                      <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700 w-fit">
                        <button
                          onClick={() => setQty(Math.max(1, qty - 1))}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition"
                        >
                          <Icon icon="ic:round-minus" />
                        </button>
                        <span className="w-10 text-center font-bold text-gray-900 dark:text-white text-sm">{qty}</span>
                        <button
                          onClick={() => setQty(qty + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition"
                        >
                          <Icon icon="ic:round-plus" />
                        </button>
                      </div>
                    </div>

                    {/* Total Price Calculated */}
                    <div className="text-right">
                      <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">Total Estimasi Harga</span>
                      <span className="text-xl md:text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                        {formatPrice(parsePrice(selectedService.price) * qty)}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Submit Action Block */}
                <button
                  disabled={cooldown > 0}
                  className={`w-full mt-4 flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 active:scale-95 ${
                    cooldown > 0 
                      ? "bg-gray-400 cursor-not-allowed text-gray-200 shadow-none" 
                      : "bg-[#25D366] hover:bg-[#1EBE5A] text-white shadow-green-500/30"
                  }`}
                  onClick={handleOrderWhatsApp}
                >
                  <Icon icon="ri:whatsapp-fill" className="text-2xl" />
                  <span>
                    {cooldown > 0 
                      ? `Tunggu ${cooldown} Detik...` 
                      : "Pesan Sekarang via WhatsApp"}
                  </span>
                </button>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                  Anda akan otomatis diarahkan ke aplikasi WhatsApp chat.
                </p>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
};

export default OurServices;