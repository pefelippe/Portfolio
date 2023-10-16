/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full flex text-white max-md:flex-col items-center justify-start gap-20 max-w-6xl  max-xl:px-8  "
    >
      <div className="w-full max-w-xl justify-center gap-4 items-center flex flex-col text-center">
        <p className="flex text-6xl font-bold  text-center  ">Contact-me.</p>
        <p className="text-lg font-thin max-w-sm   text-gray-300 pb-3">
          I love partnering. Send a concise message and describe your project.
          Let's work together.
        </p>
      </div>
      <MessageForm />
    </motion.div>
  );
}

export default Contact;
