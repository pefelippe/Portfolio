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
      className="h-fit min-h-[90vh] max-w-7xl mx-auto text-white w-full text-xl max-lg:px-8 
      flex max-lg:flex-col justify-center gap-6 lg:gap-20 items-center text-center py-10 "
    >
      <div className="flex flex-col gap-4 w-fit">
        <p
          className=" text-[2.5rem] lg:text-[3rem] leading-tight font-semibold dark:text-white text-white text-center max-w-xl
          mx-auto underline decoration-[#5865f2]"
        >
          Tem alguma ideia em mente?
        </p>
        <p className=" text-[1.5rem] font-medium text-gray-300 mx-auto">
          Manda uma <b className="text-white ">mensagem</b>!
        </p>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default CallToContact;
