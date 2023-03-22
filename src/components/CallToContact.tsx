import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

import ContentTitle from "./ContentTitle";
import MessageForm from "./MessageForm";

type Props = {};

function CallToContact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="h-[70vh] relative w-full max-w-7xl text-white mx-auto text-xl "
    >
      <div className="mx-auto relative flex flex-col justify-center gap-6  h-fit">
        <p className=" text-[2.5rem] text-white font-medium mx-auto underline decoration-[#5865f2]">
          Tem alguma ideia em mente?
        </p>
        <p className=" text-[1.5rem] font-medium text-gray-300 mx-auto">
          Manda uma <b className="text-white ">mensagem</b>!
        </p>

        <div className=" relative flex flex-col w-full mx-auto justify-center items-center">
          <MessageForm name={""} email={""} subject={""} message={""} />
        </div>
      </div>
    </motion.div>
  );
}

export default CallToContact;
