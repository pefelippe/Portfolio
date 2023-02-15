import React from "react";

import AnimatedBtn from "./../components/motion/AnimatedBtn";
import Icons from "./../atoms/Icons";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="h-[5vh] relative flex justify-center items-center  w-full max-w-7xl mx-auto max-md:flex-col max-md:gap-4">
      <span className="flex items-center">
        Desenvolvido por Pedro Felippe. © {year}.
      </span>
    </footer>
  );
}

export default Footer;
