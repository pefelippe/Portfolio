/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col w-full items-start h-fit justify-start 
      max-w-5xl gap-8 min-h-[90vh] 
      py-16 max-xl:px-6"
    >
      <div className="flex flex-col h-full justify-center items-start text-start w-full gap-6 ">
        <h1 className="text-3xl font-thin  text-gray-300">Let's connect!</h1>
        <p className=" text-md text-gray-300 max-w-3xl">
          Whether you have a project in mind, a question, or just want to say
          hello, feel free to reach out through the contact form on the right or
          using the contact information below.
        </p>
      </div>
      <MessageForm />
    </motion.div>
  );
}

export default Contact;
