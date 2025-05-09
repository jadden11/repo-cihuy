"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className="mb-12 relative flex items-center justify-center px-2 pt-4">
        <button
          onClick={() => router.back()}
          className="absolute left-2 text-white font-[family-name:var(--font-poppins)] bg-blue-600 hover:bg-blue-900 rounded-full py-2 px-2 sm:px-4 inline-flex items-center cursor-pointer"
        >
          <i className="ri-arrow-left-circle-fill text-lg"></i>
          <span className="hidden sm:inline ml-2">Back</span>
        </button>
        <h1 className="text-xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-800 w-full">
          Contact Me
        </h1>
      </div>

      <footer className="bg-gray-100 py-12 border-t border-gray-200 rounded-t-4xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex justify-start items-center gap-3 sm:gap-4">
                <Image
                  src="/icon.jpg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <p className="text-xl font-semibold text-gray-800">
                  Mohammad Reza
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-500">Kab. Bogor</p>
              <p className="mt-1 text-sm text-gray-500">
                <Link
                  href={"mailto: rezaysya@gmail.com"}
                  className="hover:text-blue-900"
                >
                  Email: rezaysya@gmail.com
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-500">
                <Link
                  href={"https://wa.me/+6281388410749"}
                  className={"hover:text-green-900"}
                >
                  Telepon: +62 813 8841 0749
                </Link>
              </p>
            </div>

            <div className="md:flex md:items-start md:space-x-8">
              <div className="mb-8 md:mb-0">
                <h6 className="text-sm font-semibold text-gray-700 uppercase mb-4">
                  Navigasi
                </h6>
                <ul className="list-none space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://lynk.id/rezaysya"
                      className="text-gray-500 hover:text-gray-900"
                      target="_blank"
                    >
                      Product
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-8 md:mb-0">
                <h6 className="text-sm font-semibold text-gray-700 uppercase mb-4">
                  Sosial
                </h6>
                <ul className="list-none space-y-2">
                  <li>
                    <Link
                      href="https://www.instagram.com/rezaysya/"
                      className="text-gray-500 hover:text-gray-900"
                      target="_blank"
                    >
                      <i className="ri-instagram-fill text-pink-500 mr-2 align-middle"></i>{" "}
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/rezaysya"
                      className="text-gray-500 hover:text-gray-900"
                      target="_blank"
                    >
                      <i className="ri-linkedin-fill text-blue-800 mr-2 align-middle"></i>{" "}
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            &copy; 2025 Mohammad Reza.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;
