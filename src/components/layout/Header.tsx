import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-screen fixed rounded-sm bg-white z-40  mx-auto h-16 py-4 border-b"
    >
      <div className="flex w-full  mx-auto items-center justify-between px-10 max-w-5xl">
        <Link href="/">
          <p className="text-xl font-medium tracking-tight">Pedro Felippe</p>
        </Link>

        {/* <Links /> */}
      </div>
    </motion.header>
  );
};

export default Header;
