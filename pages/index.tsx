import { motion } from "framer-motion";

import About from "../src/content/About";
import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="mt-24">
      <section className="section  ">
        <Hero />
      </section>
      <section className="section border-t">
        <About />
      </section>
      <section className="section border-y ">
        <ProjectContent />
      </section>
      <section className="section ">
        <ContactContent />
      </section>
    </motion.div>
  );
}
