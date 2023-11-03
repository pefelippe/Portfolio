/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col w-full items-start h-fit justify-start max-w-4xl gap-8 "
    >
      <div className="flex flex-col h-full justify-center items-center text-start w-full gap-6 ">
        <h1 className="text-4xl font-thin  text-gray-300">
          Let's work together!
        </h1>
      </div>
      <MessageForm />
    </motion.div>
  );
}

export default Contact;
