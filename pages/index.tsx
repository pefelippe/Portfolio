import { motion } from "framer-motion";

import AboutSection from "../src/sections/AboutSection";
import ContactSection from "../src/sections/ContactSection";
import ProjectSection from "../src/sections/ProjectSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col h-full w-full relative   mx-auto py-12 lg:py-20 gap-12 lg:gap-20">
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
