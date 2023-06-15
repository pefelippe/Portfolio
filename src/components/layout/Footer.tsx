import Link from "next/link";
import React from "react";

import SocialLinks from "../SocialLinks";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      className=" max-w-screen-md text-medium text-gray-300 w-full py-10 flex h-[10vh]  justify-center items-center mx-auto text-md max-xl:px-6 text-black 
    snap-start"
    >
      <div className="w-full max-w-3xl flex justify-center max-md:flex-col max-md:justify-center items-center gap-6">
        <span className="">Pedro Felippe. © {year}. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
