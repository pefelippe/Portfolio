import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col  w-full  mx-auto max-w-6xl 
     px-6 gap-y-12 lg:gap-y-16"
    >
      <HeroSection />
    </motion.div>
  );
}
