import React from "react";

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
      </div>
      <MessageForm name={""} email={""} subject={""} message={""} />
    </div>
  );
}

export default Contact;
