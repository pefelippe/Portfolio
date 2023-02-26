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
      flex flex-col xl:flex-row items-center justify-center h-fit
      text-center  py-20 snap-center  border-2 border-[#242424]  bg-[#121212]  rounded-2xl  max-w-7xl mx-auto"
    >
      <ContentTitle title="Pronto para começar uma parceria?" />

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
