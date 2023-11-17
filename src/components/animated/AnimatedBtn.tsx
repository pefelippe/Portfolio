import { motion } from "framer-motion";

interface iBtnProps {
  href?: string;
  children: JSX.Element;
  className?: string;
  target?: string;
}

function AnimatedBtn({
  href,
  children,
  className,
  target = "_blank",
}: iBtnProps) {
  return (
    <motion.a
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.1 },
      }}
      href={href}
      target={target}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default AnimatedBtn;
