import React from "react";

import AboutMe from "../src/content/AboutMe";
import Experience from "../src/content/Experience";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-fit pt-20 space-y-16 pb-40">
      <AboutMe />
      <Experience />
    </div>
  );
}

export default About;
