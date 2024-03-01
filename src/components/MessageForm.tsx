// import { Label } from "./ui/label"
/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
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
    <div className="flex flex-col items-start text-center  h-fit  rounded-md gap-6 w-full  text-white  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-4 w-full flex flex-col   "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            {...register("firstName", { required: true, maxLength: 50 })}
            id="first-name"
            placeholder="Enter your name"
            className=" p-3 w-full  border-none bg-gray-300/30 py-7 rounded"
          />

          <Input
            {...register("email", { required: true, maxLength: 50 })}
            id="email"
            placeholder="Enter your email"
            type="email"
            className=" p-3 w-full  border-none bg-gray-300/30 py-7 rounded"
          />
        </div>

        <Textarea
          {...register("message", { required: true, maxLength: 500 })}
          id="message"
          placeholder="Message"
          className=" p-3  w-full  border-none bg-gray-300/30 min-h-[200px] lg:min-h-[350px] rounded"
        />

        <Button
          type="submit"
          className=" text-center  p-7 px-14 dark:text-white    w-fit rounded  dark:bg-gray-900
          transition-all font-medium text-base uppercase tracking-[1px] focus:outline-none focus:ring focus:ring-blue-500 hover:underline"
        >
          {isLoading ? "Sending..." : "Send message"}
        </Button>
      </form>
    </div>
  );
}
