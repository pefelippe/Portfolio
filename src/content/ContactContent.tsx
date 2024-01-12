/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function ContactContent() {
  return (
    <motion.div
      id="contact-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="content-intern "
    >
      <div className="w-full font-normal flex flex-col justify-center text-lg  h-fit ">
        <h1 className="section-title">Get in touch.</h1>
        <h3 className="section-subtitle">
          Drop me a message and let's make things happen!
        </h3>
      </div>

      <MessageForm />
    </motion.div>
  );
}

export default ContactContent;
