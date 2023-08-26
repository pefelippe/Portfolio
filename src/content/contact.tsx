/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../components/MessageForm";

function Contact() {
  return (
    <motion.div
      className=" text-xl w-full 
      flex flex-col justify-start gap-2 "
    >
      {/* <p className="bg-blue text-white p-1 px-3 text-md font-medium rounded text-black mx-auto">
        Contact
      </p> */}

      <h1 className="font-bold text-[2.5rem] xl:text-[4rem] leading-tight  text-black  pb-10  max-w-5xl">
        Feel free to reach out with questions or to say hello.
      </h1>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
