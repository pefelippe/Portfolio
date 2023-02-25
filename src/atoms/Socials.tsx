import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

export default function Icons({}: Props) {
  return (
    <div className="flex gap-6">
      <AnimatedBtn className="w-fit" href="https://github.com/pefelippe">
        <FaGithub className="h-7 w-7  text-[#fff]" />
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedinIn className="h-7 w-7 text-[#fff]" />
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit text-[#fff]"
        href="https://resume.io/r/m2cn8pnqu"
      >
        <FaFilePdf className="h-7 w-7 " />
      </AnimatedBtn>
    </div>
  );
}
