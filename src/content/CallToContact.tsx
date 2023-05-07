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
      className="relative h-fit mx-auto text-xl w-full   
      flex flex-col justify-center  items-center  text-center"
    >
      <div className="mx-auto lg:mx-0 pb-10  w-full max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Contato
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-300">
          Não perca tempo. Vamos começar uma parceria.
        </p>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default CallToContact;
