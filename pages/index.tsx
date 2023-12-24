import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";

export default function Home() {
  return (
    <motion.div
      className="z-10 flex flex-col justify-start  max-w-7xl h-fit min-h-screen
     mx-auto w-full   items-start  max-xl:px-6  py-20 lg:py-32 gap-20 lg:gap-32 "
    >
      <AboutContent />
      <ContactContent />
    </motion.div>
  );
}
