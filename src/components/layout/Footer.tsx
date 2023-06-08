import Link from "next/link";
import React from "react";

import SocialLinks from "../SocialLinks";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full py-10 flex h-[10vh]  justify-center items-center mx-auto text-lg max-xl:px-6 text-black 
    snap-start"
    >
      <div className="w-full max-w-3xl flex justify-center max-md:flex-col max-md:justify-center items-center gap-6">
        <span className="">Desenvolvido por Pedro Felippe. © {year}.</span>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
