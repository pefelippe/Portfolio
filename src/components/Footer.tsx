import React from "react";
import {
  FaGithub,
  FaAngleDoubleRight,
  FaFilePdf,
  FaLinkedinIn,
} from "react-icons/fa";
import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="min-h-[10vh] h-fit flex justify-center items-center mx-auto  max-xl:px-6   text-[#fff]">
      <div className="gap-4 max-sm:flex-col">
        <span className="">Desenvolvido por Pedro Felippe. © {year}.</span>
      </div>
    </footer>
  );
}

export default Footer;
