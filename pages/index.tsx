import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import FeaturedProjectsSection from "../src/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col  w-full  mx-auto max-sm:p-6 max-w-6xl  mt-32 gap-32 pt-16">
      <HeroSection />
      <FeaturedProjectsSection />
    </motion.div>
  );
}
