import { motion } from "framer-motion";

import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import AnimateLink from "../animated/AnimatedLink";
import AnimatedBtn from "./../animated/AnimatedBtn";

const Navbar = () => {
  return (
    <motion.nav
      className=" z-40 w-full backdrop-blur  transition-colors 
    duration-500 left-0 right-0 top-0  text-gray-100 h-[10vh]
    items-center justify-center flex mx-auto  max-w-screen-2xl p-10
     border-gray-700/10  max-md:px-8  py-4 text-base 
    leading-6 font-normal text-slate-700 dark:text-slate-200 bg-white"
    >
      <div className="flex w-full  justify-between items-center space-x-2 ">
        <AnimateLink
          href="/"
          className="font-bold text-2xl  text-blue px-2 py-2 rounded-md tracking-[1px]"
        >
          Pedro Felippe
        </AnimateLink>
        <div className=" flex items-center space-x-4  md:space-x-6 justify-center">
          <AnimatedBtn
            className="hover:text-blue"
            target="_blank"
            href="https://github.com/pefelippe"
          >
            <div className=" flex justify-center items-center transition-all rounded-xl">
              <FaGithub className="headerSocial" />
            </div>
          </AnimatedBtn>

          <AnimatedBtn
            className="hover:text-blue"
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <div className=" flex justify-center items-center transition-all rounded-xl">
              <FaLinkedin className="headerSocial" />
            </div>
          </AnimatedBtn>
          <AnimatedBtn
            className="hover:text-blue"
            target="_blank"
            href="https://docs.google.com/document/d/e/2PACX-1vQ0oK4H_ynaCvtXwtO4OvYmIIt4_6vn8lTQlWqj2KnoTR4ZfUWCzjpAuDPGToTPzwoqkN9FIEbiD7MU/pub"
          >
            <div className="flex justify-center items-center transition-all rounded-xl">
              <FaFilePdf className="headerSocial" />
            </div>
          </AnimatedBtn>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
