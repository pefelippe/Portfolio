import Link from "next/link";
import React from "react";

import SocialLinks from "../SocialLinks";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full min-h-[30vh] py-10 flex justify-center items-center mx-auto text-lg max-xl:px-6 text-black 
    bg-[#161616] text-[#fff]  snap-start"
    >
      <div className="w-full max-w-screen-2xl gap-4 flex items-center max-sm:flex-col justify-center">
        <div className="flex flex-col gap-10 items-center">
          <Link href="/" className="text-[1.8rem] font-bold min-w-fit ">
            Pedro Felippe
          </Link>
          <span className="">Desenvolvido por Pedro Felippe. © {year}.</span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
