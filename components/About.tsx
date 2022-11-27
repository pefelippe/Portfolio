import Image from "next/image";
import React from "react";
import Avatar from "../public/38574428.png";

type Props = {};

function About({}: Props) {
  return (
    <div className="component-base">
      <h3 className="absolute top-32 uppercase tracking-[5px] text-gray-500 text-2xl ">
        Sobre
      </h3>
      <div className="flex justify-evenly space-x-4 items-center max-sm:flex-col ">
        <div className="text-2xl max-sm:text-xl ">
          Atuo na área de desenvolvimento Web, sendo a minha stack React, Node e
          Typescript. <br /> <br />
          Já fui muitas vezes responsável por implementar componentes de
          interface de usuário responsivos e de qualidade, além de efetuar
          manutenções em códigos existentes, bem como testar e desenvolver novas
          funcionalidades.
        </div>
      </div>
    </div>
  );
}

export default About;
