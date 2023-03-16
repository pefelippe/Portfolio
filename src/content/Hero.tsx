import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto w-full flex max-md:flex-col 
       items-start max-md:items-center max-w-7xl md:py-20 text-white "
    >
      <div className="flex flex-col  items-start ">
        <motion.p
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[22px] tracking-[2.2px] max-md:mx-auto font-semibold 
          text-center uppercase text-[#a3a3a3] my-4"
        >
          <Typewriter
            words={[
              "Web Developer",
              "Tailwind <3",
              "i write coffe",
              "i drink javascript",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={75}
            deleteSpeed={75}
            delaySpeed={2000}
          />
        </motion.p>

        <p
          className="text-[#fff] text-center uppercase font-bold 
        text-5xl lg:text-7xl bg-[#5865f2] mb-6 
        "
        >
          Pedro Felippe
        </p>

        <SocialLinks />

        {/* <ul className="mx-auto pt-8 list-none  flex  text-white transition-all gap-4 ">
          <Link
            className=" flex w-fit hover:underline items-center text-xl font-semibold
        text-center  text-[#fff] hover:text-[#5865f2] transition-all"
            href="/about"
          >
            <motion.span className="flex gap-4 text-md items-center justify-center px-2 rounded-md py-4 font-bold">
              <p>Quem sou?</p>
            </motion.span>
          </Link>
          <Link
            className=" flex w-fit hover:underline  gap-2 items-center text-xl font-semibold
        text-center rounded-full   bg-[#5865f2] hover:bg-[#5865f2]/80 text-[#fff] transition-all border-[1px] border-[#5865f2]"
            href="/contact"
          >
            <motion.span className="flex gap-2 text-md items-center justify-center px-4 rounded-md py-4 font-bold">
              <p>Entre em contato</p>
            </motion.span>
          </Link>
        </ul> */}
      </div>
      {/* <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="rounded-full   h-[150px]
      transition-all shadow-md object-fit border-1 border-[#121212]"
      /> */}
    </motion.div>
  );
}
