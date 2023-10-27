/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col w-full items-center  justify-center max-w-3xl min-h-[80vh] mt-[10vh] p-10"
    >
      <div
        className="leading-1 gap-2 flex flex-col
       justify-between items-start md:items-center
      text-start md:text-center  w-full text-white "
      >
        <h1 className="text-[1.8rem] text-white leading-tight font-semibold   max-w-xl sm:text-4xl ">
          Contact-me.
        </h1>
        <h3 className="text-gray-300 mb-6 font-extralight text-lg">
          I love partnering. Send a concise message and describe your project.
          Let's work together.
        </h3>
      </div>
      <MessageForm />
    </motion.div>
  );
}

export default Contact;
