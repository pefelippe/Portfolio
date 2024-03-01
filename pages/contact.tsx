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
      className=" h-full flex flex-col gap-4 items-center text-start justify-center w-full max-w-5xl
       text-white  rounded-3xl "
    >
      <motion.div className="flex w-full items-start text-start flex-col gap-4 h-full  ">
        <h3 className="section-subtitle dark:text-white text-[#040404]">
          Get in <span className="text-blue dark:text-yellow-300">Contact</span>
        </h3>
        {/* <p className="flex font-extralight text-lg  text-gray-300">
          Have something in mind? <br /> I'm all ears.
        </p> */}
      </motion.div>

      <MessageForm />
    </motion.div>
  );
}

export default ContactContent;
