import React from "react";

import SocialLinks from "../SocialLinks";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="min-h-[10vh] py-10 flex justify-center items-center mx-auto text-xl max-xl:px-6 text-black bg-[#f5f5f5] text-[#000]">
      <div className="w-full max-w-screen-2xl gap-8 flex items-center max-sm:flex-col justify-around">
        <span className="">Desenvolvido por Pedro Felippe. © {year}.</span>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
