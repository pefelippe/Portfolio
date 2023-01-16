import { motion } from "framer-motion";
import React from "react";

function AnimatedBtn(props) {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      href={props.href}
      target="_blank"
      className={props.className}
    >
      {props.children}
    </motion.a>
  );
}

export default AnimatedBtn;
