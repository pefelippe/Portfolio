import Image from "next/image";

import { technologies } from "../constants";
import AnimatedBtn from "./animated/AnimatedBtn";

function Skills() {
  return (
    <div className="w-full overflow-hidden ">
      <ul className="flex items-start gap-4 justify-start ">
        {technologies.map((tech) => {
          return (
            <AnimatedBtn
              key={tech.name}
              className="flex flex-col items-start w-fit "
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
