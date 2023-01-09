import React from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

import MessageForm from "../components/MessageForm";

type IProps = {};

function Contact({}: IProps) {
  return (
    <div className="flex max-lg:flex-col justify-between items-center xl:mx-auto max-w-7xl py-20 space-y-4 ">
      <div className="flex flex-col space-y-4 justify-center ">
        <span
          className="text-3xl font-semibold underline w-fit mx-auto  p-2
           bg-[#000] text-[#fff] "
        >
          <p>Entre em Contato</p>
        </span>

        <p className="text-xl">Pronto para começar uma parceria?</p>
        <nav className="flex justify-center items-center  gap-5">
          <a
            href="https://github.com/pefelippe"
            className="border-2 border-[#fff] hover:border-[#222] p-2 rounded-xl transition-all"
          >
            <FaGithub className="relative socialMediaIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-felippe/"
            className="border-2 border-[#fff] hover:border-[#222] p-2 rounded-xl transition-all"
          >
            <FaLinkedinIn className="socialMediaIcon " />
          </a>
        </nav>
      </div>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </div>
  );
}

export default Contact;
