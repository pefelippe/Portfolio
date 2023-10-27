import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col px-10 xl:px-20 mt-[10vh]
      py-10 xl:py-20  mx-auto gap-8  items-center justify-center max-w-4xl "
    >
      <HeroContent />
      <AboutContent />
      {/* <ProjectContent /> */}
      <ContactContent />
    </motion.div>
  );
}
