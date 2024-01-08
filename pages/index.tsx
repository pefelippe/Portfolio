import { motion } from "framer-motion";

import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div
      id="hero-container"
      className="flex flex-col gap-32 relative w-full h-full max-xl:px-6 py-20 md:py-32 mt-12  max-w-6xl mx-auto"
    >
      <Hero />
      <ProjectContent />
      <ContactContent />
    </motion.div>
  );
}
