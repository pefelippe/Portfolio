import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const Links = () => {
    return (
      <>
        <Link
          onClick={() => setOpen(!open)}
          href="/about"
          className="hover:underline "
        >
          About
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          target="_blank"
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0"
          className="hover:underline"
        >
          Resume
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          href="/contact"
          className="hover:underline"
        >
          <p className="">Contact</p>
        </Link>
      </>
    );
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-screen   rounded-sm z-40 backdrop mx-auto h-18 py-4 "
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
