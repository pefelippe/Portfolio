import { motion } from "framer-motion";

import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Contact from "./contact";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col w-screen max-w-7xl mx-auto  gap-40  px-10 min-h-fit py-40"
    >
      <Hero />
      {/* <About /> */}
      {/* <Skills /> */}
      <Contact />
    </motion.div>
  );
}
