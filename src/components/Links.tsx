import Link from "next/link";
import React from "react";

type Props = {};

export default function Links({}: Props) {
  return (
    <nav className="space-x-16">
      <Link className="headerBtn hover:text-[#F7AB0A]" href="#about">
        Quem sou eu 
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
    </nav>
  );
}
