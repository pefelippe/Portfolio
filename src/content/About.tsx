import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col  lg:flex-row  justify-center items-center text-center  py-20 mx-auto
       max-w-7xl  "
    >
      <div className="flex flex-col space-y-4 justify-center  max-w-2xl  ">
        <h4 className="text-4xl font-semibold ">
          <span className="underline bg-[#F7AB0A] ">Quem sou eu</span>
        </h4>

        <p className="text-base md:text-xl">
          Sou um Web Developer com experiência em implementar componentes de
          interface de usuário responsivos e de qualidade. <br />
          <br />
          Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
          participarem reuniões em inglês com membros de vários países.
          <br />
          <br />
          Minha stack principal é: React, Node e Typescript.
          <br />
        </p>
      </div>
      {/* <Image
        alt="avatar-pefelippe"
        src={ImageAvatar}
        height={350}
        width={350}
        className="rounded-lg h-[250px] w-[250px] lg:h-[350px] lg:w-[350px]"
      /> */}
    </div>
  );
}

export default About;
