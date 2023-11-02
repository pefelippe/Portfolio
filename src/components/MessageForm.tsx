/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function MessageForm({}) {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsLoading(true);

    const InputsTemplate = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_fchfmmd",
        "template_zrowh3b",
        InputsTemplate,
        "NPHwQIcNMSD-9jIPq"
      )
      .then(
        (res: any) => {
          console.log("enviou", res.status, res.text);
          reset();
          setIsLoading(false);
        },
        (err: any) => {
          console.log("Um erro aconteceu", err);
          setIsLoading(false);
          reset();
        }
      );
  };

  return (
    <div
      className="flex flex-col items-center text-center  h-fit mx-auto 
      text-white rounded-md gap-2 w-full "
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-6 w-full flex flex-col max-w-xl "
      >
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="space-y-4">
            <input
              {...register("firstName", { required: true, maxLength: 50 })}
              id="first-name"
              placeholder="Enter your name"
              className="bg-[#1d1b22] px-6 py-4 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <input
            {...register("email", { required: true, maxLength: 50 })}
            id="email"
            placeholder="Enter your email"
            type="email"
            className="bg-[#1d1b22]  px-6 py-4 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <textarea
          {...register("message", { required: true, maxLength: 500 })}
          id="message"
          placeholder="Message"
          className="  px-6 py-4  rounded-md 
            focus:outline-none focus:ring focus:ring-blue-500 min-h-[250px] md:min-h-[300px] bg-[#1d1b22] "
        />

        <motion.button
          type="submit"
          className="bg-blue/80 hover:bg-blue/70 text-white py-4 px-12 rounded-md justify-start 
          transition-all font-medium text-xl focus:outline-none focus:ring focus:ring-blue-500 "
        >
          {isLoading ? "Sending..." : "Start partnership"}
        </motion.button>
      </form>
    </div>
  );
}
