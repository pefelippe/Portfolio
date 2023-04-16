import { motion } from "framer-motion";
import React from "react";

type Props = {};

function BlogPosts({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="work"
      className="h-fit max-w-7xl mx-auto min-h-[80vh] 
         text-xl max-xl:px-8 rounded-xl flex max-lg:flex-col 
          items-start text-center gap-10 "
    ></motion.div>
  );
}

export default BlogPosts;
