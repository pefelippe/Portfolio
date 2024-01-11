import Image from "next/image";
import { useState } from "react";
import { technologies } from "../constants";
import AnimatedBtn from "./animated/AnimatedBtn";

function Skills() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="w-full overflow-hidden">
      <ul className="grid grid-cols-4 lg:grid-cols-8 items-start gap-8 lg:gap-3 justify-start">
        {technologies.map((tech) => {
          return (
            <AnimatedBtn
              key={tech.name}
              className="flex flex-col items-start w-fit relative transition-transform transform hover:scale-110"
            >
              <Image width={50} height={50} src={tech.imgUrl} alt={tech.name} />
            </AnimatedBtn>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
