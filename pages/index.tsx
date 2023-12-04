import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";

export default function Home() {
  return (
    <motion.div
      className="z-10 flex flex-col justify-start   max-w-7xl h-fit min-h-screen
     mx-auto w-full  max-md:py-20  py-40 gap-40 items-start  max-xl:px-6"
    >
      {/* <HeroContent /> */}
      {/* <Links /> */}
      <AboutContent />
      {/* <ProjectContent /> */}
      <ContactContent />
    </motion.div>
  );
}
