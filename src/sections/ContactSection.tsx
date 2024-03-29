/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

import MessageForm from "../components/MessageForm";

function ContactSection() {
  return (
    <div
      id="contact-container"
      className=" flex flex-col  text-start justify-center  w-full gap-6  items-center min-h-screen px-6
    dark:text-white"
    >
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="firstTitle"
      >
        Get in contact
      </motion.p>

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
        or contact me above.
      </motion.p> */}
      <MessageForm />
    </div>
  );
}

export default ContactSection;
