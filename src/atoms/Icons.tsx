import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

export default function Icons({}: Props) {
  return (
    <div className="w-full flex justify-center gap-12">
      <AnimatedBtn
        className="w-fit rounded-xl text-lg font-semibold  "
        href="https://github.com/pefelippe"
      >
        <FaGithub className=" h-10 w-10   hover:text-[#5865f2] text-[#fff] " />
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit rounded-xl  text-lg font-semibold"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedinIn className=" h-10 w-10  hover:text-[#5865f2] text-[#fff]" />
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit rounded-xl  text-lg font-semibold"
        href="https://resume.io/r/m2cn8pnqu"
      >
        <FaFilePdf className=" h-10 w-10  hover:text-[#5865f2] text-[#fff]" />
      </AnimatedBtn>
    </div>
  );
}
