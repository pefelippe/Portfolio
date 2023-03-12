import React from "react";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10  h-fit flex justify-center items-center mx-auto  max-xl:px-6 text-white ">
      <div className="w-full max-w-7xl gap-4 flex justify-center items-center max-sm:flex-col">
        <span className="">Desenvolvido por Pedro Felippe. © {year}.</span>
      </div>
    </footer>
  );
}

export default Footer;
