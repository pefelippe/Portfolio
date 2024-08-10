import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub, FaBlog } from "react-icons/fa"; // Importando ícones

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className="flex items-start justify-start gap-2  mx-auto flex-col w-full h-full text-left"
    >
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        src="/assets/avatar-pdr.png"
        className="w-40 h-40 rounded-full bg-accent overflow-hidden shadow-lg"
      />
      <h2 className="text-3xl font-bold  mt-4">Pedro Felippe</h2>
      <p className="text-lg text-gray-600">
        Full Stack Developer from Brazil.
      </p>{" "}
      <div className="flex gap-6 mt-2">
        <a
          href="https://www.linkedin.com/in/pedro-felippe/"
          className="flex items-center text-gray-800 hover:text-blue-600 transition-colors"
        >
          <FaLinkedin className="text-2xl" />
        </a>

        <a
          href="https://github.com/pefelippe"
          className="flex items-center text-gray-800 hover:text-black transition-colors"
        >
          <FaGithub className="text-2xl" />
        </a>
        {/* <a
          href="#"
          className="flex items-center text-gray-800 hover:text-green-600 transition-colors"
        >
          <FaBlog className="text-2xl" />
        </a> */}
      </div>
      <motion.span className="mt-auto text-gray-500">
        ©2024 Pedro Felippe
      </motion.span>
    </motion.div>
  );
}

export default AboutSection;
