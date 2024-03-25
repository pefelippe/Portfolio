/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

import MessageForm from "../src/components/MessageForm";

function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      id="contact-container"
      className=" flex flex-col text-center justify-center  w-full min-h-screen items-center max-w-4xl mx-auto gap-6 dark:text-white px-6 py-20"
    >
      <div className=" flex flex-col gap-3 w-full">
        <h1 className="text-3xl md:text-5xl tracking-tighter font-semibold underline decoration-indigo-500">
          Contact-me
        </h1>
      </div>
      <MessageForm />
    </motion.div>
  );
}

export default ContactSection;
