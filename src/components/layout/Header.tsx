import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import AnimatedBtn from "../animated/AnimatedBtn";

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
      <button className="flex text-2xl font-bold hover:text-[#f0e140]/80 transition-all tracking-tight w-fit  ">
        <span>Felippe</span>
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
    <motion.header className="flex fixed h-20 z-50  left-0 right-0 backdrop-blur-3xl w-full  bg-white transition-all border-b">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex w-full mx-auto items-center justify-between  max-xl:px-6 max-w-4xl"
      >
        <Logo />
        <HeaderButtons />
        <motion.div className="flex items-center w-fit space-x-5 max-w-sm">
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-7 w-7 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-7 w-7 hover:text-blue" />
          </AnimatedBtn>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
