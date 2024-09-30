import { motion } from "framer-motion";
import Link from "next/link";
import React from "react"; // Removed Typical import

const buttonData = [
  {
    text: "About Me",
    href: "/about",
    bgColor: "bg-blue-600",
    textColor: "text-gray-600",
    hoverBgColor: "hover:bg-blue-700",
    svgPath:
      "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    delay: 1.5,
  },
  {
    text: "Contact",
    href: "/contact",
    bgColor: "bg-gray-800",
    textColor: "text-white",
    hoverBgColor: "hover:bg-gray-900",
    svgPath:
      "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
    delay: 1.9,
  },
];

function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full mx-auto px gap-4 max-w-7xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-full md:max-w-screen-2xl text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 text-indigo-500 flex-wrap">
          Crafting Innovative Solutions from Brazil.
        </h1>

        <motion.p
          className="text-xl lg:text-2xl  mb-8 max-w-5xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Helping to transform ideas into digital solutions since 2020.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {buttonData.map(
            (
              { text, href, bgColor, textColor, hoverBgColor, svgPath },
              index,
            ) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
              >
                <Link href={href} passHref>
                  <motion.button
                    className={`w-[90vw] sm:w-auto px-6 py-3 rounded-lg font-semibold text-lg 
                  shadow-lg transition duration-300 flex items-center justify-center
                  ${bgColor} ${textColor} ${hoverBgColor}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
