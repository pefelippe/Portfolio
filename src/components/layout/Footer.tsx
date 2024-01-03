import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="z-40 h-16  font-extralight items-center  flex mx-auto text-[#101010]  w-screen
     text-lg  justify-center max-xl:px-6"
    >
      Pedro Felippe - {year}
    </motion.footer>
  );
}

export default Footer;
