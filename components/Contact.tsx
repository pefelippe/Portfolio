import { EnvelopeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import MessageForm from "./atoms/MessageForm";

type IProps = {};

function Contact({}: IProps) {
  return (
    <div className="component-base xl:flex-row xl:justify-around m-5 xl:mx-auto">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-300 text-2xl ">
        Contato
      </h3>

      <div className="space-y-5">
        <span className="text-3xl font-semibold decoration-[#F7AB0A]/50 underline">
          Envie uma Mensagem!
        </span>
        <p className="text-xl">Pronto para começar uma parceria?</p>

        <div className="flex items-center">
          <EnvelopeIcon className="w-5 h-5 mr-2" />
          <p>pedfelippe@gmail.com</p>
        </div>
        <div className="flex space-x-2">
          <a className="cursor-pointer">
            <FaGithubSquare />
          </a>
          <a className="cursor-pointer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </div>
  );
}

export default Contact;
