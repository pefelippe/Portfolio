import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col justify-start gap-[10vh] max-w-xl w-full mx-auto h-fit  min-h-screen my-[10vh] items-start  px-6"
    >
      <HeroContent />
      <AboutContent />
      <ContactContent />
    </motion.div>
  );
}
