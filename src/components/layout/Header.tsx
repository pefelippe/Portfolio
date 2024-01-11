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
      <button className="uppercase t flex text-2xl font-bold hover:text-[#101010]/80 transition-all tracking-tighter  w-fit  ">
        <span>PedroFelippe</span>
      </button>
    </ScrollLink>
  );
};

const HeaderButtons = () => {
  return (
    <motion.div className="flex space-x-4 md:space-x-6 justify-center  items-center  font-medium ">
      <ScrollLink
        activeClass="active"
        to="hero-container"
        spy={true}
        smooth={true}
        offset={-250}
        duration={500}
      >
        <button className="text-lg  hover:underline transition-all hover:text-gray-300 ">
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
        <button className=" py-6 text-lg  hover:underline transition-all hover:text-gray-300 ">
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
        <button className="py-6 border-0 text-lg hover:underline transition-all hover:text-gray-300 ">
          Contact
        </button>
      </ScrollLink>
    </motion.div>
  );
};
const Header = () => {
  return (
    <motion.header className="bg-[#101010] text-white flex fixed h-20 z-50  left-0 right-0 backdrop-blur-3xl w-full uppercase  transition-all ">
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
