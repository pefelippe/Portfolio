/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col w-full items-center text-center  justify-center max-w-xl "
    >
      <div className="leading-1 gap-3 flex flex-col justify-between items-center  text-center   w-full  ">
        <h1 className="text-sm leading-tight font-bold  w-fit uppercase tracking-[8px] bg-blue text-white p-1">
          Contact
        </h1>
        <h1 className="text-[1.6rem]  leading-tight   sm:text-3xl ">
          Let's work together.
        </h1>
        <h3 className="text-gray-300 mb-6  text-xl  font-light">
          Send a concise message and describe your project.
        </h3>
      </div>
      <MessageForm />
    </motion.div>
  );
}

export default Contact;
