import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../animated/AnimatedBtn";
import { Button } from "../ui/button";

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
      <button className="flex text-xl font-bold hover:text-[#f0e140]/80 transition-all tracking-tight w-fit max-md:hidden ">
        <span>
          <span>Felippeλ‍</span>
        </span>
      </button>
    </ScrollLink>
  );
};

const SocialButtons = () => {
  return (
    <div className="flex items-center w-fit space-x-2">
      <AnimatedBtn
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <Button variant={"ghost"} size="icon">
          <LinkedinIcon />
        </Button>
      </AnimatedBtn>

      <AnimatedBtn href="https://github.com/pefelippe">
        <Button variant={"ghost"} size="icon">
          <GitHubLogoIcon className="h-7 w-6" />
        </Button>
      </AnimatedBtn>
    </div>
  );
};

const HeaderButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex space-x-4 md:space-x-8 justify-center  items-center max-md:justify-start font-medium w-full"
    >
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
          Projects
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
        <button className="py-6 border-0 text-lg  hover:underline transition-all hover:text-gray-300 ">
          Contact
        </button>
      </ScrollLink>

      {/* <ModeToggle /> */}
    </motion.div>
  );
};
const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex fixed h-16 z-40  left-0 right-0 backdrop-blur-3xl w-full text-white  bg-blue transition-all"
    >
      <motion.nav className="flex w-full mx-auto items-center justify-between max-xl:px-6 max-w-7xl">
        <Logo />
        <HeaderButtons />
        <SocialButtons />
      </motion.nav>
    </motion.header>
  );
};

export default Header;
