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
      className=" flex flex-col text-start justify-center  w-full min-h-screen items-center max-w-4xl mx-auto gap-10
    dark:text-white px-6"
    >
      <div className=" flex flex-col gap-10 w-full">
        <h1 className="text-3xl md:text-5xl tracking-tighter font-semibold underline decoration-indigo-500">
          Contact-me
        </h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className=" text-lg font-normal text-left leading-relaxed dark:text-gray-300 "
        >
          Hey there! I'm here to chat. Got something on your mind? <br />
          Feel free to shoot me an email at{" "}
          <Link
            href="mailto:pedfelippe@gmail.com"
            className="underline text-white font-medium hover:text-blue transition-all"
          >
            pedfelippe@gmail.com
          </Link>{" "}
          or contact me: <br />
          <br />
        </motion.p> */}
      </div>
      <MessageForm />
    </motion.div>
  );
}

export default ContactSection;
