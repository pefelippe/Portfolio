import { motion } from "framer-motion";

import About from "../src/content/About";
import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="flex flex-col mt-20 ">
      <section className="bg-[#111] text-white section">
        <Hero />
      </section>
      <section className="border-t section  ">
        <About />
      </section>
      <section className="section border-y bg-gray-300/10">
        <ProjectContent />
      </section>
      <section className="section">
        <ContactContent />
      </section>
    </motion.div>
  );
}
