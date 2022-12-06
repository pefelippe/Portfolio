import Link from "next/link";

import React from "react";

function Links() {
  return (
    <>
      {/* <Link className="headerBtn" href="#hero">
        Home
      </Link> */}
      <Link className="headerBtn" href="#about">
        Sobre
      </Link>
      <Link className="headerBtn" href="#experience">
        Experiência
      </Link>
      <Link className="headerBtn" href="#skills">
        Habilidades
      </Link>
      <Link className="headerBtn" href="#projects">
        Projetos
      </Link>
      <Link className="headerBtn" href="#contact">
        Contato
      </Link>
    </>
  );
}

export default Links;
