import React from "react";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="h-[10vh] text-white  flex justify-center items-center mx-auto  max-xl:px-6 text-black ">
      <div className="w-full max-w-screen-2xl gap-4 flex justify-center items-center max-sm:flex-col">
        <span className="">Desenvolvido por Pedro Felippe. © {year}.</span>
      </div>
    </footer>
  );
}

export default Footer;
