import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="component-base flex-row justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="space-y-4"
        >
          <div className=" space-y-6 text-center gap-10">
            {/* <h1 className=" text-4xl font-semibold">Prazer, me chamo</h1> */}
            <h1 className=" text-5xl font-bold md:text-8xl">Pedro Felippe</h1>

            <p className="text-3xl  tracking-[5px]">Web Developer</p>

            <nav className="flex justify-center items-center gap-10 ">
              <a href="#" className="">
                <FaGithub className="h-6 w-6  hover:text-[#F7AB0A]" />
              </a>
              <a href="#" className="">
                <FaLinkedinIn className="h-6 w-6  hover:text-[#F7AB0A]" />
              </a>
              <a href="#" className="">
                <FaInstagram className="h-6 w-6  hover:text-[#F7AB0A]" />
              </a>
            </nav>
          </div>
        </motion.div>
      </div>
    </>
  );
}
