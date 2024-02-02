import { motion } from "framer-motion";

import ContactContent from "./contact";
import Hero from "../src/content/Hero";

import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="w-full flex max-lg:flex-col ">
      <motion.div className="w-full flex flex-col  relative  mt-16  py-16 gap-16">
        <section className="section">
          <Hero />
        </section>
        <section className=" section py-0">
          <ProjectContent />
        </section>
      </motion.div>
    </motion.div>
  );
}
