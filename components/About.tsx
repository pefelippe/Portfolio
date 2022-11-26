import Image from "next/image";
import React from "react";
import Avatar from "../public/38574428.png";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-grow max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre
      </h3>
      <div className="flex relative text-left space-x-6 items-center align-items-center">
        <div className="text-2xl">
          Atuo na área de desenvolvimento Web, sendo a minha stack React, Node e
          Typescript. <br /> <br />
          Já fui muitas vezes responsável por implementar componentes de
          interface de usuário responsivos e de qualidade, além de efetuar
          manutenções em códigos existentes, bem como testar e desenvolver novas
          funcionalidades.
        </div>

        <Image
          src={Avatar}
          alt="pefelippe avatar"
          className="object-fit relative mx-auto h-52 w-52 rounded-full "
        />
      </div>
    </div>
  );
}

export default About;
