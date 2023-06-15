import { motion } from "framer-motion";

import SocialLinks from "../src/components/SocialLinks";
import Socials from "../src/components/Socials";
import Hero from "../src/content/Hero";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto max-lg:px-8 py-10 md:py-24 space-y-10 min-h-[8vh]"
    >
      <Hero />
    </motion.div>
  );
}
