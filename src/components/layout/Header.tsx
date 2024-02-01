import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../animated/AnimatedBtn";
import { ModeToggle } from "../ui/mode-toggle";
import { Separator } from "../ui/separator";

export const Logo = () => {
  return (
    <ScrollLink
      activeClass="active"
      to="hero-container"
      spy={true}
      smooth={true}
      offset={-250}
      duration={500}
    >
      <button className=" flex text-xl  transition-all w-fit  tracking-tight font-bold">
        pedrofelippe.
      </button>
    </ScrollLink>
  );
};

const Header = () => {
  return (
    <motion.header className="fixed text-[#101010]  bg-white flex  h-16  w-full  z-50 px-6 border-b">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex w-full mx-auto items-center justify-between max-w-6xl"
      >
        <Logo />
        <motion.div className="flex w-full space-x-5 justify-center  items-center  max-sm:hidden">
          <ScrollLink
            activeClass="active"
            to="about-content"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="text-md  font-medium tracking-wider transition-all hover:text-blue   ">
              About
            </button>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="projects-container"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className=" text-md font-medium  transition-all  hover:text-blue ">
              Works
            </button>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="contact-content"
            spy={true}
            smooth={true}
            offset={-160}
            duration={500}
          >
            <button className="py-6 font-medium text-md transition-all  hover:text-blue ">
              Contact
            </button>
          </ScrollLink>
        </motion.div>

        <div className="flex w-fit items-center gap-4 justify-center ">
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-6 w-6 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-6 w-6 hover:text-blue" />
          </AnimatedBtn>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
