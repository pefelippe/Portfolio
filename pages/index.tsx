import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";
import HeroContent from "../src/content/HeroContent";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col mx-auto w-screen ">
      <section className="snap-center max-lg:px-10 pt-[92px]">
        <HeroContent />
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex w-full flex-col  max-lg:px-10 max-md:gap-20"
      >
        <section className="snap-center bg-[#121212]">
          <AboutContent />
        </section>

        <section className="snap-center bg-[#101010]">
          <ProjectContent />
        </section>

        <section className="snap-center bg-[#080808]">
          <ContactContent />
        </section>
      </motion.div>
    </motion.div>
  );
}
