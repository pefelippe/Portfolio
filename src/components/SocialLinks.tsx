import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <div className="flex w-fit gap-8 justify-center  items-center  text-xl ">
      <AnimatedBtn className="" href="https://github.com/pefelippe">
        <div
          className=" flex gap-3 items-center 
         font-semibold transition-all text-white  hover:text-[#5865f2]"
        >
          <FaGithub className="h-8 w-8 " />
        </div>
      </AnimatedBtn>

      <AnimatedBtn
        className=""
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <div
          className="  flex gap-3 items-center 
          font-semibold transition-all text-white  hover:text-[#5865f2]"
        >
          <FaLinkedinIn className="h-8 w-8 " />
        </div>
      </AnimatedBtn>

      <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
        <div
          className="  flex gap-3 items-center 
          font-semibold transition-all   text-white  hover:text-[#5865f2]"
        >
          <FaFilePdf className="h-8 w-8 " />
        </div>
      </AnimatedBtn>
    </div>
  );
}
