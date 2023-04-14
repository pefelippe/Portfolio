import React from "react";

import SocialLinks from "../SocialLinks";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full min-h-[10vh] py-10 flex justify-center items-center mx-auto text-lg max-xl:px-6 text-black 
    text-white bg-[#2e3039] "
    >
      <div className="w-full max-w-screen-2xl gap-8 flex items-center max-sm:flex-col justify-around">
        {/* <div className="flex flex-col gap-10">
          <Link
            href="/"
            className="text-[1.8rem] font-bold  text-white min-w-fit "
          >
            Pedro Felippe
          </Link>
          <SocialLinks />
        </div> */}
        <span className="">Desenvolvido por Pedro Felippe. © {year}.</span>
      </div>
    </footer>
  );
}

export default Footer;
