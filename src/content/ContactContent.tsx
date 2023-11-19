/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col w-full items-start h-fit justify-start max-w-5xl gap-8 py-[5vh]"
    >
      <h1 className="text-5xl md:text-7xl  font-bold leading-[1.2]">
        Contact-me.
      </h1>

      <MessageForm />
    </motion.div>
  );
}

export default Contact;
