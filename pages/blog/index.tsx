import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Blog({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="component"
    >
      <h2 className="font-bold text-[3rem] md:text-[3.5rem] xl:text-[4.5rem] leading-[1.2] flex w-full">
        Writing about development, business, and personal life experiences.
      </h2>
    </motion.div>
  );
}

export default Blog;
