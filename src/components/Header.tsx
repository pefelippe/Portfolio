import React from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  return (
    <header className="  flex w-full justify-end gap-6 p-4 px-5">
      <AnimatedBtn
        className="w-fit rounded-xl text-lg font-semibold"
        href="https://github.com/pefelippe"
      >
        <FaGithub className=" h-7 w-7  hover:text-[#5865f2] " />
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit rounded-xl  text-lg font-semibold"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedinIn className=" h-7 w-7  hover:text-[#5865f2] " />
      </AnimatedBtn>
    </header>
  );
}

export default Header;
