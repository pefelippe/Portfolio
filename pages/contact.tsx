/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-fit min-h-screen mx-auto w-full max-w-xl flex  flex-col items-center justify-start  gap-6 max-xl:px-8"
    >
      <h1 className="text-6xl font-thin xs:text-4xl  leading-tight text-gray-100 ">
        Get in touch.
      </h1>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
