import { motion } from "framer-motion";

import BlogPosts from "../src/components/BlogPosts";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col min-h-screen w-screen max-w-3xl mx-auto"
    >
      <BlogPosts />
    </motion.div>
  );
}
