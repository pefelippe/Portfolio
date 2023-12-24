import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer className="w-full  z-20 h-[88px] font-extralight items-center max-w-7xl  flex mx-auto 
     text-md  justify-center max-xl:px-6">
      Pedro Felippe - {year}
    </motion.footer>
  );
}

export default Footer;
