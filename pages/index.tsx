import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import ProjectSection from "../src/sections/ProjectSection";
import AboutSection from "../src/sections/AboutSection";

export default function Home() {
  return (
    <motion.div className="w-full flex flex-col lg:flex-row min-h-screen items-center justify-between bg-light/30 mx-auto ">
      <section className="flex flex-col w-full min-h-screen lg:px-24 px-6 py-24 gap-y-12 lg:gap-y-24 mt-24">
        <HeroSection />
        <ProjectSection />
      </section>
    </motion.div>
  );
}
