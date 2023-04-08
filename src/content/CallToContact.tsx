import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function CallToContact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-10 mx-auto w-full max-x-5xl flex flex-col justify-center items-center text-white gap-6 text-xl"
    >
      <motion.h2
        className="text-[2.5rem] md:text-[3rem] leading-tight font-semibold text-white
  underline decoration-blue max-w-lg w-fit mx-auto text-center"
      >
        Pronto para começar uma parceria?
      </motion.h2>

      <Link
        href="/contact"
        className=" text-center w-fit font-bold text-2xl bg-blue hover:bg-blue/80 max-w-[300px] py-4 px-8 rounded-md max-md:w-full hover:underline  transition-all"
      >
        Entre em contato
      </Link>
    </motion.div>
  );
}

export default CallToContact;
