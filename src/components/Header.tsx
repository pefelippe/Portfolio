import React from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  return (
    <header className=" mx-auto flex max-w-7xl justify-end gap-6 py-4 ">
      <AnimatedBtn
        className="w-fit rounded-xl text-lg font-semibold"
        href="https://github.com/pefelippe"
      >
        <FaGithub className="h-8 w-8   hover:text-[#5865f2] " />
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit rounded-xl  text-lg font-semibold"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedinIn className="h-8 w-8  hover:text-[#5865f2] " />
      </AnimatedBtn>
    </header>
  );
}

export default Header;
