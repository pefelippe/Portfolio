import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col   justify-center gap-12 xl:gap-24 py-12  w-full mx-auto max-xl:px-6 "
    >
      <HeroContent />
      <AboutContent />

      {/* <PostsContent /> */}
      {/* <ContactContent /> */}
    </motion.div>
  );
}
