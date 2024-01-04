import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Links from "../Socials";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-screen fixed rounded-sm z-40 backdrop-blur-sm mx-auto h-16 py-4"
    >
      <div className="flex w-full max-w-5xl mx-auto items-center justify-between ">
        <Link href="/">
          <p className="text-2xl font-semibold tracking-tight">Pedro Felippe</p>
        </Link>

        <Links />
      </div>
    </motion.header>
  );
};

export default Header;
