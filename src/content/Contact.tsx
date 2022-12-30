import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import MessageForm from "../components/MessageForm";

type IProps = {};

function Contact({}: IProps) {
  return (
    <div className="component-base xl:flex-row h-fit max-w-7xl xl:justify-between xl:mx-auto py-32 mx-5 space-y-5 ">
      <div className="space-y-5  justify-center text-center">
        <span className="text-3xl  font-semibold ">
          Pronto para começar uma parceria?
        </span>
        <p className="text-xl ">Envie uma Mensagem!</p>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </div>
  );
}

export default Contact;
