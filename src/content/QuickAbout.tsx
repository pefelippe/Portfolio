import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {};

function QuickAbout({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-fit flex max-lg:flex-col justify-center 
       items-center w-full mx-auto  gap-6 lg:gap-20  px-6 rounded-xl"
    >
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative z-10 object-contain w-full max-h-[250px] rounded-full max-w-xl"
      />
    </motion.div>
  );
}

export default QuickAbout;
