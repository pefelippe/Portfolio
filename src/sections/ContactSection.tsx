/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

import MessageForm from "../components/MessageForm";

function ContactSection() {
  return (
    <div
      id="contact-container"
      className="section flex flex-col gap-8  text-start justify-center  w-full pb-20
    dark:text-white"
    >
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="text-3xl md:text-5xl tracking-tighter font-semibold underline decoration-indigo-500"
      >
        Get in contact
      </motion.p>

      {/* <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="max-w-4xl text-2xl text-left leading-relaxed dark:text-gray-300 mb-6"
      >
        Hey there! I'm here to chat. Got something on your mind? <br />
        Feel free to shoot me an email at{" "}
        <Link
          href="mailto:pedfelippe@gmail.com"
          className="underline dark:text-white font-medium hover:text-blue dark:hover:text-yellow-300"
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
