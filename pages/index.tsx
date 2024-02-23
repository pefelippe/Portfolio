import { motion } from "framer-motion";

import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="w-full flex flex-col relative pt-24  mx-auto">
      <section className="section py-16 lg:py-32">
        <Hero />
      </section>
      <section className="section pt-10">
        <ProjectContent />
      </section>
    </motion.div>
  );
}
