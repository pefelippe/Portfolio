/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      className="min-h-[90vh] text-xl w-full max-w-xl mx-auto text-center
      flex flex-col justify-center gap-6 px-8 "
    >
      <h1 className="font-thin text-4xl  leading-tight text-gray-100 ">
        Feel free to reach me.
      </h1>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
