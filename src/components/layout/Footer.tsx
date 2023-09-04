import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../animated/AnimatedBtn";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <motion.footer className=" justify-between font-xs font-thin text-gray-850 mx-auto  text-lg flex px-8 p-10  max-w-xl w-full">
      <div className="flex w-full justify-center gap-4 ">
        <Link
          className="hover:text-blue"
          target="_blank"
          href="github.com/pefelippe"
        >
          Github
        </Link>
        <Link
          className="hover:text-blue"
          target="_blank"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          Linkedin
        </Link>
        <Link
          className="hover:text-blue"
          target="_blank"
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
        >
          Resume
        </Link>
      </div>
    </motion.footer>
  );
}

export default Footer;
