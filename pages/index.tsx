/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import About from "../src/content/About";
import Contact from "../src/content/contact";
import Hero from "../src/content/Hero";
import Resume from "../src/content/Resume";
import Skills from "../src/content/Skills";
import Projects from "./projects";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col text-start"
    >
      {/* <section className="">
        <Hero />
      </section> */}
      <section className="white-component">
        <About />
      </section>

      {/* <section className="component">
        <Skills />
      </section> */}
      <section className="component">
        <Contact />
      </section>
    </motion.div>
  );
}
