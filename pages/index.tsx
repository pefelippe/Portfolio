import { motion } from "framer-motion";

import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="flex flex-col gap-20 relative w-full h-full max-xl:px-6 pt-20 my-16   max-w-6xl mx-auto">
      <Hero />
      <ProjectContent />
      <ContactContent />
    </motion.div>
  );
}
