/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col w-full items-start  justify-start max-w-5xl"
    >
      <div className="leading-1 gap-6 flex flex-col justify-between items-start  text-start   w-full text-white ">
        <h1 className="text-[1.6rem] text-white leading-tight font-semibold  sm:text-3xl ">
          Contact-me.
        </h1>
        <h3 className="text-gray-300 mb-6  text-lg">
          I love partnering. Send a concise message and describe your project.
          Let's work together.
        </h3>
      </div>
      <MessageForm />
    </motion.div>
  );
}

export default Contact;
