/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xl w-full max-w-lg mx-auto text-center
      flex flex-col justify-center gap-6  "
    >
      <h1 className="font-thin text-3xl  leading-tight text-gray-100 ">
        Feel free to reach me.
      </h1>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
