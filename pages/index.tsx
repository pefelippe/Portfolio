import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import About from "./../src/content/About";
import Skills from "./../src/content/Skills";
import Contact from "./../src/content/Contact";

export default function Home() {
  const projects = [
    {
      id: 1,
      link: "https://portfolio-pefelippe.vercel.app/",
      repo: "https://github.com/pefelippe/Portfolio",
      title: "Portfolio",
      imgUrl: "assets/portfolio.png",
      description: "Meu portfolio pessoal.",
    },

    {
      id: 2,
      link: "",
      repo: "https://github.com/pefelippe/PomodoroTunes",
      title: "Pomodoro Tunes",
      imgUrl: "assets/pomodorotunes.png",
      description: "A união de música calma e pomodoro.",
    },
  ];

  const title = "Conheça meus projetos";

  return (
    <div className=" relative flex flex-col mx-auto justify-center items-center space-y-20 md:space-y-32  max-lg:px-8 max-w-screen-2xl w-screen">
      <div className="snap-center">
        <Hero />
      </div>

      <div className="snap-start">
        <Projects projects={projects} title={title} />
      </div>
      {/* <div className="snap-start flex ">
        <About />
        <Skills />
      </div> */}
    </div>
  );
}
