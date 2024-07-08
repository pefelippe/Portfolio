/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

function BlogSection() {
  return (
    <motion.div
      className="flex items-start justify-start w-full h-full max-w-5xl min-h-screen py-20 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-xl font-semibold">Blog</h2>
      {/* blog posts */}
    </motion.div>
  );
}

export default BlogSection;
