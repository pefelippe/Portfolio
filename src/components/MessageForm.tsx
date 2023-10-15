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
      className="flex flex-col items-center justify-center text-center h-fit  
     w-full max-w-5xl text-[#fff] rounded-3xl gap-2"
    >
      <p className="text-[2rem] md:text-5xl font-semibold  max-w-xl">
        Let's work together
      </p>
      <p className="text-[1.25rem] font-thin max-w-lg   text-gray-300 pb-3">
        I love partnering. Send a concise message and describe your project.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-6 w-full flex flex-col max-w-lg  "
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <input
              {...register("firstName", { required: true, maxLength: 50 })}
              id="first-name"
              placeholder="Enter your first name"
              className="bg-gray-800/50 px-3 py-3 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <input
            {...register("email", { required: true, maxLength: 50 })}
            id="email"
            placeholder="Enter your email"
            type="email"
            className="bg-gray-800/50 px-3 py-3 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <textarea
          {...register("message", { required: true, maxLength: 500 })}
          id="message"
          placeholder="Message"
          className="  px-3 py-3 w-full rounded-md 
            focus:outline-none focus:ring focus:ring-blue-500 min-h-[280px] bg-gray-800/50 "
        />

        <motion.button
          type="submit"
          className="bg-[#000]  text-white py-5 px-12 rounded-md justify-center transition-all font-semibold text-xl
             hover:[#000]/80 focus:outline-none focus:ring focus:ring-blue-500 max-md:w-full"
        >
          {isLoading ? "Sending..." : "Send message"}
        </motion.button>
      </form>
    </div>
  );
}
