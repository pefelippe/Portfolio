import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../src/components/MessageForm";
import ContentTitle from "./../src/atoms/ContentTitle";

type IProps = {};

function Contact({}: IProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="contact"
      className="flex flex-col gap-10"
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
