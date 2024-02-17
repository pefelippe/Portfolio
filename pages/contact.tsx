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
      className="content-intern my-auto items-start text-start justify-center gap-6 "
    >
      <div className="flex flex-col gap-2 ">
        <h3 className="section-subtitle text-4xl lg:text-5xl">
          Get in <span className="text-blue">Contact</span>
        </h3>

        {/* <p className="text-xl max-w-xl">
          Have something in mind? Questions, ideas, or just want to say hi? I'm
          all ears.
        </p> */}
      </div>

      <MessageForm />
    </motion.div>
  );
}

export default ContactContent;
