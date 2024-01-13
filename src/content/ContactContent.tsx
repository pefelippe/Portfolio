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
      className="content-intern flex-row max-lg:flex-col max-lg:max-w-2xl items-center text-center"
    >
      <div className="w-full font-normal flex flex-col justify-center text-lg max-lg:text-start text-center items-center h-full gap-6">
        <h3 className="section-subtitle">Let's make things happen!</h3>

        <p className="max-w-md">
          Have something in mind? Questions, ideas, or just want to say hi? I'm
          all ears. Let's bring your projects to life together! Reach out and
          let's start crafting something extraordinary.
        </p>
      </div>

      <MessageForm />
    </motion.div>
  );
}

export default ContactContent;
