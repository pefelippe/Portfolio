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
      <div className="flex flex-col gap-4 justify-center items-center w-full text-[1.6rem]">
        <b className="bg-blue text-white p-2 w-fit rounded-xl tracking-[5px] text-[2rem] px-10">
          contato
        </b>

        <p className=" font-semibold text-[#000] ">
          Não perca tempo. Entre em contato
        </p>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default CallToContact;
