import { motion } from "framer-motion";
import React from "react";
import ContentTitle from "../components/ContentTitle";
import ExperienceCard from "../components/ProjectCard";

type Props = {};

function Experience({}: Props) {
  const experiences = [
    {
      id: 3,
      title: "Estágio em P&D",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1413230067862355973/cAOV9v6P_400x400.jpg",
      company: "Instituto Atlântico",
      dateInit: "dez de 2020",
      dateEnd: "ago de 2021",
      sumarryPoints: [
        "Buscar e estudar novas tecnologias",
        "Criar provas de Conceito (PoCs)",
        "Participar na criação de Disclosures",
        "Reuniões em inglês com membros internacionais",
      ],
    },
    {
      id: 2,
      title: "Trainee em P&D",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1413230067862355973/cAOV9v6P_400x400.jpg",
      company: "Instituto Atlântico",
      dateInit: "set de 2021",
      dateEnd: "nov de 2021",
      sumarryPoints: [
        "Buscar e estudar novas tecnologias",
        "Criar provas de Conceito (PoCs)",
        "Participar na criação de Disclosures",
        "Reuniões em inglês com membros internacionais",
      ],
    },
    {
      id: 1,
      title: "Web Developer",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1413230067862355973/cAOV9v6P_400x400.jpg",
      company: "Instituto Atlântico",
      dateInit: "nov de 2021",
      dateEnd: "hoje",
      sumarryPoints: [
        "Traduzir designs em componentes de interface de usuário responsivos e de qualidade",
        "Criação de testes, manutenções em códigos e desenvolver novas funcionalidades",
        "Reuniões em inglês com membros internacionais",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="mx-auto w-full flex flex-col   "
    >
      <ContentTitle title="Experiência" />
    </motion.div>
  );
}

export default Experience;
