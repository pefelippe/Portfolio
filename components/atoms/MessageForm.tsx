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
      className="flex flex-col space-y-5 w-fit "
    >
      <div className="flex space-x-2">
        <input
          {...register("name")}
          placeholder="Nome"
          className="contactInput"
          type="text"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="contactInput"
          type="email"
        />
      </div>
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
      <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0A]/90">
        Enviar Mensagem
      </button>
    </form>
  );
}
