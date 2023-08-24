/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Contact from "../src/content/contact";
import Hero from "../src/content/Hero";

export default function Home() {
  return (
    <motion.div className="max-w-7xl mx-auto flex flex-col text-start leading-[1.1] gap-40 py-20 max-lg:items-center max-lg:justify-center">
      <Hero />
      <Contact />
    </motion.div>
  );
}
