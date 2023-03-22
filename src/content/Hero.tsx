import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="h-[70vh] relative mx-auto w-full flex justify-start max-lg:justify-center gap-8 lg:gap-32 max-lg:flex-col
       items-center max-w-7xl text-white "
    >
      <motion.div className="w-fit flex flex-col gap-4 items-center text-center  mx-auto">
        <motion.p className="text-xl tracking-[2.2px] font-semibold text-center uppercase text-[#a3a3a3]">
          Web Developer
        </motion.p>

        <p
          className="text-[#fff]  uppercase font-bold mx-auto tracking-[2.2px] 
        text-5xl md:text-6xl lg:text-7xl 
        "
        >
          <Typewriter
            words={["Pedro Felippe"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={75}
            deleteSpeed={75}
            delaySpeed={2000}
          />
        </p>

        <p className="w-full flex flex-col h-full  text-[1.2rem] text-gray-300 max-w-xl mx-auto">
          Sou um Web Developer com mais de três anos de experiência em construir
          soluções de qualidade para web.
        </p>

        {/* <ul className="list-none flex  text-white transition-all gap-6">
          <Link
            className=" flex w-fit hover:underline items-center text-xl font-semibold
        text-center text-[#fff] hover:text-[#5865f2] transition-all"
            href="/about"
          >
            <motion.span className="flex gap-2 text-md items-center justify-center rounded-md py-4 font-bold">
              <p>Quem sou?</p>
            </motion.span>
          </Link>
          <Link
            className=" flex w-fit hover:underline  gap-2 items-center text-xl font-semibold
        text-center rounded-full bg-[#5865f2] text-[#fff] transition-all border-[1px] border-[#5865f2]"
            href="/contact"
          >
            <motion.span className="flex gap-2 text-md items-center justify-center px-8 rounded-md py-5 font-bold">
              <p>Entre em contato</p>
            </motion.span>
          </Link>
        </ul> */}
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
}
