import React from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AnimatedBtn from "../motion/AnimatedBtn";

function AboutIcons() {
  return (
    <nav className="flex justify-center lg:justify-start items-start gap-10 ">
      <AnimatedBtn
        href="https://github.com/pefelippe"
        className="flex justify-center items-center"
      >
        <FaGithub className=" socialMediaIcon  text-[#fff] hover:text-[#5865f2]" />{" "}
      </AnimatedBtn>

      <AnimatedBtn
        href="https://www.linkedin.com/in/pedro-felippe/"
        className="flex justify-center items-center"
      >
        <FaLinkedinIn className="socialMediaIcon text-[#fff] hover:text-[#5865f2]" />
      </AnimatedBtn>

      <AnimatedBtn
        href="https://drive.google.com/file/d/1myzekVeAuc6z-zFfHRZ9Sy-mKLkQ1oLK/view?usp=sharing"
        className="flex justify-center items-center"
      >
        <FaFileDownload className="socialMediaIcon text-[#fff] hover:text-[#5865f2]" />
      </AnimatedBtn>
    </nav>
  );
}

export default AboutIcons;
