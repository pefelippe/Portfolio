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
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </div>
  );
}

export default Contact;
