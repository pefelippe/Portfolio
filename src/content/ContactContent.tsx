/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function ContactContent() {
  return (
    <motion.div
      id="contact-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mx-auto justify-center items-center text-center relative w-full h-full gap-3 max-w-xl"
    >
      <h1 className="text-4xl lg:text-5xl  font-bold tracking-tighter">
        Get in touch.
      </h1>
      <h3 className="text-xl font-thin flex flex-col max-w-lg pb-1  ">
        Drop me a message and let's make things happen!
      </h3>
      <div className="w-full flex  items-center justify-center pt-2">
        <MessageForm />
      </div>
    </motion.div>
  );
}

export default ContactContent;
