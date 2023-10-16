import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col px-10  pt-20 pb-40 mx-auto gap-40 items-center justify-center  ">
      <HeroContent />

      <AboutContent />
      {/* <ProjectContent /> */}
      <ContactContent />
    </motion.div>
  );
}
