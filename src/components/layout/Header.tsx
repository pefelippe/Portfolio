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
      <button className="flex items-center py-2 text-2xl font-bold transition-all rounded-full md:px-8 hover:text-gray-300">
        <Link href="/" className="text-2xl tracking-tighter text-bold">
          pedrofelippe.
        </Link>
      </button>

      <Link
        href="/blog"
        className="text-lg font-medium transition-all hover:text-gray-300"
      >
        Blog
      </Link>
    </motion.header>
  );
};

export default Header;
