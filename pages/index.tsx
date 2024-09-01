import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import FeaturedProjectsSection from "../src/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col items-center min-h-screen justify-center w-full mx-auto  px-4 sm:px-6 lg:px-8 max-w-screen-2xl  gap-24 ">
      <HeroSection />
      {/* <FeaturedProjectsSection /> */}
    </motion.div>
  );
}
