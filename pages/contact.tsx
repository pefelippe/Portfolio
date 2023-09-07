/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../src/components/MessageForm";
import LinksDetailed from "../src/components/LinksDetailed";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col max-w-screen-2xl mx-auto  gap-10 items-center justify-center"
    >
      <h1 className="font-thin text-3xl md:text-[3rem]  leading-tight  ">
        Get in touch.
      </h1>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
