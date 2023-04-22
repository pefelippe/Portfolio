import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../components/MessageForm";

type Props = {};

function CallToContact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-fit mx-auto  text-xl w-full  max-w-4xl 
      flex flex-col justify-center  items-center gap-6  text-center"
    >
      <div className="flex flex-col gap-4 text-center">
        <b className="mx-auto text-[2.5rem] md:text-[3rem] leading-tight  bg-blue text-white px-6 py-1  w-fit rounded-xl">
          contato
        </b>

        <p className="text-[1.6rem] md:text-[1.8rem] font-medium text-gray-500 max-w-xl">
          Pronto para começar uma parceria?
        </p>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default CallToContact;
