import { motion } from "framer-motion";
import React from "react";
import MessageForm from "../src/components/MessageForm";

type Props = {};

function Blog({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-fit mx-auto text-xl w-full   
      flex flex-col justify-center  items-center  text-center min-h-[90vh]"
    >
      <div className="mx-auto lg:mx-0 pb-4  w-full max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Blog
        </h2>
      </div>
    </motion.div>
  );
}

export default Blog;
