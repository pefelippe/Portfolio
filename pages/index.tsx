import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import AboutSection from "../src/sections/AboutSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col w-full h-full my-20 divider-x">
      <section className="flex py-20 md:py-32">
        <HeroSection />
      </section>
      <section className="flex">
        <AboutSection />
      </section>
    </motion.div>
  );
}
