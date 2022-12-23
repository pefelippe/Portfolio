import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <div className="component-base space-y-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-4"
      >
        <h1 className="text-7xl">Pedro Felippe</h1>
        <h2 className="text-4xl">Web Developer</h2>
      </motion.div>
    </div>
  );
}
