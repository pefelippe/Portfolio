import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/useToast";

interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const EMAIL_SERVICE_ID = "service_fchfmmd";
const EMAIL_TEMPLATE_ID = "template_zrowh3b";
const EMAIL_PUBLIC_KEY = "NPHwQIcNMSD-9jIPq";

export default function MessageForm() {
  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    setIsLoading(true);

    try {
      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        EMAIL_PUBLIC_KEY,
      );

      console.log("Email sent successfully:", response.status, response.text);
      reset();
      toast({ title: "Message Sent!" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.25 }}
      className="flex flex-col items-start w-full  gap-6 text-center rounded-md h-fit dark:text-white"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4"
      >
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Input
            {...register("firstName", { required: true, maxLength: 50 })}
            id="first-name"
            placeholder="Enter your name"
            className="p-3 w-full border-none dark:bg-[#202020] py-6 rounded"
          />
          <Input
            {...register("email", { required: true, maxLength: 50 })}
            id="email"
            placeholder="Enter your email"
            type="email"
            className="p-3 w-full border-none dark:bg-[#202020] py-6 rounded"
          />
        </div>
        <Textarea
          {...register("message", { required: true, maxLength: 500 })}
          id="message"
          placeholder="Message"
          className="p-3 w-full border-none dark:bg-[#202020] min-h-[250px] rounded"
        />
        <Button
          type="submit"
          className="text-center p-6 px-14 bg-white w-full mx-auto rounded transition-all 
          font-semibold text-base  tracking-[1px] focus:outline-none "
        >
          {isLoading ? "Sending..." : "send message"}
        </Button>
      </form>
    </motion.div>
  );
}
