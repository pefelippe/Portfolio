import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className=" bg-[#131313] bottom-0 w-screen p-5  flex items-center justify-around text-white snap-start  ">
      <span className="text-sm text-gray-100 text-center">
        Copyright © 2022 Pedro Felippe.
      </span>
    </footer>
  );
}

export default Footer;
