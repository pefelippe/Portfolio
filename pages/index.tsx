import React from "react";

import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";

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
    <div className=" relative flex flex-col mx-auto justify-center items-center   max-lg:px-8 max-w-screen-2xl w-screen">
      <div className="x ">
        <Hero />
      </div>

      <div className=" max-md:snap-start bg-[#fff]/95 text-[#000]  py-10 ">
        <Projects projects={projects} title={title} />
      </div>
    </div>
  );
}
