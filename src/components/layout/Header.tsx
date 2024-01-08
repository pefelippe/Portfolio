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
      className="flex space-x-6 items-center font-medium "
    >
      <ScrollLink
        activeClass="active"
        to="hero-container"
        spy={true}
        smooth={true}
        offset={-250}
        duration={500}
      >
        <button className="text-lg  hover:underline transition-all">
          Home
        </button>
      </ScrollLink>

      <ScrollLink
        activeClass="active"
        to="projects-container"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        <button className=" py-6 text-lg  hover:underline transition-all">
          Projects
        </button>
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="contact-content"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <Button
          variant="secondary"
          className="px-6  text-lg  hover:underline transition-all"
        >
          Lets talk
        </Button>
      </ScrollLink>

      {/* <ModeToggle /> */}
    </motion.div>
  );
};
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="flex fixed h-16 z-40 py-8 left-0 right-0 backdrop-blur-3xl  text-white  bg-blue transition-all"
    >
      <div className="flex w-full  mx-auto items-center justify-between max-xl:px-6 max-w-6xl">
        <Link href="/">
          <p className="text-2xl font-semibold hover:text-gray-900 transition-all tracking-tight ">
            Felippe λ‍
          </p>
        </Link>

        <HeaderButtons />
      </div>
    </motion.header>
  );
};

export default Header;
