import { motion } from "framer-motion";
import React from "react";
import MessageForm from "../src/components/MessageForm";
import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {};

function CallToContact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-fit mx-auto text-xl w-full   
      flex flex-col justify-start  items-start  text-start gap-20"
    >
      <span className="text-[2rem] font-bold">Get in Touch</span>

      <div className="flex flex-col w-full justify-between items-start gap-20">
        <div className="flex gap-7">
          <AnimatedBtn className="" href="https://github.com/pefelippe">
            <div className=" flex gap-3 items-center w-full font-semibold transition-all hover:text-blue">
              <FaGithub className="h-8 w-8" />
              Github
            </div>
          </AnimatedBtn>

          <AnimatedBtn
            className=""
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <div
              className="  flex gap-3 items-center 
            font-semibold transition-all  hover:text-blue"
            >
              <FaLinkedinIn className="h-8 w-8 " />
              Linkedin
            </div>
          </AnimatedBtn>
        </div>

        <MessageForm name={""} email={""} subject={""} message={""} />
      </div>
    </motion.div>
  );
}

export default CallToContact;
