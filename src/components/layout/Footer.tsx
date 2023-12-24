import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className=" z-20 h-[10vh] font-extralight items-center  flex mx-auto bg-[#101010] w-screen
     text-lg  justify-center max-xl:px-6"
    >
      Pedro Felippe - {year}
    </motion.footer>
  );
}

export default Footer;
