import { motion } from "framer-motion";

import HeroContent from "../src/content/HeroContent";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div
      className="z-10 flex flex-col justify-start gap-10 py-10   max-w-7xl
     mx-auto w-full  h-fit  min-h-[90vh]  items-start  max-xl:px-6 overflow-hidden"
    >
      <HeroContent />
      <ProjectContent />
    </motion.div>
  );
}
