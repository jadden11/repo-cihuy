"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const All = () => {
  const productsData = [
    {
      id: 1,
      title: "Dasbor Manajemen Pesanan E-commerce",
      description:
        "Kelola semua pesanan Anda, lacak pengiriman, dan pantau status transaksi dengan mudah menggunakan dasbor intuitif ini.",
      image: "/images/ecom.webp",
    },
    {
      id: 2,
      title: "App Manajemen Acara",
      description:
        "Kalender digital untuk menampilkan jadwal, termasuk Initial Discovery dengan ikon pengguna dan tenggat waktu. memungkinkan pemilihan tipe acara (Video calls, Meetings, Deadline, Follow-ups).",
      image: "/images/dash.webp",
    },
    {
      id: 3,
      title: "Analisis Penjualan Komprehensif",
      description:
        "Platform digital hubungkan bank & vendor solusi inovatif. Bandingkan, simpan, kontak langsung. Permudah keputusan finansial.",
      image: "/images/rame.webp",
    },
    {
      id: 4,
      title: "Premium website design",
      description:
        "TheDomeHomes is A premium supplier of glass geodesic domes for homes, restaurants, and unique outdoor experiences.",
      image: "/images/glam.webp",
    },
    {
      id: 5,
      title: "Secure & Invincible",
      description:
        "ProxyGuard: innovative proxy services for secure & anonymous online experiences for individuals & global businesses. Advanced tech, privacy-focused.",
      image: "/images/proxy.webp",
    },
  ];

  const router = useRouter();

  return (
    <div className="container mx-auto py-10">
      <div className="mb-12 relative flex items-center justify-center px-2">
        <button
          onClick={() => router.back()}
          className="absolute left-2 text-white font-[family-name:var(--font-poppins)] bg-blue-600 hover:bg-blue-900 rounded-full py-2 px-2 sm:px-4 inline-flex items-center cursor-pointer"
        >
          <i className="ri-arrow-left-circle-fill text-lg"></i>
          <span className="hidden sm:inline ml-2">Back</span>
        </button>
        <h1 className="text-xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-800 w-full">
          Projects
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative h-60">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
              {/* Anda bisa menambahkan tombol detail per produk di sini */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
