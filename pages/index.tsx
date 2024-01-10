import { motion } from "framer-motion";

import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col  relative w-full h-full px-6  z-20 mx-auto max-lg:gap-32 max-lg:mt-16 max-lg:py-20 max-w-7xl">
      <Hero />
      <ProjectContent />
      <ContactContent />
    </motion.div>
  );
}
