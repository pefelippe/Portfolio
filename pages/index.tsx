import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";
import ContactContent from "./contact";

export default function Home() {
  return (
    <motion.div className="w-full flex flex-col  relative bg-gray-900 text-white py-20">
      <section className="section  ">
        <Hero />
      </section>

      <section className="section ">
        <ProjectContent />
      </section>
      {/* <section className="section ">
        <ContactContent />
      </section> */}
    </motion.div>
  );
}
