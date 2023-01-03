import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ImageAvatar from "../../public/assets/avatar-pdr.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col  lg:flex-row  justify-evenly items-center text-center  py-10 
      lg:text-left max-xl:space-y-4 max-sm:mx-10 max-w-7xl  mx-auto  rounded-md"
    >
      <div className="space-y-4">
        <Image
          alt="avatar-pefelippe"
          src={ImageAvatar}
          height={300}
          width={300}
          className="rounded-lg border-4 border-[#202020]"
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
        <nav className="flex justify-center lg:justify-start items-center gap-5 ">
          <a
            href="#"
            className="flex items-center gap-2 border-2 border-[#121212] hover:bg-[#f1f1f1] rounded-lg p-2 text-lg transition-all
            ease-in"
          >
            <FaGithub className="socialMediaIcon text-[#121212] " />
            Github
          </a>
          <a
            href="#"
            className="flex items-center gap-2 border-2 border-[#121212] rounded-lg p-2 transition-all
            ease-in bg-[#005b8e] hover:bg-[#004972] text-[#fff]  text-lg "
          >
            <FaLinkedinIn className="socialMediaIcon text-[#fff]" />
            Linkedin
          </a>
        </nav>
      </div>
    </div>
  );
}

export default About;
