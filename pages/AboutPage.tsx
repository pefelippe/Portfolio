import React from "react";

import About from "./../src/content/About";
import Skills from "./../src/content/Skills";

export default function Home() {
  return (
    <div className=" min-h-[85vh] relative flex flex-col mx-auto justify-center items-center space-y-32  pb-20 xl:pb-40 max-lg:px-8 max-w-screen-2xl w-screen">
      <div className="snap-start">
        <About />
        {/* <Skills /> */}
      </div>
    </div>
  );
}
