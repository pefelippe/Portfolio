import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type IProps = {};

interface ISocialBox {
  title: string;
  desc: string;
  children: JSX.Element;
  href: string;
}

const SocialBox = ({ title, desc, children, href }: ISocialBox) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col justify-center items-center text-center max-w-full cursor-pointer rounded-lg border w-80 h-72 hover:bg-[#5865f2] transition-all ease-in-out"
    >
      <div className="flex h-full flex-col items-center justify-center space-y-3 p-4 sm:p-2 md:p-4 ">
        <div>{children}</div>
        <h2 className="text-xl font-black">{title}</h2>
        <p className="text-base">{desc}</p>
      </div>
    </motion.a>
  );
};

function Contact({}: IProps) {
  return (
    <div className=" flex  flex-col   max-w-7xl items-center mx-auto pb-20 justify-center">
      <h1 className="mt-2 w-full text-center text-3xl font-bold tracking-tight  md:text-5xl lg:text-5xl ">
        Redes Sociais
      </h1>

      <div className="flex flex-col items-start justify-center space-y-10 sm:flex-row sm:space-y-0 sm:space-x-20 pt-10 ">
        <SocialBox
          desc="Conheça meus projetos"
          title="Github"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaGithub className=" socialMediaIcon h-20 w-20 text-[#fff]" />
        </SocialBox>

        <SocialBox
          desc="Entre em contato!"
          title="Linkedin"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className=" socialMediaIcon h-20 w-20 text-[#fff]" />
        </SocialBox>
      </div>
    </div>
  );
}

export default Contact;
