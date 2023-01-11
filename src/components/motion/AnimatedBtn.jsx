import { motion } from "framer-motion";
import React from "react";

function AnimatedBtn(props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      href={props.href}
      className={props.className}
    >
      {props.children}
    </motion.button>
  );
}

export default AnimatedBtn;
