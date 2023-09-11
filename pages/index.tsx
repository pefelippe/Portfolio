import { motion } from "framer-motion";

import BlogPosts from "../src/components/BlogPosts";
import Links from "../src/components/Links";
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
      className=" flex flex-col min-h-screen w-screen max-w-screen-2xl mx-auto  gap-10  px-10  "
    >
      <Hero />

      {/* <BlogPosts /> */}

      {/* <section id="about" className="  w-screen flex mx-auto bg-[#1A1A1C]  ">
        <About />
      </section> */}

      {/* <section id="projects" className="md:p-20 p-10 ">
        <Projects />
      </section> */}

      {/* <section id="contact" className=" w-full mx-auto">
        <Contact />
      </section> */}
    </motion.div>
  );
}
