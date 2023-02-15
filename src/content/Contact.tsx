import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

import MessageForm from "../components/MessageForm";

type IProps = {};

function Contact({}: IProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[90vh] gap-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center max-w-7xl  lg:mx-auto px-8 "
    >
      <div className="space-y-4 justify-center text-center p-4">
        <span className="text-3xl font-semibold ">
          Pronto para começar uma parceria?
        </span>
        <p className="text-xl">Envie uma Mensagem!</p>
      </div>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default Contact;
