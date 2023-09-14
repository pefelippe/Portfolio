import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface iBtnProps {
  href: string;
  children: any;
  className?: string;
}

function AnimateLink({ href, children, className }: iBtnProps) {
  return (
    <Link href={href} className={className}>
      <motion.div
        className="w-full h-full"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
      >
        {children}
      </motion.div>
    </Link>
  );
}

export default AnimateLink;
