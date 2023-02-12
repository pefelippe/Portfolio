import React from "react";

import MessageForm from "../src/components/MessageForm";

type IProps = {};

function Contact({}: IProps) {
  return (
    <div className=" flex flex-col justify-center md:justify-center items-center max-w-7xl  xl:mx-auto px-8 ">
      <div className="space-y-5 justify-center text-center p-4">
        <span className="text-3xl font-semibold ">
          Pronto para começar uma parceria?
        </span>

        <p className="text-xl">Envie uma Mensagem!</p>
      </div>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </div>
  );
}

export default Contact;
