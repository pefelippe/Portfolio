import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

export default function Icons({}: Props) {
  return (
    <div className="flex gap-2 justify-center">
      <AnimatedBtn
        className="w-fit  text-lg font-semibold  p-2 rounded bg-[#121212]  "
        href="https://github.com/pefelippe"
      >
        <FaGithub className="h-7 w-7 xl:h-8 xl:w-8text-[# " />
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit   text-lg font-semibold p-2 rounded bg-[#121212]"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedinIn className="h-7 w-7 xl:h-8 xl:w-8 text-[#fff]" />
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit   text-lg font-semibold p-2 rounded bg-[#121212]"
        href="https://resume.io/r/m2cn8pnqu"
      >
        <FaFilePdf className="h-7 w-7 xl:h-8 xl:w-8  text-[#fff]" />
      </AnimatedBtn>
    </div>
  );
}
