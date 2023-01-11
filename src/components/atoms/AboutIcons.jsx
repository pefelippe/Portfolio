import React from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AnimatedBtn from "../motion/AnimatedBtn";

function AboutIcons() {
  return (
    <nav className="flex justify-center lg:justify-start items-start gap-5 pt-6">
      <AnimatedBtn
        href="https://github.com/pefelippe"
        className=" border-2 border-[#222]   rounded-full transition-all flex gap-2  justify-center items-center p-3 font-semibold"
      >
        <FaGithub className=" socialMediaIcon  hover:border-[#fff] text-[#fff] " />{" "}
      </AnimatedBtn>

      <AnimatedBtn
        href="https://www.linkedin.com/in/pedro-felippe/"
        className="border-2 border-[#222]  hover:border-[#fff]  rounded-full transition-all flex gap-2  justify-center items-center p-3 font-semibold"
      >
        <FaLinkedinIn className="socialMediaIcon text-[#fff] " />
      </AnimatedBtn>

      <AnimatedBtn
        href="https://drive.google.com/file/d/1myzekVeAuc6z-zFfHRZ9Sy-mKLkQ1oLK/view?usp=sharing"
        className=" border-2 border-[#222]  hover:border-[#fff]  rounded-full transition-all flex gap-2  justify-center items-center p-3 font-semibold"
      >
        <FaFileDownload className="socialMediaIcon text-[#fff] " />
      </AnimatedBtn>
    </nav>
  );
}

export default AboutIcons;
