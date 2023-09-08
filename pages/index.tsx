import { motion } from "framer-motion";

import LinksDetailed from "../src/components/LinksDetailed";
import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Contact from "./contact";
import Projects from "./projects";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col min-h-fit w-screen"
    >
      <section id="hero" className="px-10  ">
        <Hero />
      </section>

      {/* <section
        id="hero"
        className="  w-screen flex mx-auto bg-[#1d1d1d] p-20  max-md:px-10 flex-col gap-10 "
      >
        <Projects />
      </section> */}

      {/* <section id="hero" className=" bg-[#000] px-20 max-md:px-10 ">
        <Contact />
      </section> */}
    </motion.div>
  );
}
