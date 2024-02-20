import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";
import ContactContent from "./contact";

export default function Home() {
  return (
    <motion.div className="w-full flex flex-col  relative mt-20 ">
      <section className="section border-b">
        <Hero />
      </section>
      <section className="section bg-slate-50/50 ">
        <ProjectContent />
      </section>
      <section className="section  border-t ">
        <ContactContent />
      </section>
    </motion.div>
  );
}
