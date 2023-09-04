import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav
      className="h-[10vh]  items-center text-gray-850   mx-auto font-light text-lg flex max-md:px-8  max-w-4xl 
    w-full justify-between"
    >
      <nav className=" flex gap-6 text-md items-center">
        <Link className="hover:text-blue" target="" href="/">
          Home
        </Link>
        <Link className="hover:text-blue" target="" href="/projects">
          Projects
        </Link>
        <Link className="hover:text-blue" target="" href="/contact">
          Contact
        </Link>
      </nav>
      <div className="flex gap-6">
        <Link
          className="hover:text-blue"
          target="_blank"
          href="github.com/pefelippe"
        >
          <FaGithub className="h-6 w-6 hover:text-blue" />
        </Link>
        <Link
          className="hover:text-blue"
          target="_blank"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedin className="h-6 w-6 hover:text-blue" />
        </Link>
        <Link
          className="hover:text-blue"
          target="_blank"
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
        >
          <FaFilePdf className="h-6 w-6 hover:text-blue" />
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
