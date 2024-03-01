import { motion } from "framer-motion";

import ProjectContent from "../src/content/ProjectContent";
import About from "./about";
import Contact from "./contact";

export default function Home() {
  return (
    <motion.div className="flex flex-col h-full w-full relative  lg:gap-12 ">
      <section className="section max-w-5xl mx-auto py-12">
        <About />
      </section>
      <section className="section">
        <ProjectContent />
      </section>
      <section className="section py-12 w-full">
        <Contact />
      </section>
    </motion.div>
  );
}
