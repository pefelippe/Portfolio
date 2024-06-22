/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

import MessageForm from "../components/MessageForm";

function ContactSection() {
  return (
    <div
      id="contact-container"
      className="flex flex-col items-center justify-center w-full min-h-screen gap-6 px-6  text-start dark:text-white"
    >
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="firstTitle"
      >
        Get in contact
      </motion.p>

      <MessageForm />
    </div>
  );
}

export default ContactSection;
