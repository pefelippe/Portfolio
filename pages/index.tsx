import { motion } from "framer-motion";

import AboutContent from "../src/content/About";
import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="flex flex-col  relative w-full h-full 
    max-xl:px-6 gap-16 xl:gap-32 py-10 xl:py-20 xl:pt-32 mt-24
    bg-[#fff] text-[#121212] max-w-5xl mx-auto">
      <Hero />
      <ProjectContent />
      <AboutContent/>
      <ContactContent />
    </motion.div>
  );
}
