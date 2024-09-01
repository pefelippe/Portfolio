import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import FeaturedProjectsSection from "../src/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col  w-full  mx-auto  px-4 sm:px-6 lg:px-8 max-w-screen-2xl mt-[76px]  pt-24 gap-24 ">
      <HeroSection />
      <FeaturedProjectsSection />
    </motion.div>
  );
}
