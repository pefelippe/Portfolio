/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../components/MessageForm";

function Contact() {
  return (
    <motion.div
      className="min-h-screen text-xl w-full  mx-auto  gap-6 
      flex flex-col justify-center  items-start  "
    >
      <h1 className="text-[2rem]  leading-[1.2] font-bold ">Contact</h1>

      <p className="text-gray-100">
        Feel free to reach out with feedback, questions or just to say hello.
      </p>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
