import { motion } from "framer-motion";
import React from "react";

function Posts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="work"
      className="max-w-xl flex mx-auto py-20 min-h-[80vh]"
    >
      <div className="flex flex-col w-full gap-20">Work in Progress</div>
    </motion.div>
  );
}

export default Posts;
