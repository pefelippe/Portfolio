import { motion } from "framer-motion";
import MessageForm from "../src/components/MessageForm";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex w-full min-h-screen flex-col items-center justify-center mx-auto bg-indigo-700 max-md:px-6"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-2 text-white ">Get in touch</h1>
      </motion.div>
      <MessageForm />
    </motion.div>
  );
}
