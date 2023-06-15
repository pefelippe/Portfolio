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
      className="relative h-fit  text-xl w-full  mx-auto max-w-screen-md max-lg:px-8
      flex flex-col justify-center  items-center  text-start pt-10"
    >
      <div className="flex max-md:flex-col w-full items-center  justify-between h-full">
        <div className=" flex flex-col w-full md:max-w-xs text-[1.25rem] gap-6 h-full justify-start items-start ">
          <span className="text-[2rem] font-bold  text-black">
            Get in Touch
          </span>
          <p className="text-gray-300">
            I look forward to hearing from you soon and engaging in meaningful
            conversations.
          </p>

          <p className="text-gray-300">
            Let's{" "}
            <span className="font-semibold 0 text-[#3b83f6d8] ">connect</span>!
          </p>
        </div>
        <MessageForm name={""} email={""} subject={""} message={""} />
      </div>
    </motion.div>
  );
}

export default CallToContact;
