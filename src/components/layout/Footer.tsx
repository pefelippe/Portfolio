import React from "react";
import SocialLinks from "../SocialLinks";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10  h-fit flex justify-center items-center mx-auto  max-xl:px-6 text-white ">
      <div className="w-full gap-4 flex  justify-around items-center max-sm:flex-col">
        <span className="">Desenvolvido por Pedro Felippe. © {year}.</span>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
