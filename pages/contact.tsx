import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../src/components/MessageForm";

type Props = {};

function CallToContact({}: Props) {
  return (
    <motion.div
      className="relative h-fit   max-md:py-10 mx-auto  text-xl max-xl:px-8  rounded-md max-w-4xl
      flex flex-col justify-start  items-center text-center text-[#161616] mt-[15vh]"
    >
      <div className="flex flex-col gap-4  w-full text-center  ">
        <p className=" text-[3rem] lg:text-[4rem] leading-tight font-semibold">
          Manda uma <b className=" bg-blue text-white px-2">mensagem</b>!
        </p>
        <p className="text-[1.8rem] font-medium text-gray-500 mx-auto max-w-xl text-center">
          Pronto para começar uma parceria?
        </p>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default CallToContact;
