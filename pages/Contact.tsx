import { motion } from "framer-motion";
import React from "react";

import ContentTitle from "../src/components/ContentTitle";
import MessageForm from "../src/components/MessageForm";

type IProps = {};

function Contact({}: IProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="contact"
      className="flex flex-col gap-10 min-h-[80vh] justify-center items-center px-10"
    >
      <ContentTitle title="Contato" />

      <div
        className="relative 
      flex flex-col items-center justify-evenly w-full
      text-center 
       rounded-2xl  max-w-xl mx-auto gap-8"
      >
        <MessageForm name={""} email={""} subject={""} message={""} />
      </div>
    </motion.div>
  );
}

export default Contact;
