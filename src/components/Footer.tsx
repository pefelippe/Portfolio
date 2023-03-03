import React from "react";
import {
  FaAngleDoubleRight,
  FaFilePdf,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10  h-fit flex justify-center items-center mx-auto  max-xl:px-6  bg-[#f5f5f5] text-[#060606] ">
      <div className="w-full gap-4 flex  justify-around items-center max-sm:flex-col">
        <span className="">Desenvolvido por Pedro Felippe. © {year}.</span>
        <div className="flex gap-8  justify-center">
          <AnimatedBtn className=" " href="https://github.com/pefelippe">
            <FaGithub className="h-8 w-8  hover:text-[#5865f2]" />
          </AnimatedBtn>

          <AnimatedBtn
            className=""
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <FaLinkedinIn className="h-8 w-8  hover:text-[#5865f2] " />
          </AnimatedBtn>

          <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
            <FaFilePdf className="h-8 w-8 hover:text-[#5865f2]" />
          </AnimatedBtn>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
