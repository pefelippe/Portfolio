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
      className="flex flex-col  mx-auto  items-center justify-center gap-4 w-full min-h-full h-[90vh]  px-6 max-md:py-10"
    >
      <h1 className="font-thin text-4xl md:text-6xl  leading-tight text-gray-100 ">
        Get in touch.
      </h1>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
