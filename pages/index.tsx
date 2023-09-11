import { motion } from "framer-motion";

import LinksDetailed from "../src/components/LinksDetailed";
import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Contact from "./contact";
import Projects from "./projects";
import BlogPosts from "../src/components/BlogPosts";
import Links from "../src/components/Links";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col min-h-fit w-screen max-w-lg mx-auto  gap-20 py-20 px-10"
    >
      <Hero />

      <BlogPosts />

      {/* <section id="about" className="  w-screen flex mx-auto bg-[#1A1A1C]  ">
        <About />
      </section> */}

      {/* <section
        id="projects"
        className="  w-screen flex mx-auto bg-[#141414] md:p-20 p-10 "
      >
        <Projects />
      </section> */}

      {/* <section id="contact" className=" w-screen  mx-auto">
        <Contact />
      </section> */}
    </motion.div>
  );
}
