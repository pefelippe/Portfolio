import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import MessageForm from "../components/MessageForm";

type IProps = {};

function Contact({}: IProps) {
  return (
    <div className="component-base h-fit xl:flex-row xl:justify-evenly xl:mx-auto space-y-10 py-32 m-5 ">
      <div className="space-y-5  justify-center ">
        <span className="text-3xl text-[#fff] font-semibold decoration-[#F7AB0A]/50 underline">
          Envie uma Mensagem!
        </span>
        <p className="text-xl text-[#EBEBEB99]">
          Pronto para começar uma parceria?
        </p>
        <nav className="flex justify-center  items-center gap-10 ">
          <a href="#" className="">
            <FaGithub className="h-6 w-6  hover:text-[#F7AB0A]" />
          </a>
          <a href="#" className="">
            <FaLinkedinIn className="h-6 w-6  hover:text-[#F7AB0A]" />
          </a>
          <a href="#" className="">
            <FaInstagram className="h-6 w-6  hover:text-[#F7AB0A]" />
          </a>
        </nav>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </div>
  );
}

export default Contact;
