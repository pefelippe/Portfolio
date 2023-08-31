/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      className=" text-xl w-full h-screen  max-w-3xl mx-auto text-center
      flex flex-col justify-center items-center gap-10"
    >
      <h1 className="font-thin text-[2.5rem]  leading-tight  ">
        Feel free to reach me.
      </h1>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
