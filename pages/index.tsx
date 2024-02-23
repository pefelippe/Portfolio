import { motion } from "framer-motion";

import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";
import AboutContent from "./about";

export default function Home() {
  return (
    <motion.div className="w-full flex flex-col relative pt-24 max-w-screen-2xl mx-auto">
      <section className="section ">
        <AboutContent />
      </section>
      <section className="section pt-16">
        <ProjectContent />
      </section>
    </motion.div>
  );
}
