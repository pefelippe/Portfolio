import { motion } from "framer-motion";

import HeroContent from "../src/content/HeroContent";
import ContactContent from "../src/content/ContactContent";
import AboutContent from "../src/content/AboutMeContent";
import ProjectContent from "../src/content/ProjectContent";
import SkillsContent from "../src/content/SkillsContent";

export default function Home() {
  return (
    <motion.div className="flex flex-col  relative w-full h-full min-h-fit ">
      <section className="bg-[#505ded]">
        <HeroContent />
      </section>

      <section className="flex flex-col w-full bg-[#fff] text-[#121212] mx-auto  max-xl:px-6  ">
        <AboutContent />
        <ProjectContent />
      </section>

      <section className=" w-full bg-[#121212] text-white mx-auto gap-20">
        <ContactContent />
      </section>
    </motion.div>
  );
}
