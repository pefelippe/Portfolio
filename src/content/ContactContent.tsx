/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function ContactContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center w-full mx-auto  max-w-7xl py-10 xl:py-20 max-xl:max-w-3xl
     h-fit px-6 items-center relative  max-xl:flex-col "
    >
      <div className="relative h-full w-full flex justify-between gap-8 flex-col  items-center">
        <div className=" flex flex-col gap-6 xl:gap-8 h-full items-center justify-between ">
          <h1 className="text-4xl xl:text-6xl  font-bold leading-[1.2] max-w-3xl w-fit text-center">
            I'm here to help bring your ideas to reality.
          </h1>
        </div>
        <MessageForm />
      </div>
    </motion.div>
  );
}

export default ContactContent;
