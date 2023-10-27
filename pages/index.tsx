import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col px-10 xl:px-20 
      py-20  mx-auto gap-10 md:gap-24  items-center justify-center  "
    >
      <HeroContent />
      <AboutContent />
      {/* <ProjectContent /> */}
      {/* <ContactContent /> */}
    </motion.div>
  );
}
