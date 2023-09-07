import { motion } from "framer-motion";

import Hero from "../src/content/Hero";

import Contact from "./contact";
import Projects from "./projects";
import About from "../src/content/About";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col min-h-fit w-screen gap-40 py-40"
    >
      <section id="hero" className="px-20 max-md:px-10  ">
        <Hero />
      </section>

      {/* <section
        id="hero"
        className="min-h-screen  w-full flex mx-auto   bg-[#1A1A1C] p-20  max-md:px-10 flex-col gap-10 "
      >
        <Projects />
      </section> */}

      <section id="hero" className=" bg-[#1A1A1C] px-20 max-md:px-10 ">
        <Contact />
      </section>
    </motion.div>
  );
}
