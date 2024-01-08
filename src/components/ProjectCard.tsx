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
  const isEvenId = id % 2 === 0; // Verifica se o ID é par

  return (
    <div
      className={`w-full flex flex-col gap-4  items-start text-center h-full overflow-hidden 
    justify-start ${isEvenId ? "" : ""}`}
    >
      <div className="relative overflow-hidden border-2 rounded-3xl transition-all group">
        <Link href={link} target="_blank">
          <motion.img
            src={imgUrl}
            alt="card image"
            className="object-cover flex-shrink-1 transition-all flex w-full max-h-[250px] md:max-h-[350px] shadow-2xl h-screen"
          />
          <div className="absolute h-full w-full inset-0 bg-stone-900 opacity-0 transition-opacity group-hover:opacity-90">
            <div className="flex h-full w-full items-center justify-center text-white text-3xl">
              Check live demo
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col  px-4 gap-4  rounded-sm max-w-3xl w-full items-start text-start justify-start">
        <Link
          href={link}
          target="_blank"
          className="text-xl text-gray-700 font-semibold flex gap-2 w-fit
           items-start underline hover:text-gray-300 transition-all "
        >
          <p className="text-3xl tracking-tighter underline">{title}</p>
        </Link>

        <div className="flex gap-2 flex-wrap ">
          {stack.map((tool) => {
            return (
              <div key={tool} className="bg-black w-fit text-white px-2">
                {tool}
              </div>
            );
          })}
        </div>
        <h3 className="max-w-3xl text-xl  ">{description}</h3>
      </div>
    </div>
  );
}

export default ProjectCard;
