import { motion } from "framer-motion";
import Link from "next/link";

interface iBtnProps {
  href: string;
  children: any;
  className?: string;
}

function AnimateLink({ href, children, className }: iBtnProps) {
  return (
    <Link href={href} className={className}>
      <motion.div
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.5 },
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </Link>
  );
}

export default AnimateLink;
