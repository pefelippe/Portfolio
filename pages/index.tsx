import { motion } from "framer-motion";

import AboutContent from "../src/content/About";
import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col  relative w-full h-full 
    max-xl:px-6 gap-16 md:gap-40 py-16 xl:py-24 mt-24
    bg-[#fff] text-[#121212] max-w-7xl mx-auto"
    >
      <Hero />
      <AboutContent />
      <ProjectContent />
      <ContactContent />
    </motion.div>
  );
}
