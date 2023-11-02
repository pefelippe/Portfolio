/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.a
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      href="/contact"
      className="flex w-full gap-10
      max-w-5xl items-center bg-[#1d1b22] rounded-3xl overflow-hidden  border-2 hover:border-gray-100 mx-auto py-32"
    >
      <h1>get in touch</h1>
    </motion.a>
  );
}

export default Contact;
