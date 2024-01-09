import { motion } from "framer-motion";

import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div id="hero-container" className=" ">
      <section className="bg-blue relative ">
        <Hero />

        <div className="">
          <motion.img
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 1 }}
            src="/assets/avatar.png"
            alt="pedro felippe"
            className="absolute bottom-0 left-20 xl:left-32 h-full max-h-[75vh] max-xl:hidden"
          />
        </div>
      </section>

      <section className="flex flex-col  relative w-full h-full max-xl:px-6 z-20 bg-white max-w-7xl mx-auto pt-16 gap-32 md:gap-40">
        <ProjectContent />
        <ContactContent />
      </section>
    </motion.div>
  );
}
