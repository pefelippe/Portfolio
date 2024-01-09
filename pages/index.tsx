import { motion } from "framer-motion";

import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div id="hero-container bg-blue">
      <section className="bg-blue relative w-full ">
        <Hero />
      </section>

      <section className="flex flex-col  relative w-full h-full max-xl:px-6 z-20 bg-white  mx-auto py-16 gap-32 md:gap-40">
        <ProjectContent />
        <ContactContent />
      </section>
    </motion.div>
  );
}
