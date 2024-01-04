import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="z-40 h-20 w-screen font-extralight items-center  flex mx-auto  text-[#fff] bg-[#000]
     text-lg  justify-center max-xl:px-6 "
    >
      <p>Pedro Felippe © {year}</p>
    </motion.footer>
  );
}

export default Footer;
