import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

import ContentTitle from "./ContentTitle";
import MessageForm from "./MessageForm";

type Props = {};

function CallToContact({}: Props) {
  return (
    <div className=" relative w-full max-w-7xl text-white mx-auto text-xl md:py-10">
      <div className="relative flex flex-col justify-start gap-4 items-start mx-auto  h-fit">
        <ContentTitle title="Contato" />

        <p className=" text-lg text-gray-300 text-center">
          Tem alguma ideia em mente? Vamos gerar valor juntos.
        </p>

        <div className="py-4 relative flex flex-col w-full  mx-auto items-start justify-center">
          <MessageForm name={""} email={""} subject={""} message={""} />
        </div>
      </div>
    </div>
  );
}

export default CallToContact;
