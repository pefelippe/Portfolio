import { motion } from "framer-motion";

import About from "../src/content/About";
import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="mt-16">
      <section className="section border-b bg-gray-100/30 dark:bg-[#101010]">
        <Hero />
      </section>
      <section className="section ">
        <About />
      </section>
      <section className="section border-y  bg-gray-100/30 dark:bg-[#101010]">
        <ProjectContent />
      </section>
      <section className="section ">
        <ContactContent />
      </section>
    </motion.div>
  );
}
