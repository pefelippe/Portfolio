import { motion } from "framer-motion";

import HeroSection from "../src/sections/HeroSection";
import ProjectSection from "../src/sections/ProjectSection";

export default function Home() {
  return (
    <motion.div className="flex flex-col h-full w-full relative gap-24 md:gap-32  mx-auto py-24 md:pt-52">
      <section className="section ">
        <HeroSection />
      </section>
      <section className="section md:pt-24">
        <ProjectSection />
      </section>
    </motion.div>
  );
}
