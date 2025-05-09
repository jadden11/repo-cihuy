"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Backend Developer",
    icon: <i className="ri-terminal-line"></i>,
    desc: "Builds the server, database, and logic that power websites and apps behind the scenes.",
  },
  {
    title: "Frontend Developer",
    icon: <i className="ri-mac-line"></i>,
    desc: "Creates the user interface and experience you see and interact with in websites and apps.",
  },
  {
    title: "Mobile Developer",
    icon: <i className="ri-smartphone-line"></i>,
    desc: "Builds apps for mobile platforms like Android and iOS using native or hybrid technologies.",
  },
  {
    title: "UI/UX Developer",
    icon: <i className="ri-paint-line"></i>,
    desc: "Focuses on design, usability, and experience to ensure apps are intuitive and user-friendly.",
  },
  {
    title: "IT Consultant",
    icon: <i className="ri-user-community-line"></i>,
    desc: "Advises businesses on how to use tech to solve problems and improve efficiency.",
  },
];

const Core = () => {
  return (
    <div className="container mx-auto px-4 py-10 font-[var(--font-poppins)]">
      <div>
        <h1 className="text-center font-bold text-gray-900 dark:text-gray-900 text-4xl sm:text-4xl mb-8">
          Core Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              key={index}
              className="flex flex-col items-start p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-blue-500 text-4xl mb-4">{skill.icon}</div>
              <h2 className="text-lg font-medium text-gray-800 dark:text-gray-800">
                {skill.title}
              </h2>
              <p className="text-sm text-start text-gray-600 dark:text-gray-400 mt-2">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Core;
