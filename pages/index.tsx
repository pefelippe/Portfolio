import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";
import HeroContent from "../src/content/HeroContent";
import ProjectContent from "../src/content/ProjectContent";
import Contact from "./contact";

export default function Home() {
  return (
    <motion.div className=" flex flex-col mx-auto w-screen py-[10vh]">
      <section className=" max-lg:px-10  py-[10vh]">
        <HeroContent />
      </section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex w-full flex-col  gap-20 xl:gap-40   max-lg:px-10 "
      >
        <section className="">
          <AboutContent />
        </section>

        <section>
          <ProjectContent />
        </section>

        <section>
          <ContactContent />
        </section>
      </motion.div>
    </motion.div>
  );
}
