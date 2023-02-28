import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function MessageForm({}: Inputs) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:pedfelippe@gmail.com?subject=${formData.subject}&body=${formData.name}. ${formData.message} - ${formData.email}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col gap-6 w-full "
    >
      <input
        {...register("name")}
        placeholder="Nome"
        className="contactInput "
        type="text"
      />
      <input
        {...register("email")}
        placeholder="Email"
        className="contactInput"
        type="email"
      />
      <input
        {...register("subject")}
        placeholder="Assunto"
        className="contactInput"
        type="text"
      />
      <textarea
        {...register("message")}
        placeholder="Mensagem"
        className="contactInput"
      />
      <button className="bg-[#5865f2] py-5 px-10 rounded-md text-black font-bold text-xl hover:bg-[#5865f2]/80 text-[#fff] ">
        Enviar Mensagem
      </button>
    </form>
  );
}
