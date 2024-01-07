/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function ContactContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mx-auto justify-center items-center  relative w-full h-full min-h-fit  gap-4 max-w-3xl"
    >
      <h1 className="text-[40px] xl:text-5xl  font-bold tracking-tighter ">
        Contact-me.
      </h1>
      <h3 className="w-fit text-[20px] pb-2 ">
        Drop me a message and let's{" "}
        <span className="underline underline-offset-4 decoration-blue">
          make things happen!
        </span>
      </h3>
      <MessageForm />
    </motion.div>
  );
}

export default ContactContent;
