import { motion } from "framer-motion";

import ContactContent from "./contact";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="w-full flex max-lg:flex-col">
      <motion.div className="w-full flex flex-col  relative  my-16 pt-20 gap-20">
        <section className="section">
          <Hero />
        </section>
        <section className=" section">
          <ProjectContent />
        </section>
      </motion.div>
    </motion.div>
  );
}
