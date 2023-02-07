import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="absolute bottom-0 right-0 p-10">
      <div className="flex flex-col justify-center gap-8">
        <AnimatedBtn
          className="w-fit rounded-xl text-lg font-semibold  "
          href="https://github.com/pefelippe"
        >
          <FaGithub className=" h-8 w-8  hover:text-[#5865f2] text-[#fff] " />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl  text-lg font-semibold"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className=" h-8 w-8  hover:text-[#5865f2] text-[#fff]" />
        </AnimatedBtn>
      </div>
    </footer>
  );
}

export default Footer;
