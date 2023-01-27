import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h4 className="mx-auto text-center w-full text-3xl font-bold tracking-tight md:text-4xl max-lg:pb-5 ">
        <span className=" bg-[#000] text-[#fff]">Quem sou eu</span>
      </h4>

      <div className="flex max-lg:flex-col gap-4 xl:gap-12 items-center ">
        <motion.img
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          transition={{
            duration: 1.75,
          }}
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[200px] w-[200px]"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 150,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.75,
          }}
          className="flex flex-col max-xl:items-center justify-center max-w-xl px-8"
        >
          <span className="text-base md:text-xl max-lg:text-center space-y-4 text-[#e4e4e4]">
            <p>
              Me chamo Pedro Felippe, sou Desenvolvedor Web e possuo cerca de 3
              anos de experiência no mercado.
            </p>
            <p> Consigo falar e entender bem a lingua inglesa (nível C2).</p>

            <p>
              Trabalho como Web Developer no{" "}
              <a
                href="https://www.atlantico.com.br/"
                className="font-semibold  text-[#5865f2]"
                target="_blank"
                rel="noreferrer"
              >
                Instituto Atlântico
              </a>
              .
            </p>
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
