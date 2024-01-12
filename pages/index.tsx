import { motion } from "framer-motion";

import About from "../src/content/About";
import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="flex flex-col   mt-20">
      <section className="max-xl:px-6 bg-gray-900 text-white py-32">
        <Hero />
      </section>
      <section className="  border-t py-20 max-xl:px-6 ">
        <About />
      </section>
      <section className="py-20 border-y bg-gray-100/50 max-xl:px-6">
        <ProjectContent />
      </section>
      <section className="max-xl:px-6 py-20 ">
        <ContactContent />
      </section>
    </motion.div>
  );
}
