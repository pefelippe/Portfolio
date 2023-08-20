import React from "react";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="h-[10vh] font-light text-gray-100 py-10 flex  text-md  w-full max-w-7xl mx-auto ">
      <span className="">Pedro Felippe. © {year}. All rights reserved.</span>
    </footer>
  );
}

export default Footer;
