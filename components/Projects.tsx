import React from "react";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
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
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-5">Final Projects</h1>
        <Link
          href="/project"
          className="text-white font-[family-name:var(--font-poppins)] bg-blue-600 hover:bg-blue-900 rounded-3xl py-2 px-4 inline-flex items-center"
        >
          <i className="ri-arrow-right-circle-fill mr-3"></i>
          See all
        </Link>
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

export default Products;
