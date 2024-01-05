/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import { Button } from "./ui/button";
import { useToast } from "./ui/useToast";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};


export default function MessageForm({}) {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
          setOpen(false);
          toast({
            title: "Message Sended!",
          });
        },
        (err: any) => {
          console.log("Um erro aconteceu", err);
          setIsLoading(false);
          setOpen(false);
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your message.",
          });
          reset();
        }
      );
  };

  return (
    <div
      className="flex flex-col items-center text-center  h-fit text-[#101010] rounded-md gap-2 w-full max-w-xxl"
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
          className=" border border-[#242424] px-6 py-3  rounded-md 
            focus:outline-none focus:ring focus:ring-blue-500 min-h-[250px] lg:min-h-[400px] shadow  bg-[#202020]/10"
        />

        <Button
          type="submit"
          className=" text-center  py-7  text-white  px-12 rounded-md justify-start  mx-auto
          transition-all font-medium text-xl focus:outline-none focus:ring focus:ring-blue-500 "
        >
          {isLoading ? "Sending..." : "Start partnership!"}
        </Button>
      </form>
    </div>
  );
}
