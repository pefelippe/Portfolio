import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="w-full flex py-6 text-center justify-center items-center  max-w-3xl mt-6
      px-4 sm:px-6 lg:px-8 mx-auto gap-4 border-gray-600/20"
    >
      <p className="gap-2 text-sm sm:text-md text-gray-600/80">
        Pedro Felippe &copy; {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
}

export default Footer;
