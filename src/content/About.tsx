import { motion } from "framer-motion";
import React from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="h-max flex flex-col  xl:flex-row   justify-center xl:justify-between  
      max-lg-px-5 mx-5 xl:mx-auto items-center max-w-7xl  max-xl:space-y-6 "
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
        }}
      >
        <motion.img
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          transition={{
            duration: 0.5,
          }}
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-xl h-[250px] w-[250px] xl:h-[350px] xl:w-[350px] shadow-2xl  "
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col justify-center max-xl:items-center  max-w-3xl space-y-4"
      >
        <h4 className="mt-2 w-full max-xl:text-center text-3xl font-bold tracking-tight  md:text-5xl lg:text-5xl">
          Então, quem sou eu?
        </h4>

        <p className="text-base md:text-xl max-lg:p-[20px] max-xl:text-center">
          Sou um Web Developer com experiência em implementar componentes de
          interface de usuário responsivos e de qualidade. <br />
          <br />
          Atualmente como Web Developer no{" "}
          <a
            href="https://www.atlantico.com.br/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline text-[#5865f2]"
          >
            Instituto Atlântico
          </a>
          <br />
          <br />
          Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
          participarem reuniões em inglês com membros de vários países.
          <br />
        </p>

        <div className="flex gap-6">
          <AnimatedBtn href="https://drive.google.com/file/d/1myzekVeAuc6z-zFfHRZ9Sy-mKLkQ1oLK/view?usp=sharing">
            <FaGithub className="socialMediaIcon h-8 w-8" />
          </AnimatedBtn>
          <AnimatedBtn href="https://drive.google.com/file/d/1myzekVeAuc6z-zFfHRZ9Sy-mKLkQ1oLK/view?usp=sharing">
            <FaLinkedinIn className="socialMediaIcon h-8 w-8" />
          </AnimatedBtn>

          <AnimatedBtn href="https://drive.google.com/file/d/1myzekVeAuc6z-zFfHRZ9Sy-mKLkQ1oLK/view?usp=sharing">
            <FaFileDownload className="socialMediaIcon h-8 w-8" />
          </AnimatedBtn>
        </div>
      </motion.div>
    </div>
  );
}

export default About;