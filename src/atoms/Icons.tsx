import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

export default function Icons({}: Props) {
  return (
    <div className="flex gap-8 justify-center">
      <AnimatedBtn
        className="w-fit rounded-xl text-lg font-semibold  "
        href="https://github.com/pefelippe"
      >
        <FaGithub className=" h-8 w-8   hover:text-[#5865f2] text-[#fff] " />
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit rounded-xl  text-lg font-semibold"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedinIn className="h-8 w-8  hover:text-[#5865f2] text-[#fff]" />
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit rounded-xl  text-lg font-semibold"
        href="https://resume.io/r/m2cn8pnqu"
      >
        <FaFilePdf className="h-8 w-8  hover:text-[#5865f2] text-[#fff]" />
      </AnimatedBtn>
    </div>
  );
}
