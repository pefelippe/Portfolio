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
      className="flex w-screen fixed rounded-sm z-40 backdrop mx-auto h-16 p-4  bg-white"
    >
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between ">
        <Link href="/">
          <p className="text-2xl font-semibold tracking-tight">Pedro Felippe</p>
        </Link>

        {/* <Link
          href="/contact"
          className="uppercase tracking-[3px] font-semibold transition-all rounded-xl text-base hover:text-gray-300"
        >
          Contact
        </Link> */}
      </div>
    </motion.header>
  );
};

export default Header;
