import React from "react";

import MessageForm from "../components/MessageForm";

type IProps = {};

function Contact({}: IProps) {
  return (
    <div className="xl:mx-auto max-w-7xl py-20 mx-5">
      <div className="flex justify-around">
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
    </div>
  );
}

export default Contact;
