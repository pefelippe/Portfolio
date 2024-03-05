import AboutSection from "../src/sections/AboutSection";
import { motion } from "framer-motion";

import ContactSection from "../src/sections/ContactSection";
import HeroSection from "../src/sections/HeroSection";
import ProjectSection from "../src/sections/ProjectSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col h-full w-full relative   mx-auto py-6 lg:py-12 gap-12 lg:gap-24">
      <section className="section ">
        <AboutSection />
      </section>
      <section className="section w-full">
        <ProjectSection />
      </section>
      <section className="section w-full ">
        <ContactSection />
      </section>
    </motion.div>
  );
}
