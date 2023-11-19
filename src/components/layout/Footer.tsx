import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full  bottom-0 left-0 right-0  z-20 absolute  h-[10vh]   shadow-xs shadow-gray-300
  items-center  flex mx-auto  text-base font-normal justify-center"
    >
      {year}
    </motion.footer>
  );
}

export default Footer;
