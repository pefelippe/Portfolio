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
      className="w-full max-w-xl mx-auto bg-[#141418] p-4 rounded-md shadow-xl"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Input
              {...register("firstName", { required: true, maxLength: 50 })}
              placeholder="Your name"
              className="w-full bg-[#1c1c20] border-[#2a2a2e] text-white
               placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent py-6
                transition duration-200"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Input
              {...register("email", { required: true, maxLength: 50 })}
              type="email"
              placeholder="Your email"
              className="w-full bg-[#1c1c20] border-[#2a2a2e] text-white placeholder-gray-400 py-6
              focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
          <Textarea
            {...register("message", { required: true, maxLength: 500 })}
            placeholder="Your message"
            className="w-full bg-[#1c1c20] border-[#2a2a2e] text-white placeholder-gray-400
             focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 min-h-[220px]"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="submit"
            className="w-full bg-blue-600 mt-4 hover:bg-blue-700 py-6 bg-white font-semibold px-6 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
