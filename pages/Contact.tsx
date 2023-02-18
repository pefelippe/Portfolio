import { motion } from "framer-motion";

import React from "react";
import MessageForm from "../src/components/MessageForm";

type IProps = {};

function Contact({}: IProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" snap-start h-[80vh] relative flex flex-col items-center justify-center  w-screen max-w-screen-2xl px-8 mx-auto"
    >
      <div className="space-y-4 justify-between text-center p-4 w-full">
        <span className="text-3xl font-semibold ">
          Pronto para começar uma parceria?
        </span>
        <p className="text-xl">Envie uma Mensagem!</p>
      </div>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
