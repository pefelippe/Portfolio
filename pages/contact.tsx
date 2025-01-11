import { motion } from "framer-motion";
import MessageForm from "../src/components/MessageForm";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex w-full my-[10vh] flex-col items-center justify-center mx-auto  max-md:px-4 "
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2 text-indigo-600 ">
          Get in touch
        </h1>
      </motion.div>
      <MessageForm />
    </motion.div>
  );
}
