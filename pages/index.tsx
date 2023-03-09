import React from "react";

import Hero from "../src/content/Hero";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className="w-screen space-y-20 md:space-y-32  py-32 px-10">
      <Hero />
      <Projects />
    </div>
  );
}
