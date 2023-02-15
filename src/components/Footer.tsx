import { useRouter } from "next/router";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="relative ">
      <div className="flex justify-center items-center pb-5  gap-12">
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
    </footer>
  );
}

export default Footer;
