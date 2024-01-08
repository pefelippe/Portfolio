import { motion } from "framer-motion";

import { Link as ScrollLink } from "react-scroll";

import Link from "next/link";
import { Button } from "../ui/button";

const HeaderButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex space-x-4 items-center "
    >
      <ScrollLink
        activeClass="active"
        to="contact-content"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <Button className="px-10 py-6 text-lg rounded hover:underline transition-all">
          Contact
        </Button>
      </ScrollLink>
    </motion.div>
  );
};
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="flex fixed  z-40 h-20 py-4 left-0 right-0 backdrop-blur-3xl  bg-white"
    >
      <div className="flex w-full  mx-auto items-center justify-between max-xl:px-6 max-w-6xl">
        <Link href="/">
          <p className="text-xl font-bold hover:text-gray-500 transition-all ">
            Pedro Felippe
          </p>
        </Link>

        <HeaderButtons />
      </div>
    </motion.header>
  );
};

export default Header;
