/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex max-md:flex-col w-full items-center  justify-center max-w-5xl xl:gap-10 min-h-[85vh] max-xl:px-6"
    >
      <div className="leading-1  flex flex-col h-full justify-start items-start text-start  w-full my-auto ">
        <h1 className="font-thin text-4xl  leading-tight text-white text-center">
          Let's connect!
        </h1>
      </div>
      <MessageForm />
    </motion.div>
  );
}

export default Contact;
