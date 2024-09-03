import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import FeaturedProjectsSection from "../src/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center min-h-[80vh] justify-center w-full mx-auto  mt-[20vh] gap-24 pb-24
    px-4 sm:px-6 lg:px-8 max-w-7xl"
    >
      <HeroSection />
      <FeaturedProjectsSection />
    </motion.div>
  );
}
