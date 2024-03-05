/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

import MessageForm from "../src/components/MessageForm";

function ContactContent() {
  return (
    <div
      className="section flex flex-col gap-6 items-center text-center justify-center  w-full
     max-w-4xl  mx-auto py-20 dark:text-white"
    >
      <motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="firstTitle"
        >
          Contact
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="firstDesc"
        >
          Hey there! I'm here to chat. Got something on your mind? Feel free to
          shoot me an email at{" "}
          <Link
            href="mailto:pedfelippe@gmail.com"
            className="underline dark:text-white font-medium hover:text-blue dark:hover:text-yellow-300"
          >
            pedfelippe@gmail.com
          </Link>{" "}
          or contact me above.
        </motion.p>
      </motion.div>

      <MessageForm />
    </div>
  );
}

export default ContactContent;
