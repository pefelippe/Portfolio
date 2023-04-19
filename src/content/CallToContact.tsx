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
      className="relative min-h-fit max-w-4xl  mx-auto  text-xl max-xl:px-4 rounded-md 
      flex flex-col justify-center gap-6 md:gap-10  items-center text-center "
    >
      <div className="flex flex-col gap-4  w-full text-center ">
        <p className=" text-[3rem] lg:text-[4rem] leading-tight font-semibold">
          Manda uma <b className=" bg-blue text-white px-2">mensagem</b>!
        </p>
        <p className="text-[1.8rem] font-medium text-gray-500 mx-auto max-w-xl text-center">
          Pronto para começar uma parceria?
        </p>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default CallToContact;
