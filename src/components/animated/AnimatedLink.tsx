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
      <motion.div className="w-full h-full">{children}</motion.div>
    </Link>
  );
}

export default AnimateLink;
