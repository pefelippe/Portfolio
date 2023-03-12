import React from "react";

import CallToContact from "../src/components/CallToContact";
import Hero from "../src/content/Hero";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className="w-screen space-y-20 pt-20 md:pt-32 px-10">
      <Hero />
      <Projects />
      <CallToContact />
    </div>
  );
}
