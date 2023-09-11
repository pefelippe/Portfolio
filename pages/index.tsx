import { motion } from "framer-motion";

import Hero from "../src/content/Hero";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col w-screen max-w-screen-2xl mx-auto  gap-10  px-10 min-h-fit"
    >
      <Hero />
    </motion.div>
  );
}
