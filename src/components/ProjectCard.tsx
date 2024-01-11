import { motion } from "framer-motion";
import Link from "next/link";

type IProjectCard = {
  description: string;
  imgUrl: string;
  link: string;
  repo: string;
  title: string;
  stack: string[];
  id: number;
};

function ProjectCard({
  description,
  link,
  imgUrl,
  repo,
  title,
  stack,
  id,
}: IProjectCard) {
  const isEvenId = id % 2 === 0;

  return (
    <div
      className={`w-full flex flex-col gap-3 items-start text-center h-full overflow-hidden justify-start ${
        isEvenId ? "" : ""
      }`}
    >
      <div className="relative border-2 overflow-hidden transition-all group rounded-sm w-full h-[300px]  ">
        <Link href={link} target="_blank">
          <motion.img
            src={imgUrl}
            alt="card image"
            className="object-cover flex-shrink-0 transition-all w-full h-full flex shadow-2xl overflow-hidden"
          />
          <div className="flex flex-col absolute inset-0 bg-stone-900 opacity-0 transition-opacity group-hover:opacity-95  px-8">
            <div className="flex flex-col gap-4 h-full items-start text-start justify-center text-white text-sm">
              <p className="text-lg font-semibold  ">{title}</p>
              <div className="flex gap-2 flex-wrap ">
                {stack.map((tool) => {
                  return (
                    <div
                      key={tool}
                      className="bg-black w-fit text-white px-2 border border-white rounded"
                    >
                      {tool}
                    </div>
                  );
                })}
              </div>
              <h3 className="max-w-3xl text-sm font-thin  ">{description}</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
