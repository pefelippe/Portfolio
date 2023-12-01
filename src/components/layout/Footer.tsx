import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer className="w-full  z-20 h-[5vh] font-extralight items-center  flex mx-auto  text-lg  justify-center">
      Pedro Felippe - {year}
    </motion.footer>
  );
}

export default Footer;
