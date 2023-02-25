import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../src/components/MessageForm";
import ContentTitle from "./../src/atoms/ContentTitle";

type IProps = {};

function Contact({}: IProps) {
  return (
    <motion.div
      id="contact"
      className="relative  gap-4
      flex flex-col items-center justify-center h-fit
      text-center bg-[#f9f9f9] min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-4 justify-center items-center mx-auto text-center py-4 w-full  "
      >
        <ContentTitle title="Pronto para começar uma parceria?" />
      </motion.div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
