import { motion } from "framer-motion";
import Link from "next/link";

import LinksToPages from "../LinksToPages";

export const Logo = () => {
  return (
    <button className=" flex text-lg tracking-tighter font-bold uppercase text-blue">
      <Link href="/" className={`tracking-wide hover:text-blue`}>
        Pedro Felippe
      </Link>
    </button>
  );
};

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className=" fixed  w-full z-40  text-[#535256] left-0 right-0  backdrop-blur  "
    >
      <div className="w-full  mx-auto flex justify-between py-5 items-center   px-6  ">
        <Logo />

        <LinksToPages />
      </div>
    </motion.header>
  );
};

export default Header;
