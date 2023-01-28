import React from "react";

import AboutMe from "../src/content/AboutMe";
import Experience from "../src/content/Experience";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col mx-auto  justify-center items-center pt-32 space-y-20">
      <AboutMe />
      <Experience />
    </div>
  );
}

export default About;
