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
      className="flex flex-col items-start md:text-center  h-fit 
      text-[#fff] rounded-3xl gap-2 w-full max-w-3xl  "
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-6 w-full flex flex-col max-w-3xl  "
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
            focus:outline-none focus:ring focus:ring-blue-500 min-h-[400px] bg-gray-800/50 "
        />

        <motion.button
          type="submit"
          className="bg-blue/80 hover:bg-blue/70 text-white py-6 px-12 rounded-md justify-start 
          transition-all font-medium text-xl
              focus:outline-none focus:ring focus:ring-blue-500 max-md:w-full"
        >
          {isLoading ? "Sending..." : "Start partnership"}
        </motion.button>
      </form>
    </div>
  );
}
