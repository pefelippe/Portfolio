import React from "react";

import AboutMe from "../src/content/AboutMe";
import Experience from "../src/content/Experience";
import Skills from "../src/content/Skills";

type Props = {};

function About({}: Props) {
  return (
    <div className="relative mx-auto  justify-center items-center h-fit pt-20 space-y-16 pb-40">
      <AboutMe />
      <Skills />
      <Experience />
    </div>
  );
}

export default About;
