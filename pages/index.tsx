import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";

export default function Home() {
  return (
    <motion.div className="relative w-full h-full min-h-fit max-w-xl xl:max-w-7xl mx-auto py-20 gap-20 xl:gap-40 xl:py-40 flex flex-col">
      <AboutContent />
      <ContactContent />
    </motion.div>
  );
}
