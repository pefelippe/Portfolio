import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import FeaturedProjectsSection from "../src/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col  w-full  mx-auto max-sm:p-6 max-w-screen-md mt-[76px] gap-12 ">
      <HeroSection />
      <FeaturedProjectsSection />
    </motion.div>
  );
}
