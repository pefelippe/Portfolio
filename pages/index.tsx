import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";
import HeroContent from "../src/content/HeroContent";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col   w-screen max-lg:px-10"
    >
      <section>
        <HeroContent />
      </section>
      <div className="flex w-full flex-col  gap-20 xl:gap-40">
        <section className="">
          <AboutContent />
        </section>

        <section>
          <ProjectContent />
        </section>

        <section className="">
          <ContactContent />
        </section>
      </div>
    </motion.div>
  );
}
