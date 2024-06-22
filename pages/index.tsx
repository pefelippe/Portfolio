import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col w-full h-full max-w-4xl m-auto ">
      <HeroSection />
    </motion.div>
  );
}
