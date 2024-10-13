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
      className="px-6  w-full max-w-7xl mx-auto py-6 pb-4 bg-gradient-to-r fixed top-0 left-0 right-0 z-40
       from-white to-gray-100 text-gray-800 dark:border-gray-100/30  "
    >
      <div className="flex mx-auto items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="">
            <div className="flex flex-col">
              <h1 className="text-2xl tracking-tighter font-extrabold">
                pedrofelippe.
              </h1>
              <span className="text-sm text-gray-600">
                Senior Software Engineer
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
