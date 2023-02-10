import React from "react";

import Hero from "../src/content/Hero";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center max-w-7xl space-y-20 xl:space-y-40 py-20 md:py-40">
      <Hero />

      <Projects />
    </div>
  );
}
