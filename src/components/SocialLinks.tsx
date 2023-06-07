import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <div className="absolute p-6 left-0 rounded-r-xl flex flex-col gap-6 w-fit text-white items-center text-xl text-black max-w-xl bg-[#5865f2]/90  ">
      <AnimatedBtn className="" href="https://github.com/pefelippe">
        <div className=" flex gap-3 items-center w-full font-semibold transition-all hover:text-[#fff]">
          <FaGithub className="h-10 w-10" />
        </div>
      </AnimatedBtn>

      <AnimatedBtn
        className=""
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <div
          className="  flex gap-3 items-center 
          font-semibold transition-all  hover:text-[#fff]"
        >
          <FaLinkedinIn className="h-10 w-10 " />
        </div>
      </AnimatedBtn>

      <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
        <div
          className="  flex gap-3 items-center 
          font-semibold transition-all  hover:text-[#fff]"
        >
          <FaFilePdf className="h-10 w-10" />
        </div>
      </AnimatedBtn>
    </div>
  );
}
