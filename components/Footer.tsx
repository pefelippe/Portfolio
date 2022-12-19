import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className=" bottom-0 w-screen p-5  flex items-center justify-around bg-[#141414] text-white snap-start ">
      <span className="text-sm text-gray-100 text-center">
        Copyright © 2022 Pedro Felippe.
      </span>
      <div className="flex space-x-4 items-center">
        <a className="cursor-pointer">
          <FaGithub className="h-6 w-6" />
        </a>
        <a className="cursor-pointer">
          <FaLinkedinIn className="h-6 w-6 " />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
