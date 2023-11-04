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
      <div className="h-[15vh]  max-w-7xl  max-lg:max-w-xl mx-auto flex items-center  max-xl:px-6 text-base font-normal justify-between">
        <Link
          href="/"
          className="uppercase tracking-[5px] flex items-center justify-center gap-2 font-bold hover:text-gray-300 text-xl w-fit"
        >
          pedro felippe
        </Link>

        <div className="flex items-center text-lg font-medium text-gray-100 transition-all  max-md:hidden  w-fit">
          <AnimateLink
            href="/"
            className={`p-2 px-6 ${
              router.pathname === "/" ? "bg-[#202020] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>Home</p>
          </AnimateLink>
          <AnimateLink
            href="/about"
            className={`p-2 px-6 ${
              router.pathname === "/about" ? "bg-[#202020] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>About</p>
          </AnimateLink>
          <AnimateLink
            href="/projects"
            className={`p-2 px-6 ${
              router.pathname === "/projects" ? "bg-[#202020] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>Projects</p>
          </AnimateLink>
          <AnimateLink
            href="/contact"
            className={`p-2 px-6 ${
              router.pathname === "/contact" ? "bg-[#202020] text-white" : ""
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
