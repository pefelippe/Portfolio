import React from "react";

import AboutMe from "../src/content/AboutMe";
import Experience from "../src/content/Experience";

type Props = {};

function About({}: Props) {
  return (
    <div className="relative mx-auto  justify-center items-center h-fit space-y-20 ">
      <AboutMe />
      <Experience />
    </div>
  );
}

export default About;
