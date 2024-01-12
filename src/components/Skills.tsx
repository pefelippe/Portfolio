import Image from "next/image";

import { technologies } from "../constants";
import AnimatedBtn from "./animated/AnimatedBtn";

function Skills() {
  return (
    <div className="w-fit overflow-hidden flex ">
      <ul className="flex  flex-wrap  gap-2">
        {technologies.map((tech) => {
          return (
            <AnimatedBtn
              key={tech.name}
              className="flex items-start relative text-sm font-medium transition-transform transform hover:scale-110 p-1 px-3 bg-[#101010] text-white"
            >
              <p>{tech.name}</p>
            </AnimatedBtn>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
