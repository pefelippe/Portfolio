import { motion } from "framer-motion";

import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div className="z-10 flex flex-col justify-center gap-[5vh] lg:gap-[10vh]  mx-auto w-full  h-fit  min-h-[90vh]  items-start  px-6 overflow-hidden">
      <HeroContent />
    </motion.div>
  );
}
