import React from "react";

import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import AnimatedBtn from "./../src/components/motion/AnimatedBtn";

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

  return (
    <div className=" relative w-screen min-h-screen h-fit flex flex-col justify-evenly items-center">
      <div className="snap-center">
        <Hero />
      </div>

      <div className="snap-start max-md:snap-start  ">
        <Projects projects={projects} />
      </div>
    </div>
  );
}
