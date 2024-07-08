import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="absolute top-0 flex items-center justify-between w-full px-8 pt-6 mx-auto backdrop-blur"
    >
      <button className="flex items-center py-2 text-2xl font-bold transition-all rounded-full md:px-8 hover:text-[#101010]/80">
        <Link href="/">Pedro Felippe</Link>
      </button>

      <motion.ul className="flex gap-2">
        <Link href="https://github.com/pefelippe">
          <motion.li
            className="p-4 transition-all rounded-full cursor-pointer hover:bg-gray-900/10"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            <Github />
          </motion.li>
        </Link>

        <Link href="https://www.linkedin.com/in/pedro-felippe/">
          <motion.li
            className="p-4 transition-all rounded-full cursor-pointer hover:bg-gray-900/10"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            <Linkedin />
          </motion.li>
        </Link>
      </motion.ul>
    </motion.header>
  );
};

export default Header;
