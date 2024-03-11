import { motion } from "framer-motion";

import AboutSection from "../src/sections/AboutSection";
import ContactSection from "../src/sections/ContactSection";
import HeroSection from "../src/sections/HeroSection";
import ProjectSection from "../src/sections/ProjectSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col h-full w-full relative mx-auto my-20 ">
      <section className="section">
        <HeroSection />
      </section>

      <section className="section">
        <ProjectSection />
      </section>
    </motion.div>
  );
}
