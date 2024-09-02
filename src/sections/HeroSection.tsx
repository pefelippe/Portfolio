import { motion } from "framer-motion";

import Link from "next/link";
import React from "react";

const buttonData = [
  {
    text: "About me",
    href: "/about",
    bgColor: "bg-gray-500",
    textColor: "text-gray-100",
    hoverBgColor: "hover:bg-gray-400",
    svgPath:
      "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    delay: 1.5,
  },

  {
    text: "Contact me",
    href: "/contact",
    bgColor: "bg-gray-900",
    textColor: "text-white",
    hoverBgColor: "hover:bg-gray-800",
    svgPath:
      "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
    delay: 1.9,
  },
];

function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-start justify-center w-full mx-auto px-4 md:px-0 gap-8 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-full md:max-w-3xl text-left">
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-100 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Crafting{" "}
          <motion.span
            className="text-gray-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Innovative Solutions
          </motion.span>{" "}
          from Brazil.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Web & Mobile Developer transforming ideas into seamless digital
          experiences since 2020.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center justify-start w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {buttonData.map(
            (
              { text, href, bgColor, textColor, hoverBgColor, svgPath, delay },
              index,
            ) => (
              <Link key={text} href={href} passHref>
                <motion.button
                  className={`w-[90vw] sm:w-auto px-8 py-3 md:py-4 rounded-lg font-semibold text-lg 
                 shadow-lg transition duration-300 flex items-center justify-center
                 ${bgColor} ${textColor} ${hoverBgColor}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.2 }}
                >
                  {text}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d={svgPath} clipRule="evenodd" />
                  </svg>
                </motion.button>
              </Link>
            ),
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
