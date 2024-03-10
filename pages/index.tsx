import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import AboutSection from "../src/sections/AboutSection";
import ContactSection from "../src/sections/ContactSection";
import ProjectSection from "../src/sections/ProjectSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col h-full w-full relative py-40 gap-40 mx-auto max-w-4xl">
      <section className="section">
        <HeroSection />
      </section>

      <section className="section">
        <ProjectSection />
      </section>
    </motion.div>
  );
}
