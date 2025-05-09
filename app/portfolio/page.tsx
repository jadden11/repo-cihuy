"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const experiences = [
  {
    company: "Bank Mandiri",
    position: "Software Engineer",
    description:
      "Developed backend systems and API integrations for digital banking services with high security and scalability standards.",
    year: "2024 - 2025",
    logo: "/mandiri.png",
  },
  {
    company: "Tiket.com",
    position: "Backend Developer",
    description:
      "Developed booking and payment modules and ensured API stability for an online travel platform.",
    year: "2023 - 2024",
    logo: "/tiket.webp",
  },
  {
    company: "99.co (Singapore)",
    position: "Backend Developer",
    description:
      "Developed property search systems and backend for CMS used by internal teams and business partners.",
    year: "2021 - 2021",
    logo: "/co.webp",
  },
];

const PortfolioExperience = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-12 font-[var(--font-poppins)]">
      <div className="mb-12 relative flex items-center justify-center px-2">
        <button
          onClick={() => router.back()}
          className="absolute left-2 text-white font-[family-name:var(--font-poppins)] bg-blue-600 hover:bg-blue-900 rounded-full py-2 px-2 sm:px-4 inline-flex items-center cursor-pointer"
        >
          <i className="ri-arrow-left-circle-fill text-lg"></i>
          <span className="hidden sm:inline ml-2">Back</span>
        </button>
        <h1 className="text-xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-800 w-full">
          Work Experience
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex items-start rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <Image
              src={exp.logo}
              alt={exp.company}
              width={60}
              height={60}
              className="object-contain mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-black">
                {exp.position}
              </h2>
              <p className="text-sm text-blue-500">
                {exp.company} ・ {exp.year}
              </p>
              <p className="text-gray-700 dark:text-gray-500 mt-2 text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioExperience;
