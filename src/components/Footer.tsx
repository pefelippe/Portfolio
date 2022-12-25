import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <footer
      className="flex flex-col  w-full
      bg-[#0e0d0d]  text-[#b7b7b7] bottom-0 p-10  
      items-center snap-center  gap-10 "
    >
      <nav className="flex  items-center gap-10 ">
        <a href="#" className="">
          <FaGithub className="h-6 w-6  hover:text-[#F7AB0A]" />
        </a>
        <a href="#" className="">
          <FaLinkedinIn className="h-6 w-6  hover:text-[#F7AB0A]" />
        </a>
        <a href="#" className="">
          <FaInstagram className="h-6 w-6  hover:text-[#F7AB0A]" />
        </a>
      </nav>

      <span className="flex text-sm xl:text-base">
        Copyright © 2022 Pedro Felippe.
      </span>
    </footer>
  );
}

export default Footer;
