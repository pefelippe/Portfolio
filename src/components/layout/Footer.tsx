import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="z-40 h-20  font-extralight items-center  flex mx-auto text-[#101010]  w-screen
     text-lg  justify-between max-xl:px-6 max-w-7xl"
    >
      <p>Pedro Felippe © {year}</p>
    </motion.footer>
  );
}

export default Footer;
