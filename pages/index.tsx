import { motion } from "framer-motion";

import HeroContent from "../src/content/HeroContent";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div
      className="z-10 flex flex-col justify-start gap-6  max-w-7xl h-fit min-h-[85vh]
     mx-auto w-full   items-start  px-6"
    >
      <HeroContent />
      {/* <Links /> */}
      {/* <AboutContent /> */}
      <ProjectContent />
      {/* <ContactContent /> */}
    </motion.div>
  );
}
