import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import FeaturedProjectsSection from "../src/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-start justify-center w-full mx-auto gap-32 pt-32 my-[72px]  max-w-screen-xl
       max-md:px-4 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <HeroSection />
      <FeaturedProjectsSection />
    </motion.div>
  );
}
