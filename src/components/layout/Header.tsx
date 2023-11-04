import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../animated/AnimatedBtn";
import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.header
      className="w-full  top-0 left-0 right-0  bg-[#121212] py-6
      text-white"
    >
      <div className="  max-w-5xl  mx-auto flex items-center  max-xl:px-4 text-base font-light justify-between ">
        <div className="flex items-start lg:items-center text-base font-medium text-gray-100 transition-all   w-fit lg:space-x-4">
          <AnimateLink
            href="/"
            className={`p-2 px-4 ${
              router.pathname === "/" ? "bg-[#242424] text-white" : ""
            } rounded-full hover:text-white`}
          >
            <p>Home</p>
          </AnimateLink>

          <AnimateLink
            href="/about"
            className={`p-2 px-4 ${
              router.pathname === "/about" ? "bg-[#242424] text-white" : ""
            } rounded-full hover:text-white`}
          >
            <p>About</p>
          </AnimateLink>
          <AnimateLink
            href="/projects"
            className={`p-2 px-4 ${
              router.pathname === "/projects" ? "bg-[#242424] text-white" : ""
            } rounded-full hover:text-white`}
          >
            <p>Projects</p>
          </AnimateLink>
          <AnimateLink
            href="/contact"
            className={`p-2 px-4 ${
              router.pathname === "/contact" ? "bg-[#242424] text-white" : ""
            } rounded-full hover:text-white`}
          >
            <p>Contact</p>
          </AnimateLink>
        </div>

        <div className=" items-center  justify-center gap-6  text-gray-100 flex  ">
          <AnimatedBtn
            className="rounded-full   font-semibold   "
            target="_blank"
            href="https://github.com/pefelippe"
          >
            <div className="flex flex-col items-center justify-center rounded-full gap-2 text-xl  hover:text-blue">
              <FaGithub className="headerSocial" />
            </div>
          </AnimatedBtn>

          <AnimatedBtn
            className="rounded-full  font-semibold"
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <div className="flex flex-col items-center justify-center   rounded-full gap-2 text-xl x  hover:text-blue">
              <FaLinkedin className="headerSocial" />
            </div>
          </AnimatedBtn>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
