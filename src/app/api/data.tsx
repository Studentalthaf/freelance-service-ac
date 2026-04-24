import { text } from "stream/consumers";

// WhatsApp Configuration
export const WHATSAPP_NUMBER = "6281556442718";
// 6287768027765
export const getWhatsAppLink = (message?: string) => {
  if (message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}`;
};

// Template pesan untuk konsultasi di Sticky Banner, Contact Me, dll
export const getConsultationMessage = () => {
  return "Halo Admin, saya ingin konsultasi mengenai masalah AC saya. Apakah bisa dibantu?";
};

export const generateOrderMessage = (
  serviceTitle: string,
  category: string,
  price: string,
  qty: number,
  totalPrice: string,
  name: string,
  address: string
) => {
  return `Halo Admin, saya ingin memesan layanan Service AC:
    
*Layanan:* ${serviceTitle}
*Kategori:* ${category}
*Harga Satuan:* ${price}
*Jumlah (Qty):* ${qty}
*Total Harga:* ${totalPrice}

*Data Pemesan:*
*Nama:* ${name}
*Alamat Lengkap:* ${address}

Mohon informasi lebih lanjut. Terima kasih!`;
};

//hero
export const Heroimage = [
  {
    lightimage: "/images/hero/google.webp",
    darkimage: "/images/hero/google_white.webp",
  },
  {
    lightimage: "/images/hero/pay.webp",
    darkimage: "/images/hero/pay_white.webp",
  },
  {
    lightimage: "/images/hero/stripe.webp",
    darkimage: "/images/hero/stripe_white.webp",
  },
  {
    lightimage: "/images/hero/wise.webp",
    darkimage: "/images/hero/wise_white.webp",
  },
];

// payment
export const PaymentImage = [
  {
    title: "Layanan 24 Jam",
    details: "Siap melayani kapanpun Anda butuhkan.",
    lightimage: "/images/hero/google.webp",
    darkimage: "/images/hero/google_white.webp",
  },
  {
    title: "Teknisi Ahli",
    details: "Dikerjakan oleh teknisi berpengalaman.",
    lightimage: "/images/hero/pay.webp",
    darkimage: "/images/hero/pay_white.webp",
  },
  {
    title: "Harga Jujur",
    details: "Transparan dan tanpa biaya tersembunyi.",
    lightimage: "/images/hero/stripe.webp",
    darkimage: "/images/hero/stripe_white.webp",
  },
];


// Services Bento
export const ServicesBentoData = [
  {
    id: 1,
    title: "Cuci & Perawatan AC",
    description: "Jadwalkan perawatan rutin untuk menjaga kualitas udara dan suhu ruangan.",
    image: "/images/layanan-teknis/pengecekan_ac.webp"
  },
  {
    id: 2,
    title: "Bongkar Pasang AC",
    description: "Tim ahli siap membantu pemindahan dan pemasangan AC dengan standar pabrik.",
    image: "/images/layanan-teknis/bongkar_pasang_ac.webp",
  },
  {
    id: 3,
    title: "Perbaikan Kapasitor",
    description: "Layanan perbaikan masalah kapasitor agar kompresor kembali menyala normal.",
    image: "/images/layanan-teknis/pergantian kapasitor.webp"
  },
  {
    id: 4,
    title: "Isi & Tambah Freon",
    description: "Pengecekan dan pengisian tekanan freon AC yang bermasalah secara akurat.",
    image: "/images/layanan-teknis/tambah_freon_isi_freon11.webp"
  },
  {
    id: 5,
    title: "Las & Kebocoran",
    description: "Proses deteksi kebocoran dan pengerjaan las pipa AC yang profesional.",
    image: "/images/layanan-teknis/las_dan_perbaikan_kebocoran.webp"
  },
  {
    id: 6,
    title: "Vacum & Flushing",
    description: "Pembersihan sisa oli pada instalasi pipa untuk melancarkan sirkulasi freon.",
    image: "/images/layanan-teknis/vacum_flesing.webp"
  }
];
export const ContactMeData = [
  {

  }


]

// Footer Links
export const footerLinks: { link: string }[] = [
  {
    link: "Online Payments",
  },
  {
    link: "Financial Projections",
  },
  {
    link: "Bookkeeping",
  },
  {
    link: "Banking",
  },
  {
    link: "Integrations",
  },
  {
    link: "API Reference",
  },
  {
    link: "Support",
  },
  {
    link: "Help",
  },
  {
    link: "Infrastructure",
  },
  {
    link: "Certifications",
  },
  {
    link: "Licenses",
  },
  {
    link: "Terms and conditions",
  },
  {
    link: "Legal",
  },
  {
    link: "Privacy",
  },
  {
    link: "Cookies",
  },
  {
    link: "Disclaimer",
  },
];

// Perks
export const perks = [
  {
    text: "When you pay with a debit or credit card, Mobile App doesn't keep transaction information that can be tied back to you.",
  },
  {
    text: "Digital wallets are becoming more popular than ever before.",
  },
  {
    text: "You can also add your student ID card to Wallet to access places like your dorm and the library.",
  },
];

// review
export const review = [
  {
    text: "It's easy to set up and the support experience is unparalleled. every transaction the instant it happens and correct wasteful behavior. What a relief.",
    name: "Nina B. Freeman",
    post: "Founder at Litchi Care",
    image: "/images/search/profile.webp",
    appstorerating: "4.5",
    gplayrating: "4.5",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Service Cuci 0,5 PK - 1 PK",
    price: "Rp 75.000",
    category: "Service",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 2,
    title: "Service Cuci 1,5 PK - 2 PK",
    price: "Rp 85.000",
    category: "Service",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 3,
    title: "Service Cuci Inverter 0,5 - 2 PK",
    price: "Rp 135.000",
    category: "Service",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 4,
    title: "Tambah Freon R22 0,5-1 PK",
    price: "Rp 250.000",
    category: "Maintenance",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 5,
    title: "Tambah Freon R22 1,5-2 PK",
    price: "Rp 300.000",
    category: "Maintenance",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 6,
    title: "Tambah Freon R32/R410 0,5-1 PK",
    price: "Rp 250.000",
    category: "Maintenance",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 7,
    title: "Tambah Freon R32/R410 1,5-2 PK",
    price: "Rp 300.000",
    category: "Maintenance",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 8,
    title: "Isi Freon R32/R410 0,5-1 PK",
    price: "Rp 350.000",
    category: "Maintenance",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 9,
    title: "Isi Freon R32/R410 1,5-2 PK",
    price: "Rp 450.000",
    category: "Maintenance",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 10,
    title: "Isi Freon R22 0,5-1 PK",
    price: "Rp 350.000",
    category: "Maintenance",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 11,
    title: "Isi Freon R22 1,5-2 PK",
    price: "Rp 450.000",
    category: "Maintenance",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 12,
    title: "Bongkar AC",
    price: "Rp 250.000",
    category: "Installation",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 13,
    title: "Pasang AC 0,5-1 PK",
    price: "Rp 425.000",
    category: "Installation",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 14,
    title: "Pasang AC 1,5-2 PK",
    price: "Rp 475.000",
    category: "Installation",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 15,
    title: "Bongkar Pasang AC 0,5-1 PK",
    price: "Rp 550.000",
    category: "Installation",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 16,
    title: "Bongkar Pasang AC 1,5-2 PK",
    price: "Rp 650.000",
    category: "Installation",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 17,
    title: "Penggantian kapasitor 0,5-1 PK",
    price: "Rp 375.000",
    category: "Repair",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 18,
    title: "Penggantian kapasitor 1,5-2 PK",
    price: "Rp 425.000",
    category: "Repair",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 19,
    title: "Pengecekan AC",
    price: "Rp 75.000",
    category: "Service",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 20,
    title: "Bobok Tembok/Titik",
    price: "Rp 50.000",
    category: "Other",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 21,
    title: "Jasa Las/Titik",
    price: "Rp 175.000",
    category: "Repair",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 22,
    title: "Perbaikan Kebocoran Pipa Flaring/Nepel",
    price: "Rp 395.000",
    category: "Repair",
    image: "/images/contact-us/1212.webp",
  },
  {
    id: 23,
    title: "Vacum AC",
    price: "Rp 275.000",
    category: "Service",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 24,
    title: "Flushing AC",
    price: "Rp 275.000",
    category: "Service",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 25,
    title: "Vacum dan Flushing",
    price: "Rp 475.000",
    category: "Service", 
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 26,
    title: "Oli Kompresor",
    price: "Rp 375.000",
    category: "Maintenance",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 27,
    title: "Pergantian Pentil Sil Nepel",
    price: "Rp 175.000",
    category: "Maintenance",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 28,
    title: "Cairan Extreme Ultra",
    price: "Rp 525.000",
    category: "Maintenance",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 29,
    title: "Biaya Apartemen",
    price: "Rp 25.000",
    category: "Other",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 30,
    title: "Jasa Teknisi",
    price: "Rp 175.000",
    category: "Other",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 31,
    title: "Overload / Otomatis Mesin",
    price: "Rp 275.000",
    category: "Other",
    image: "/images/contact-us/cuci.webp",
  },
  {
    id: 32,
    title: "Overhoul AC",
    price: "Rp 475.000",
    category: "Service",
    image: "/images/contact-us/cuci.webp",
  },
];

export const categories = ["All", "Service", "Maintenance", "Repair", "Installation", "Other"];

// Testimonials
export const testimonialsRow1 = [
  {
    id: 1,
    text: "AC di rumah tiba-tiba panas dan bocor. Panggil jasa dari sini, teknisi datang cepat, langsung dicek dan diperbaiki. Sekarang AC saya sedingin es lagi!",
    name: "Budi Santoso",
    role: "Wiraswasta di Surabaya Barat",
    avatar: "/images/blog/author-01.png",
  },
  {
    id: 2,
    text: "Pengerjaannya sangat rapi dan profesional. Teknisi tidak asal bongkar, tapi dicari dulu sumber masalahnya. Harga perbaikan juga transparan sejak awal.",
    name: "Siti Aminah",
    role: "Ibu Rumah Tangga di Sidoarjo",
    avatar: "/images/blog/author-02.png",
  },
  {
    id: 3,
    text: "Langganan service cuci AC rutin di sini. Selalu tepat waktu dan mesin AC tetap awet. Pelayanan customer service-nya juga ramah banget.",
    name: "Hendra Wijaya",
    role: "Pemilik Minimarket",
    avatar: "/images/blog/author-03.png",
  },
  {
    id: 4,
    text: "Sempat ganti sparepart kompresor, dicariin sparepart ori yang harganya masuk akal. Garansinya jelas dan bertanggung jawab kalau ada komplain.",
    name: "Desi Purnamasari",
    role: "Karyawan Swasta",
    avatar: "/images/blog/author-01.png",
  },
];

export const testimonialsRow2 = [
  {
    id: 5,
    text: "Dari semua tukang service yang pernah saya pakai, yang ini paling recommended. Nggak banyak basa-basi, kerja cekat-cekot selesai.",
    name: "Anton Prabowo",
    role: "Pemilik Kost",
    avatar: "/images/blog/author-02.png",
  },
  {
    id: 6,
    text: "Mantap pelayanannya! AC kamar tidur sempat korslet, jam 8 malam telpon dan masih dilayani buat besok paginya. Terima kasih banyak.",
    name: "Rina Oktavia",
    role: "Mahasiswa",
    avatar: "/images/blog/author-03.png",
  },
  {
    id: 7,
    text: "Sangat puas dengan hasilnya. Freon diisi sesuai takaran, tekanan dicek dengan teliti. Angin AC tidak bau lagi dan hembusannya kencang.",
    name: "Johan Setiawan",
    role: "Dosen",
    avatar: "/images/blog/author-01.png",
  },
  {
    id: 8,
    text: "Kemarin malam AC bocor netes parah ke kasur. Langsung ditangani besoknya dengan profesional, dikasih edukasi juga soal perawatan AC harian.",
    name: "Maria Ulfa",
    role: "Wiraswasta",
    avatar: "/images/blog/author-02.png",
  },
];

