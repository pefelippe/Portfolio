import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutMeContent";
import ContactContent from "../src/content/ContactContent";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="flex flex-col  relative w-full h-full min-h-fit mt-16 gap-20">
 
      <section className="flex flex-col w-full bg-[#fff] text-[#121212] mx-auto  max-w-5xl max-md:px-6">
        <AboutContent />
        {/* <SkillsContent /> */}
        {/* <ExperienceContent /> */}
        <ProjectContent />
      </section>

      <section className=" w-full bg-[#121212] text-white mx-auto gap-20">
        <ContactContent />
      </section>
    </motion.div>
  );
}
