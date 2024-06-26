// import { Label } from "./ui/label"
/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/useToast";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function MessageForm({}) {
  const { register, handleSubmit, reset } = useForm<Inputs>();

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
        "NPHwQIcNMSD-9jIPq",
      )
      .then(
        (res: any) => {
          console.log("enviou", res.status, res.text);
          reset();
          setIsLoading(false);

          toast({
            title: "Message Sended!",
          });
        },
        (err: any) => {
          console.log("Um erro aconteceu", err);
          setIsLoading(false);

          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your message.",
          });
          reset();
        },
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.75 }}
      className="flex flex-col items-start w-full max-w-xl gap-6 text-center rounded-md h-fit dark:text-white"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4 "
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            {...register("firstName", { required: true, maxLength: 50 })}
            id="first-name"
            placeholder="Enter your name"
            className=" p-3 w-full  border-none bg-[#212531] py-6 rounded"
          />

          <Input
            {...register("email", { required: true, maxLength: 50 })}
            id="email"
            placeholder="Enter your email"
            type="email"
            className=" p-3 w-full  border-none bg-[#212531] py-6 rounded"
          />
        </div>

        <Textarea
          {...register("message", { required: true, maxLength: 500 })}
          id="message"
          placeholder="Message"
          className=" p-3  w-full  border-none bg-[#212531] min-h-[250px] md:min-h-[350px] rounded"
        />

        <Button
          type="submit"
          className=" text-center  p-7 px-14 dark:text-white    w-fit mx-auto rounded  
          transition-all font-semibold text-base uppercase tracking-[1px] focus:outline-none focus:ring focus:ring-blue-500 hover:underline"
        >
          {isLoading ? "Sending..." : "Send message"}
        </Button>
      </form>
    </motion.div>
  );
}
