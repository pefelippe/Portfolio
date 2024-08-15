import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import ProjectSection from "../src/sections/ProjectSection";
import AboutSection from "../src/sections/AboutSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col items-center justify-between w-full min-h-screen mx-auto lg:flex-row bg-light/30 ">
      <section className="flex flex-col w-full min-h-screen px-6 py-24 mt-12 gap-y-12 lg:gap-y-16">
        <HeroSection />
        <ProjectSection />
      </section>
    </motion.div>
  );
}
