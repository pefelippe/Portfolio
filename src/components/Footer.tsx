import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="px-10  flex justify-center py-8 ">
      <div className="flex gap-8">
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
      </div>
    </footer>
  );
}

export default Footer;
