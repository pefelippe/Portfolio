/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" mx-auto w-full flex  flex-col items-center justify-center  gap-6 max-xl:px-8 max-w-xl"
    >
      <MessageForm />
    </motion.div>
  );
}

export default Contact;
