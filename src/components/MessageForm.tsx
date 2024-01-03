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
      className="flex flex-col items-center text-center  h-fit 
      text-white rounded-md gap-2 w-full lg:max-w-2xl"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-5 w-full flex flex-col   "
      >
        <div className="grid gap-5  grid-cols-1 lg:grid-cols-2">
          <div className="space-y-4">
            <input
              {...register("firstName", { required: true, maxLength: 50 })}
              id="first-name"
              placeholder="Enter your name"
              className="shadow border border-[#242424] px-6 py-4 w-full 
              rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-[#202020]/10"
            />
          </div>
          <input
            {...register("email", { required: true, maxLength: 50 })}
            id="email"
            placeholder="Enter your email"
            type="email"
            className="shadow border border-[#242424] px-6 py-4 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-[#202020]/10"
          />
        </div>

        <textarea
          {...register("message", { required: true, maxLength: 500 })}
          id="message"
          placeholder="Message"
          className=" border border-[#242424] px-6 py-4  rounded-md 
            focus:outline-none focus:ring focus:ring-blue-500 min-h-[250px] lg:min-h-[450px] shadow  bg-[#202020]/10"
        />

        <motion.button
          type="submit"
          className="bg-blue/95 hover:bg-blue/80 text-white py-4  px-12 rounded-md justify-start w-full  mx-auto
          transition-all font-medium text-xl focus:outline-none focus:ring focus:ring-blue-500bg-[#f5f5f5] "
        >
          {isLoading ? "Sending..." : "Start partnership!"}
        </motion.button>
      </form>
    </div>
  );
}
