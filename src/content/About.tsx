import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ImageAvatar from "../../public/assets/avatar-pdr.png";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col  lg:flex-row  justify-evenly items-center text-center  py-10 
      lg:text-left max-xl:space-y-4 max-sm:mx-10 max-w-7xl  mx-auto"
    >
      <div className="space-y-4">
        <Image
          alt="avatar-pefelippe"
          src={ImageAvatar}
          height={300}
          width={300}
          className="rounded-lg border-8 border-[#202020] opacity-90 hover:opacity-100 transition-all"
        />
      </div>
      <div className="flex flex-col space-y-4 justify-center xl:h-[450px] max-w-xl  ">
        <h4 className="text-4xl font-semibold ">
          Então,
          <br />
          <span className="underline decoration-[#F7AB0A]/50 ">
            quem sou eu?
          </span>
        </h4>

        <p className="text-base md:text-xl">
          Sou um Web Developer com experiência em implementar componentes de
          interface de usuário responsivos e de qualidade. <br />
          <br />
          Minha stack principal é: React, Node e Typescript.
          <br />
          <br />
          Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
          participarem reuniões em inglês com membros de vários países.
        </p>
      </div>
    </div>
  );
}

export default About;
