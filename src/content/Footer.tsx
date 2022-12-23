import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <footer
      className="flex flex-col   
      bg-[#000] text-white bottom-0 p-20  
      items-center snap-start overflow-hidden"
    >
      <div className="w-10/12 space-y-10 divide-y-2 ">
        <nav className="flex justify-center xl:justify-between">
          <Link href="#hero">
            <span className="logoBtn text-[#fff] text-2xl">pedrofelippe_</span>
          </Link>

          <div className="flex items-center max-xl:hidden">
            <Link className="headerBtn hover:text-[#F7AB0A]" href="#hero">
              Home
            </Link>
            <Link className="headerBtn hover:text-[#F7AB0A]" href="#about">
              Sobre
            </Link>
            <Link className="headerBtn hover:text-[#F7AB0A]" href="#skills">
              Skills
            </Link>
            <Link className="headerBtn hover:text-[#F7AB0A]" href="#experience">
              Experiência
            </Link>
            <Link className="headerBtn hover:text-[#F7AB0A]" href="#contact">
              Contato
            </Link>
          </div>
        </nav>

        <div className="flex flex-row justify-between  space-y-10">
          <span className="flex text-sm xl:text-base items-end">
            Copyright © 2022 Pedro Felippe.
          </span>

          <div className="flex gap-4 ">
            <a href="#" className="flex justify-center">
              <FaGithub className="h-5 w-5 hover:text-[#F7AB0A]" />
            </a>
            <a href="#" className="flex">
              <FaLinkedinIn className="h-5 w-5  hover:text-[#F7AB0A]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
