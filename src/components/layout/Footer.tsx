import { motion } from "framer-motion";

import Links from "../Socials";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="z-40 h-[30vh] w-screen font-extralight items-center   mx-auto  text-[#fff] bg-[#000] flex flex-col
     text-lg  justify-center max-xl:px-6 gap-8 "
    >
      <p className="text-lg font-medium">Pedro Felippe © {year}</p>
      <Links />
    </motion.footer>
  );
}

export default Footer;
