import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <div
      className="max-lg:hidden  fixed p-4 top-[35%] left-0 rounded-r-xl flex flex-col gap-8 w-fit 
    text-white items-center text-xl text-black max-w-xl bg-gray-700 "
    >
      <AnimatedBtn className="" href="https://github.com/pefelippe">
        <div className=" flex gap-3 items-center w-full font-semibold transition-all hover:text-blue">
          <FaGithub className="h-10 w-10" />
          Github
        </div>
      </AnimatedBtn>

      <AnimatedBtn
        className=""
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <div
          className="  flex gap-3 items-center 
          font-semibold transition-all  hover:text-blue"
        >
          <FaLinkedinIn className="h-10 w-10 " />
          Linkedin
        </div>
      </AnimatedBtn>

      <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
        <div
          className="  flex gap-3 items-center 
          font-semibold transition-all  hover:text-blue"
        >
          <FaFilePdf className="h-10 w-10" />
        </div>
      </AnimatedBtn>
    </div>
  );
}
