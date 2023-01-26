import { motion } from "framer-motion";
import React from "react";

interface iBtnProps {
  href?: string;
  children: JSX.Element;
  className?: string;
}

function AnimatedBtn({ href, children, className }: iBtnProps) {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      href={href}
      target="_blank"
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default AnimatedBtn;
