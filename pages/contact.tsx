/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col w-full items-start  justify-start max-w-7xl"
    >
      <div className="text-start w-full max-w-xl lg:justify-center gap-4 items-start flex flex-col">
        <p className="flex  text-5xl lg:text-6xl font-bold   ">Contact-me.</p>
        <p className="text-lg font-thin max-w-sm  text-gray-300">
          I love partnering. Send a concise message and describe your project.
          Let's work together.
        </p>
      </div>
      <MessageForm />
    </motion.div>
  );
}

export default Contact;
