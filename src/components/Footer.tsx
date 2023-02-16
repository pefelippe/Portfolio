import React from "react";

import AnimatedBtn from "./../components/motion/AnimatedBtn";
import Icons from "./../atoms/Icons";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="min-h-[10vh]  py-4 relative flex justify-center md:justify-between items-center  w-full max-w-screen-2xl mx-auto max-md:flex-col max-md:gap-4">
      <span className="flex items-center">
        Desenvolvido por Pedro Felippe. © {year}.
      </span>
      <Icons />
    </footer>
  );
}

export default Footer;
