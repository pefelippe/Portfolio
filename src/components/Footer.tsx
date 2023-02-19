import React from "react";

import Icons from "./../atoms/Icons";
import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="min-h-[10vh]  py-20 relative flex justify-center items-center  w-full max-w-screen-2xl mx-auto max-md:flex-col max-md:gap-4">
      <span className="flex items-center">
        Desenvolvido por Pedro Felippe. © {year}.
      </span>
    </footer>
  );
}

export default Footer;
