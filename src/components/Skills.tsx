import React from "react";

import AnimatedBtn from "./animated/AnimatedBtn";

interface SkillsProps {
  technologies: string[];
}

export const Skills: React.FC<SkillsProps> = ({ technologies }) => {
  return (
    <div className="w-fit overflow-hidden flex ">
      <ul className="flex  flex-wrap  gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="flex uppercase tracking-wider items-start relative text-xs font-semibold rounded-sm
             p-1 px-3 bg-blue text-white"
          >
            <p>{tech}</p>
          </span>
        ))}
      </ul>
    </div>
  );
};
