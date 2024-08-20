import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import FeaturedProjectsSection from "../src/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col  w-full  mx-auto p-6 md:px-12 max-w-7xl  mt-40 gap-40
    "
    >
      <HeroSection />
      <FeaturedProjectsSection />
    </motion.div>
  );
}
