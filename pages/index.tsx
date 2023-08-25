/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Contact from "../src/content/contact";
import Skills from "../src/content/Skills";
import Hero from "../src/content/Hero";
import About from "../src/content/About";
import Resume from "../src/content/Resume";
import Projects from "./projects";

export default function Home() {
  return (
    <motion.div className="max-w-7xl mx-auto flex flex-col text-start leading-[1.1] max-lg:items-center max-lg:justify-center">
      <Hero />
      <About />
      {/* <Skills /> */}
      {/* <Resume /> */}
      {/* <Projects /> */}
      <Contact />
    </motion.div>
  );
}
