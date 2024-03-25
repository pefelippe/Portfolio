import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Pages = {
  [key: string]: string;
};

const pages: Pages = {
  Home: "/",
  About: "/about",
  Contact: "/contact",
};

function LinksToPages() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="flex  justify-start font-semibold
        items-center w-fits space-x-8 text-base tracking-widest  "
    >
      {Object.keys(pages).map((page) => (
        <Link
          key={page}
          href={pages[page]}
          className={`tracking-wide hover:text-blue`}
        >
          {page}
        </Link>
      ))}
    </motion.div>
  );
}

export default LinksToPages;
