import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";
import HeroContent from "../src/content/HeroContent";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col px-10 xl:px-20 
      py-20 md:pb-40 mx-auto gap-20 md:gap-40 items-center justify-center  "
    >
      <HeroContent />
      <AboutContent />
      <ProjectContent />
      <ContactContent />
    </motion.div>
  );
}
