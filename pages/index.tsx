import { motion } from "framer-motion";

import AboutSection from "../src/sections/AboutSection";
import ContactSection from "../src/sections/ContactSection";
import HeroSection from "../src/sections/HeroSection";
import ProjectSection from "../src/sections/ProjectSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col h-full w-full relative mx-auto ">
      <section className="bg-white border ">
        <HeroSection />
      </section>

      <section id="aboutSection" className=" bg-[#101010] text-white ">
        <AboutSection />
      </section>
      
      <section id="projectsSection" className=" text-[#101010]">
        <ProjectSection />
      </section>

      <section id="aboutSection" className=" bg-[#101010] text-white ">
        <ContactSection />
      </section>
    </motion.div>
  );
}
