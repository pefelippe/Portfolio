import { motion } from "framer-motion";

import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";
import AboutContent from "./about";
import ContactContent from "./contact";

export default function Home() {
  return (
    <motion.div className="w-full flex flex-col relative mt-24 py-8 md:py-16 max-w-screen-2xl mx-auto  gap-8 md:gap-16">
      <section className="section ">
        <AboutContent />
      </section>
      <section className="section">
        <ProjectContent />
      </section>
      <section className="section">
        <ContactContent />
      </section>
    </motion.div>
  );
}
