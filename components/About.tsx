import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Avatar from "../public/assets/eu-2.jpg";
import SocialIcons from "./atoms/SocialIcons";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center  max-w-7xl px-10  justify-center mx-auto items-center
      md:text-left md:flex-row "
    >
      <h3 className="absolute top-28 sm:top-32 uppercase tracking-[20px] text-gray-300 text-2xl">
        Sobre
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://media-exp1.licdn.com/dms/image/D4D03AQE28xUjOpRMFQ/profile-displayphoto-shrink_800_800/0/1670388183529?e=1675900800&v=beta&t=R9vyVJwpYIa8m4moXmVgDxFh988KmPx2PbrBf5QEw1o"
        className="mt-20 mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-lg object-cover
         md:w-64 md:h-95 xl:w-[400px] xl:h-[450px] "
      />

      <div className="space-y-10  md:px-20">
        <h4 className="text-4xl font-semibold">
          {" "}
          Então, <br />
          <span className="underline decoration-[#F7AB0A]/50">
            quem sou eu?
          </span>
        </h4>
        <p className="text-xl">
          Sou um Web Developer com experiência em implementar componentes de
          interface de usuário responsivos e de qualidade. Minha Stack principal
          é React, Node, Next e Typescript. Consigo me comunicar bem em inglês
          (nível C2), sendo acostumado a participarem reuniões em inglês com
          membros de vários países.
        </p>
        <SocialIcons />
      </div>
    </div>
  );
}

export default About;
