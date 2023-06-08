import BlogPosts from "../src/content/BlogPosts";
import { motion } from "framer-motion";

import Hero from "../src/content/Hero";

import CallToContact from "./contact";
import Socials from "../src/components/Socials";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-screen-md mx-auto max-lg:px-8 py-20 md:py-20 space-y-20 md:space-y-32"
    >
      <Hero />
      <BlogPosts qnt={2} />
      <Socials />
    </motion.div>
  );
}
