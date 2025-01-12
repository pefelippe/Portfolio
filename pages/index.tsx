import { motion } from "framer-motion";

import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-start justify-start w-full mx-auto gap-6 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <About />
      {/* <Projects /> */}
      <Contact />
    </motion.div>
  );
}
