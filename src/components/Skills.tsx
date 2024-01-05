import Image from "next/image";
import { technologies } from "../constants";


function Skills() {

  return (
    <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center gap-10 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {technologies.map((tech) => {
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center w-full "
              >
                <Image width={50} height={50} src={tech.imgUrl} alt={tech.name} />
              </div>
            );
          })}
      </ul>
    </div>
  )
}

export default Skills;
