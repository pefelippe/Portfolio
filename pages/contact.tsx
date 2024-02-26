/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function ContactContent() {
  return (
    <motion.div
      id="contact-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-full flex flex-col gap-3 items-center text-start justify-center w-full
       text-white bg-zinc-900 p-8  rounded-3xl max-w-3xl
       mx-auto"
    >
      <motion.div className="flex w-fit items-start text-start flex-col gap-4  h-full  ">
        <h3 className="section-subtitle">
          Get in <span className="text-blue">Contact</span>
        </h3>
        <p className="flex font-extralight text-lg max-w-xs text-gray-300">
          Have something in mind? <br /> I'm all ears.
        </p>
      </motion.div>

      <MessageForm />
    </motion.div>
  );
}

export default ContactContent;
