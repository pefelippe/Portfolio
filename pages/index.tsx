import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col   justify-center gap-12 py-12 xl:gap-24 xl:py-24  w-full mx-auto  min-h-fit max-w-5xl"
    >
      <HeroContent />
      <AboutContent />
    </motion.div>
  );
}
