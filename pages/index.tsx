import { motion } from "framer-motion";

import AboutSection from "../src/sections/AboutSection";
import ContactSection from "../src/sections/ContactSection";
import HeroSection from "../src/sections/HeroSection";
import ProjectSection from "../src/sections/ProjectSection";

export default function Home() {
  return (
    <motion.div className="flex w-full h-full max-w-4xl m-auto ">
      <HeroSection />
    </motion.div>
  );
}
