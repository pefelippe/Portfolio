import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../src/components/MessageForm";

type Props = {};

function CallToContact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="h-fit min-h-screen max-w-7xl mx-auto  text-xl max-xl:px-8 rounded-md  text-white
      flex max-lg:flex-col justify-between gap-10 md:gap-20  items-center text-center py-10"
    >
      <div className="flex flex-col gap-2 w-fit text-start">
        <p className=" text-[1.4rem] font-bold text-blue">Contato</p>
        <p className=" text-[2.5rem] lg:text-[3.5rem] leading-tight font-semibold max-w-xl">
          Pronto para começar uma parceria?
        </p>
        <p className=" text-[1.3rem] font-medium text-gray-300 ">
          Manda uma <b className=" ">mensagem</b>!
        </p>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default CallToContact;
