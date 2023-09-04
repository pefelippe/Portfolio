/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      className="text-xl w-full max-w-xl mx-auto text-start
      flex flex-col justify-center gap-6 pt-10 "
    >
      <h1 className="text-xl font-bold tracking-tight ">
        Feel free to reach me.
      </h1>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
