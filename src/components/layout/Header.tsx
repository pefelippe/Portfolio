import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "lucide-react";
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
      className="fixed mx-auto flex  z-40   left-0 right-0  backdrop-blur w-full px-6 "
    >
      <div className="flex items-center justify-between w-full h-full py-3 mx-auto ">
        <button className="flex items-center text-lg font-bold tracking-tighter uppercase  ">
          <Link
            href="/"
            className={`tracking-wide hover:text-zinc-300/90 transition-all`}
          >
            Pedro Felippe
          </Link>
        </button>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-between p-2 space-x-6 text-base tracking-widest "
        >
          <Link
            href="/"
            className="relative p-2 px-4 font-medium transition-all border-2 rounded-md text-md"
          >
            My Blog
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
