import React from "react";
import AnimatedBtn from "../components/motion/AnimatedBtn";
import { FaGithub, FaLinkedinIn, FaFilePdf } from "react-icons/fa";

type Props = {};

export default function Icons({}: Props) {
  return (
    <div className="w-full flex justify-center gap-12">
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

      <AnimatedBtn
        className="w-fit rounded-xl  text-lg font-semibold"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaFilePdf className=" h-8 w-8  hover:text-[#5865f2] text-[#fff]" />
      </AnimatedBtn>
    </div>
  );
}
