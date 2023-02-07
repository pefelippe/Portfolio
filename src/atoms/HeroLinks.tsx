import React from "react";
import AnimatedBtn from "../components/motion/AnimatedBtn";

function HeroLinks() {
  return (
    <div className="w-7xl flex gap-4 items-center justify-center">
      <AnimatedBtn
        className="w-fit text-xl font-semibold  border-4 px-6 p-3 rounded-xl hover:bg-[#3b47ca] border-[#3b47ca] "
        target=""
        href="/contact"
      >
        <p>Sobre</p>
      </AnimatedBtn>
      <AnimatedBtn
        className="w-fit text-xl font-semibold  border-4 px-6 p-3 rounded-xl hover:bg-[#3b47ca] border-[#3b47ca] "
        target=""
        href="/contact"
      >
        <p>Skills</p>
      </AnimatedBtn>
      <AnimatedBtn
        className="w-fit text-xl font-semibold  border-4 px-6 p-3 rounded-xl hover:bg-[#3b47ca] border-[#3b47ca] "
        target=""
        href="/contact"
      >
        <p>Projetos</p>
      </AnimatedBtn>
      <AnimatedBtn
        className="w-fit text-xl font-semibold  border-4 px-6 p-3 rounded-xl hover:bg-[#3b47ca] border-[#3b47ca] "
        target=""
        href="/contact"
      >
        <p>Contato</p>
      </AnimatedBtn>
    </div>
  );
}

export default HeroLinks;
