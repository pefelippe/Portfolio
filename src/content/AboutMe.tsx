import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="flex flex-col items-center space-y-4 max-w-7xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="flex flex-col space-y-4">
          <motion.img
            transition={{
              duration: 1.75,
            }}
            alt="avatar-pefelippe"
            src="assets/avatar-pdr.png"
            className="rounded-full h-[200px] w-[200px] border-4"
          />
        </div>

        <span className="w-[500px] items-center text-[1rem] md:text-xl  text-[#e4e4e4] space-y-2 max-lg:text-center">
          <h3 className=" text-left text-3xl font-bold tracking-tight  md:text-4xl ">
            Quem sou eu
          </h3>

          <p>
            Sou um Web Dev com 3 anos de experiência no mercado. Consigo falar e
            entender bem a lingua inglesa (nível C2).
          </p>
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
      </div>
    </motion.div>
  );
}

export default About;
