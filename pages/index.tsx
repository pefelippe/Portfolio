import { motion } from "framer-motion";

import ContactContent from "./contact";
import Hero from "../src/content/Hero";
import AboutContent from "../src/content/AboutContent";

import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="w-full flex max-lg:flex-col ">
      <motion.div className="w-full flex flex-col  relative  mt-16 ">
        <section className="section">
          <Hero />
        </section>
        <section className=" section bg-gray-300/10 border-y">
          <AboutContent />
        </section>
        <section className=" section  border-y">
          <ProjectContent />
        </section>
      </motion.div>
    </motion.div>
  );
}
