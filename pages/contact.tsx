/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import MessageForm from "../src/components/MessageForm";

type Props = {};

function CallToContact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-fit  text-xl w-full  mx-auto max-lg:px-8
      flex flex-col justify-center  items-center  text-start "
    >
      <div className=" flex flex-col w-full text-[1.25rem] gap-10 h-full  ">
        <span className="text-[2.5rem] font-bold  text-black">
          Let's work together
        </span>

        <div className="flex w-full">
          <p className="text-gray-700  font-normal text-left w-full text-[1rem] xl:text-[1.2rem] max-w-xl">
            If you’d like to chat about anything get in touch at
            pedfelippe@gmail.com or reach out to me on LinkedIn.
          </p>
          <MessageForm name={""} email={""} subject={""} message={""} />
        </div>
      </div>
    </motion.div>
  );
}

export default CallToContact;
