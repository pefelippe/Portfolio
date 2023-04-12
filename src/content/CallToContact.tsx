import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../components/MessageForm";

type Props = {};

function CallToContact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="min-h-fit max-w-7xl mx-auto text-white  text-xl max-lg:px-8 rounded-md
      flex max-lg:flex-col justify-between gap-10 md:gap-20  items-center text-center bg-[#101010] md:p-20 p-10"
    >
      <div className="flex flex-col gap-4 w-fit">
        <p
          className=" text-[2.5rem] lg:text-[4rem] leading-tight font-semibold dark:text-white text-white text-center 
          mx-auto"
        >
          Tem alguma ideia em mente?
        </p>
        <p className=" text-[1.5rem] font-medium text-gray-300 ">
          Manda uma <b className="text-white ">mensagem</b>!
        </p>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default CallToContact;
