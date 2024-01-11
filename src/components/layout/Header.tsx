import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Logo = () => {
  return (
    <ScrollLink
      activeClass="active"
      to="hero-container"
      spy={true}
      smooth={true}
      offset={-250}
      duration={500}
    >
      <button className=" flex text-xl font-bold hover:text-gray-300  transition-all tracking-tighter  w-fit  ">
        <span>Pedro Felippe</span>
      </button>
    </ScrollLink>
  );
};

const HeaderButtons = () => {
  return (
    <motion.div className="flex space-x-3 md:space-x-6 justify-center  items-center  ">
      <ScrollLink
        activeClass="active"
        to="hero-container"
        spy={true}
        smooth={true}
        offset={-250}
        duration={500}
      >
        <button className="text-[16px] font-semibold tracking-wider  hover:underline transition-all hover:text-gray-300 ">
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
        <button className=" py-6 text-[16px] font-semibold  hover:underline transition-all hover:text-gray-300 ">
          Works
        </button>
      </ScrollLink>

      <ScrollLink
        activeClass="active"
        to="contact-content"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <button className="py-6 text-[16px] font-semibold  border-0 text-lg hover:underline transition-all hover:text-gray-300 ">
          Contact
        </button>
      </ScrollLink>
    </motion.div>
  );
};
const Header = () => {
  return (
    <motion.header
      className=" text-[#101010] flex fixed h-16 z-50 bg-white border-b
      left-0 right-0 backdrop-blur-3xl w-full   transition-all "
    >
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex w-full mx-auto items-center justify-between  max-xl:px-6 max-w-7xl"
      >
        <Logo />
        <HeaderButtons />
      </motion.nav>
    </motion.header>
  );
};

export default Header;
