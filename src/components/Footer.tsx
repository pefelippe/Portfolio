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
      <span className="flex text-sm xl:text-base">
        Copyright © 2022 Pedro Felippe.
      </span>
    </footer>
  );
}

export default Footer;
