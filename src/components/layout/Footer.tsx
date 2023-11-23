import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full  z-20   h-[10vh]   shadow-xs shadow-gray-300
  items-center  flex mx-auto  text-base font-normal justify-center"
    >
      {year}
    </motion.footer>
  );
}

export default Footer;
