import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import FeaturedProjectsSection from "../src/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center min-h-[90vh] justify-center w-full mx-auto  my-[10vh] gap-20 pt-10
    px-4 sm:px-6 lg:px-8 max-w-7xl"
    >
      <HeroSection />
      <FeaturedProjectsSection />
    </motion.div>
  );
}
