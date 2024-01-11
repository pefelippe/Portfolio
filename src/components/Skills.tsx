import Image from "next/image";
import { technologies } from "../constants";
import AnimatedBtn from "./animated/AnimatedBtn";

function Skills() {
  return (
    <div className="w-fit overflow-hidden flex items-start justify-start">
      <ul className="grid grid-cols-4 lg:grid-cols-8 w-fit gap-6 mx-auto items-start justify-start">
        {technologies.map((tech) => {
          return (
            <AnimatedBtn
              key={tech.name}
              className="flex items-start relative transition-transform transform hover:scale-125"
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
