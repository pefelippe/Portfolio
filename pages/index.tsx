import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";

export default function Home() {
  return (
    <motion.div className="relative w-full h-full min-h-fit">
      <AboutContent />
    </motion.div>
  );
}
