import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <div className="flex  gap-6 justify-center mx-auto text-xl ">
      <AnimatedBtn className="" href="https://github.com/pefelippe">
        <div
          className="p-3 border-2 rounded-full  flex gap-3 items-center 
         font-semibold transition-all text-[#fff]  border-[#5865f2]"
        >
          <FaGithub className="h-7 w-7 " />
        </div>
      </AnimatedBtn>

      <AnimatedBtn
        className=""
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <div
          className="p-3 border-2 rounded-full  flex gap-3 items-center 
         font-semibold transition-all text-[#fff]  border-[#5865f2]"
        >
          <FaLinkedinIn className="h-7 w-7 " />
        </div>
      </AnimatedBtn>

      <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
        <div
          className="p-3 border-2 rounded-full  flex gap-3 items-center 
         font-semibold transition-all text-[#fff]  border-[#5865f2]"
        >
          <FaFilePdf className="h-7 w-7 " />
        </div>
      </AnimatedBtn>
    </div>
  );
}
