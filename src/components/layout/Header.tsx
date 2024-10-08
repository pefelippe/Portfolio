import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" max-md:px-4  w-full max-w-3xl mx-auto py-5 bg-gradient-to-r
       from-white to-gray-100 text-gray-800 dark:border-gray-100/30 z-40 "
    >
      <div className="flex mx-auto items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/"
            className="text-3xl tracking-tighter font-extrabold hover:text-gray-600"
          >
            pedrofelippe.
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-gray-200"
        >
          <div className="flex justify-center space-x-6 items-center">
            <Link
              href="/contact"
              className="text-lg px-8 py-3 bg-indigo-600 hover:bg-indigo-500 transition-all text-white rounded-full font-semibold"
            >
              Contact me
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
