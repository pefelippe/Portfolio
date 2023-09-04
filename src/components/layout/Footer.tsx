import { motion } from "framer-motion";
import React from "react";

import AnimatedBtn from "../animated/AnimatedBtn";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="md:absolute bottom-0 p-8 font-light  text-black leading-relaxed  flex  mx-auto
    justify-center lg:justify-start text-lg px-8"
    >
      <div className="w-full  text-xl mx-auto flex md:flex-col max-md:justify-around md:gap-4">
        <motion.a
          whileHover={{
            transition: { duration: 0.1 },
          }}
          className=""
          href="https://github.com/pefelippe"
        >
          <div className=" flex gap-2 items-center w-full transition-all hover:text-blue">
            <FaGithub /> Github
          </div>
        </motion.a>

        <motion.a
          whileHover={{
            transition: { duration: 0.1 },
          }}
          className=""
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <div
            className="  flex gap-2 items-center 
             transition-all  hover:text-blue"
          >
            <FaLinkedin /> Linkedin
          </div>
        </motion.a>

        <motion.a
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
          className=" flex gap-1 items-center 
          transition-all  hover:text-blue"
        >
          <>
            <FaFilePdf />
            <p>Resume</p>
          </>
        </motion.a>
      </div>
    </motion.footer>
  );
}

export default Footer;
