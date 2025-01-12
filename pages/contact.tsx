import { motion } from "framer-motion";
import MessageForm from "../src/components/MessageForm";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex w-full min-h-screen flex-col items-center justify-center mx-auto bg-blue max-md:px-6"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-6xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
            Let's Connect!
          </h1>
          <p className="text-xl text-indigo-100 max-w-xl mx-auto md:mx-0 mb-4">
            Have a question or want to collaborate? We'd love to hear from you.
            Send me a message!
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <MessageForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
