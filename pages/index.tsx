import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";
import ContactContent from "./contact";

export default function Home() {
  return (
    <motion.div className="w-full flex max-lg:flex-col ">
      <motion.div className="w-full flex flex-col  relative  mt-16  ">
        <section className="section ">
          <AboutContent />
        </section>
        <section className=" border-y py-10 bg-gray-200/10 section">
          <ProjectContent />
        </section>
        <section className="section">
          <ContactContent />
        </section>
      </motion.div>
    </motion.div>
  );
}
