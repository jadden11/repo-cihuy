import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="relative py-10 overflow-hidden rounded-3xl">
      <div className="absolute inset-0 -z-10 bg-[url('/reza.png')] bg-cover bg-center blur-xs" />
      <div className="container mx-auto px-5 font-[family-name:var(--font-poppins)] relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-36 items-center">
          {/* About me */}
          <div className="mr-10 sm:mt-10 fontfamily-name:var(--font-poppins)">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-800 mb-2 sm:text-3xl md:">
              Software Engineer
            </h1>
            <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-700 mb-3 sm:text-5xl">
              Mohammad Reza
            </h1>
            <p className="text-lg text-black dark:text-gray-500 leading-relaxed mb-5 sm:text-2xl">
              Experienced in building scalable applications and passionate about
              problem-solving with clean, efficient code. Continuously learning
              and seeking growth opportunities.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out sm:px-8 sm:py-4 sm:text-2xl"
              >
                Contact
              </Link>
              {/* Opsi tambahan tombol atau link */}
              <Link
                href="/portfolio"
                className="text-blue-100 dark:text-blue-100 hover:underline sm:text-2xl"
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>
          {/* About me */}
        </div>
      </div>
    </div>
  );
};

export default Header;
