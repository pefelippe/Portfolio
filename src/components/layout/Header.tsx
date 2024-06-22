import { motion } from "framer-motion";
import Link from "next/link";

type Pages = {
  [key: string]: string;
};

const pages: Pages = {
  Home: "/",
  Blog: "/blog",
  Contact: "/contact",
};

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="fixed mx-auto flex  z-40 bg-[#131313] text-[#535256] left-0 right-0  backdrop-blur w-full border-b-[1px] border-neutral-800 px-6 "
    >
      <div className="flex items-center justify-between w-full h-full py-6 mx-auto ">
        <button className="flex items-center text-lg font-bold tracking-tighter uppercase text-zinc-300 ">
          <Link
            href="/"
            className={`tracking-wide hover:text-zinc-300/90 transition-all`}
          >
            Pedro Felippe
          </Link>
        </button>

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          className="flex items-center justify-center h-full space-x-8 text-base font-semibold tracking-widest w-fit "
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
      </div>
    </motion.header>
  );
};

export default Header;
