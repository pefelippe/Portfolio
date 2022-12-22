import { motion } from "framer-motion";
import React from "react";
import { Animations } from "../variants/animations";

type letterType = {
  title: string;
};

function AnimatedLetters({ title }: letterType) {
  const splitSpace = title.split(" ");
  const words = splitSpace.map((word) => word.split(""));

  words.map((word) => word.push("\u00A0"));

  return (
    <div className="overflow-hidden">
      {words.map((word, index) => {
        return (
          <motion.span
            variants={Animations.letter}
            className="text-3xl md:text-7xl font-col mt-3 text-white mix-blend-difference transion duration-500 "
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}

export default AnimatedLetters;
