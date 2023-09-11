/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import LinksDetailed from "../src/components/LinksDetailed";
import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col  mx-auto  gap-10 items-start justify-center min-h-[90vh] px-10 max-w-lg"
    >
      <h1 className="font-thin text-5xl  leading-tight  ">Get in touch.</h1>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
