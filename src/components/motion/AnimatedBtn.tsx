import { motion } from "framer-motion";
import React from "react";

interface iBtnProps {
  href: string;
  children: JSX.Element;
}

function AnimatedBtn({ href, children }: iBtnProps) {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      href={href}
      target="_blank"
      className="w-fit rounded-xl p-4  bg-[#5865f2] text-lg font-semibold"
    >
      {children}
    </motion.a>
  );
}

export default AnimatedBtn;
