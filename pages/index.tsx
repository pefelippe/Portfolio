import { motion } from "framer-motion";

import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="flex flex-col  relative w-full h-full 
    max-xl:px-6 gap-16 md:gap-24 py-16 xl:py-24 mt-24
    bg-[#fff] text-[#121212] max-w-7xl mx-auto">
      <Hero />
      <ProjectContent />
      {/* <AboutContent/> */}
      <ContactContent />
    </motion.div>
  );
}
