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
      className="fixed mx-auto flex  z-40  text-[#535256] left-0 right-0  backdrop-blur w-full border-b-[1px] border-neutral-800 px-6 "
    >
      <div className="flex items-center justify-between w-full h-full py-3 mx-auto ">
        <button className="flex items-center text-lg font-bold tracking-tighter uppercase text-zinc-300 ">
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
          className="flex items-center justify-between p-2 space-x-6 text-base tracking-widest text-white"
        >
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
            className={`tracking-wide hover:text-blue`}
          >
            <LinkedinIcon className="w-8 h-8" />
          </Link>

          <Link
            target="_blank"
            href="https://github.com/pefelippe"
            className={`tracking-wide hover:text-blue`}
          >
            <GithubIcon className="w-8 h-8" />
          </Link>

          <Link
            href="/contact"
            className="relative p-2 px-4 font-medium transition-all border rounded-md text-zinc-300 text-md"
          >
            Get in contact
          </Link>
        </motion.div>

      </div>
    </motion.header>
  );
};

export default Header;
