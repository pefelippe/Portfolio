import { motion } from "framer-motion";

import ContactSection from "../src/sections/ContactSection";
import HeroSection from "../src/sections/HeroSection";
import ProjectSection from "../src/sections/ProjectSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col h-full w-full relative lg:gap-12 max-w-7xl mx-auto pt-12">
      <section className="section ">
        <HeroSection />
      </section>
      <section className="section pt-12">
        <ProjectSection />
      </section>
      <section className="section py-12 w-full">
        <ContactSection />
      </section>
    </motion.div>
  );
}
