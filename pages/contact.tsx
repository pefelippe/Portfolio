import { motion } from "framer-motion";
import MessageForm from "../src/components/MessageForm";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="mt-20 px-4 py-8 max-w-6xl mx-auto w-full"
    >
      <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
      <p className="text-md mb-6 text-[#888]">I dont bite. Lets chat.</p>
      <MessageForm />
    </motion.div>
  );
}
