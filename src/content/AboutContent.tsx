/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div className="  flex  w-full items-start  justify-start   mx-auto  bg-[#1d1b22]  max-w-5xl rounded-3xl p-12">
      <div className="flex  gap-12 items-center  justify-start text-start  ">
        <motion.img
          src="/assets/avatar-pdr.png"
          alt="me"
          className="mx-auto rounded-3xl "
        />
        <main className="flex flex-col justify-center gap-8 w-full my-auto items-start  max-w-4xl ">
          <h1 className="text-4xl font-semibold text-white w-full">
            Web developer & Dev-Ops enthusiast.
          </h1>

          <h3 className="text-[#B3AFC0] font-normal text-lg  max-w-3xl">
            Iniciei minha aventura no mundo da programação aos 14 anos. Aos 16,
            já estava no mercado de trabalho. Aos 19 anos, liderava projetos.
            Com 21, dei um salto ousado e comecei a trabalhar para o exterior.{" "}
            <br />
            <br />
            Durante meu tempo no Brasil, tive a oportunidade não só de trabalhar
            em diversos projetos, mas também de contratar e mentorear mais de 20
            desenvolvedores. Agora, com 24 anos e 9 deles dedicados à
            programação, estou aqui para compartilhar meu conhecimento com você.
          </h3>
        </main>
      </div>
    </motion.div>
  );
}

export default AboutContent;
