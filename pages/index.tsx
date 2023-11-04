import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import HeroContent from "../src/content/HeroContent";
import PostsContent from "../src/content/PostsContent";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col justify-center py-20 gap-20 lg:gap-32 lg:py-32 w-full mx-auto min-h-fit max-w-5xl"
    >
      <HeroContent />
      <AboutContent />
      <PostsContent />
    </motion.div>
  );
}
