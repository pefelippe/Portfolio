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
      <button className=" flex text-xl  transition-all w-fit  tracking-tight font-extrabold">
        pedrofelippe.
      </button>
    </ScrollLink>
  );
};

const Header = () => {
  return (
    <motion.header
      suppressHydrationWarning
      className=" flex fixed h-16 z-50 bg-white  w-full border-b dark:border-none dark:bg-[#101010]
      left-0 right-0 transition-"
    >
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex w-full mx-auto items-center justify-between max-lg:px-6 max-w-6xl"
      >
        <Logo />

        <motion.div className="flex space-x-3 md:space-x-4 justify-end  items-center  w-full max-sm:hidden">
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
      </motion.nav>
    </motion.header>
  );
};

export default Header;
