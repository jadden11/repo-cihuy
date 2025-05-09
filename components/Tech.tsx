"use client";

import Image from "next/image";
import React from "react";

const techStack = [
  {
    name: "Laravel",
    image: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
  },
  { name: "React", image: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  {
    name: "TypeScript",
    image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "JavaScript",
    image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    name: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },
  { name: "Golang", image: "https://cdn.worldvectorlogo.com/logos/go-6.svg" },
  {
    name: "Python",
    image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  { name: "Docker", image: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
  {
    name: "PostgreSQL",
    image: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  },
  { name: "MySQL", image: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg" },
  { name: "Java", image: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
];

const Tech = () => {
  return (
    <div className="overflow-hidden py-10">
      <div className="relative w-full h-20">
        <div className="flex animate-slide-left gap-10 w-max items-center">
          {techStack.concat(techStack).map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px]"
            >
              <Image
                width={100}
                height={100}
                src={tech.image}
                alt={tech.name}
                className="w-10 h-10 object-contain hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
