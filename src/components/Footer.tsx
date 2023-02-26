import React from "react";
import {
  FaGithub,
  FaAngleDoubleRight,
  FaFilePdf,
  FaLinkedinIn,
} from "react-icons/fa";
import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-4  h-fit flex justify-center items-center mx-auto  max-xl:px-6  bg-[#060606] text-[#fff] ">
      <div className="w-full gap-4 flex  justify-around items-center max-sm:flex-col">
        <span className="">Desenvolvido por Pedro Felippe. © {year}.</span>
        <div className="flex gap-4 justify-center">
          <AnimatedBtn
            className="w-fit border-2 border-[#242424] p-2 rounded-full hover:border-[#5865f2]"
            href="https://github.com/pefelippe"
          >
            <FaGithub className="h-8 w-8  text-[#5865f2]" />
          </AnimatedBtn>

          <AnimatedBtn
            className="w-fit border-2 border-[#242424] p-2 rounded-full hover:border-[#5865f2]"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <FaLinkedinIn className="h-8 w-8 text-[#5865f2] " />
          </AnimatedBtn>

          <AnimatedBtn
            className="w-fit border-2 border-[#242424] p-2 rounded-full hover:border-[#5865f2]"
            href="https://resume.io/r/m2cn8pnqu"
          >
            <FaFilePdf className="h-8 w-8  text-[#5865f2]" />
          </AnimatedBtn>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
