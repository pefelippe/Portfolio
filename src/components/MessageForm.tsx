import { motion } from "framer-motion";
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
      className="flex flex-col space-y-5 w-1/2 min-w-[400px]"
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
        className="contactInput "
        type="text"
      />
      <textarea
        {...register("message")}
        placeholder="Mensagem"
        className="contactInput h-40"
      />
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#F7AB0A] w-fit mx-auto rounded-lg py-5 px-10 hover:underline  text-black font-bold text-xl hover:bg-[#F7AB0A]/90 text-[#1c1c1c] transition-all"
      >
        Enviar Mensagem
      </motion.button>
    </form>
  );
}
