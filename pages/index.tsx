import { motion } from "framer-motion";

import ProjectContent from "../src/content/ProjectContent";
import About from "./about";
import Contact from "./contact";

export default function Home() {
  return (
    <motion.div className="flex flex-col h-full w-full relative pb-20 gap-10">
      <section className="section ">
        <About />
      </section>
      <section className="section ">
        <ProjectContent />
      </section>
      {/* <section className="section py-32">
        <Contact />
      </section> */}
    </motion.div>
  );
}
