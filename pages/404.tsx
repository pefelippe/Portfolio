import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.div
      className="relative px-6 h-full mx-auto  w-full flex flex-col items-center 
  justify-center text-center shadow-md text-[#fff] gap-10"
    >
      <h1 className="text-7xl">Conteúdo não encontrado</h1>

      <h1 className="text-3xl">
        Peço desculpas. Mas não foi possível encontrar o caminho desejado.
      </h1>
      <button className="py-4 border-2 rounded-full px-8 text-3xl">
        <Link href="/">
        Voltar a home
        </Link>
      </button>
    </motion.div>
  );
}
