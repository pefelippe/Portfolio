/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex max-lg:flex-col w-full items-center  justify-center max-w-5xl gap-6 xl:gap-20 min-h-[65vh] py-[5vh] lg:py-[10vh] max-xl:px-6"
    >
      <div className="leading-1  flex flex-col h-full justify-start items-start text-start  w-full my-auto max-w-xl ">
        <h1 className="font-thin text-4xl x text-white text-center">
          Let's connect!
        </h1>
        <p className="my-5 text-md text-gray-300">
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
