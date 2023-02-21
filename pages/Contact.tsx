import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../src/components/MessageForm";
import ContentTitle from "./../src/atoms/ContentTitle";

type IProps = {};

function Contact({}: IProps) {
  return (
    <motion.div
      className="relative px-6 gap-4  min-h-[80vh] w-screen
      flex flex-col items-center justify-center h-fit py-6
      text-center bg-[#fefefe] shadow-md rounded-2xl border-2 border-[#242424]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-4 justify-between items-center mx-auto text-center py-4 w-full"
      >
        <ContentTitle title="Pronto para começar uma parceria?" />
        <p className="text-sm italic">Envie uma Mensagem!</p>
      </motion.div>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
