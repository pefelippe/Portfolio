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
      className="flex flex-col  mx-auto  items-start justify-center gap-4"
    >
      <h1 className="font-thin text-3xl  leading-tight text-gray-100 ">
        Get in touch.
      </h1>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
