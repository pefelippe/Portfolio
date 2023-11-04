import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../animated/AnimatedBtn";
import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.header
      className="w-full  top-0 left-0 right-0  bg-[#121212]
      text-white"
    >
      <div className="h-[10vh]  max-w-7xl  mx-auto flex items-center  max-xl:px-6 text-base font-normal justify-between">
        <Link
          href="/"
          className="uppercase tracking-[1px] flex items-center justify-center gap-2 font-bold hover:text-gray-300 text-lg w-fit"
        >
          pedro felippe
        </Link>

        <div className="flex items-center text-lg font-medium text-gray-100 transition-all  max-md:hidden  w-fit">
          <AnimateLink
            href="/"
            className={`p-3 px-8 ${
              router.pathname === "/" ? "bg-[#242424] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>Home</p>
          </AnimateLink>
          <AnimateLink
            href="/about"
            className={`p-3 px-8 ${
              router.pathname === "/about" ? "bg-[#242424] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>About</p>
          </AnimateLink>
          <AnimateLink
            href="/projects"
            className={`p-3 px-8 ${
              router.pathname === "/projects" ? "bg-[#242424] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>Projects</p>
          </AnimateLink>
          <AnimateLink
            href="/contact"
            className={`p-3 px-8 ${
              router.pathname === "/contact" ? "bg-[#242424] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>Contact</p>
          </AnimateLink>
        </div>

        <div className=" items-center  justify-center gap-6  text-gray-300 flex ">
          <AnimatedBtn
            className="rounded-md   font-semibold   "
            target="_blank"
            href="https://github.com/pefelippe"
          >
            <div className="flex flex-col items-center justify-center rounded-full gap-2 text-xl  hover:text-blue">
              <FaGithub className="headerSocial" />
            </div>
          </AnimatedBtn>

          <AnimatedBtn
            className="rounded-md  font-semibold"
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
