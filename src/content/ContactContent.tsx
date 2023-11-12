/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col w-full items-center h-fit justify-center max-w-5xl gap-8 "
    >
      <h1 className="font-medium  text-white text-4xl">Let's work together!</h1>

      <MessageForm />
    </motion.div>
  );
}

export default Contact;
