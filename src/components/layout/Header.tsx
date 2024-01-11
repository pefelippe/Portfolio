import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
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
      <button className="flex text-2xl font-bold hover:text-[#f0e140]/80 transition-all tracking-tight w-fit  ">
        <span>
          <span>Felippeλ‍</span>
        </span>
      </button>
    </ScrollLink>
  );
};

const HeaderButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex space-x-4 md:space-x-6 justify-center  items-center  font-medium "
    >
      <ScrollLink
        activeClass="active"
        to="hero-container"
        spy={true}
        smooth={true}
        offset={-250}
        duration={500}
      >
        <button className="text-md  hover:underline transition-all hover:text-gray-300 ">
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
        <button className=" py-6 text-md  hover:underline transition-all hover:text-gray-300 ">
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
        <button className="py-6 border-0 text-md hover:underline transition-all hover:text-gray-300 ">
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
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="flex fixed h-20 z-50  left-0 right-0 backdrop-blur-3xl w-full  bg-white transition-all"
    >
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="flex w-full mx-auto items-center justify-between  max-xl:px-6 max-w-3xl"
      >
        <Logo />
        <HeaderButtons />
      </motion.nav>
    </motion.header>
  );
};

export default Header;
