import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";
import ContactContent from "./contact";

export default function Home() {
  return (
    <motion.div className="w-full flex max-lg:flex-col mt-20 pt-20">
      <motion.div className="w-full flex flex-col  relative  ">
        <section className="section">
          <Hero />
        </section>
        {/* <section className="section  border-y py-10 bg-gray-200/10 ">
          <AboutContent />
        </section> */}
        <section className="section">
          <ProjectContent />
        </section>
        <section className="section ">
          <ContactContent />
        </section>
      </motion.div>
    </motion.div>
  );
}
