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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto py-4 rounded-md "
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <motion.div>
            <Input
              {...register("firstName", { required: true, maxLength: 50 })}
              placeholder="Your name"
              className="w-full bg-gray-200 border-gray-300 text-black placeholder-gray-500 
              py-6 transition duration-200"
            />
          </motion.div>
          <motion.div>
            <Input
              {...register("email", { required: true, maxLength: 50 })}
              type="email"
              placeholder="Your email"
              className="w-full bg-gray-200 border-gray-300 text-black placeholder-gray-500 
              py-6 transition duration-200"
            />
          </motion.div>
        </div>
        <motion.div>
          <Textarea
            {...register("message", { required: true, maxLength: 500 })}
            placeholder="Your message"
            className="w-full bg-gray-200 border-gray-300 text-black placeholder-gray-500
             transition duration-200 min-h-[220px]"
          />
        </motion.div>

        <Button
          type="submit"
          className="w-full bg-indigo-500 text-white mt-4 bg-opacity-80 py-6 font-semibold px-6 
          text-md rounded-md transition duration-300 ease-in-out transform"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
}
