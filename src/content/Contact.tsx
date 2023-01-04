import React from "react";

import MessageForm from "../components/MessageForm";

type IProps = {};

function Contact({}: IProps) {
  return (
    <div className="component-base flex xl:mx-auto  max-w-7xl xl:justify-around py-20 mx-5 space-y-8">
      <h4 className="text-4xl font-semibold ">
        <span className="underline bg-[#F7AB0A] ">Contato</span>
      </h4>

      <div className="flex w-full xl:flex-row justify-around items-center py-10 ">
        <div className="space-y-5 justify-center text-center p-4">
          <span className="text-3xl font-semibold ">
            Pronto para começar uma parceria?
          </span>

          <p className="text-xl">Envie uma Mensagem!</p>
        </div>
        <MessageForm name={""} email={""} subject={""} message={""} />
      </div>
    </div>
  );
}

export default Contact;
