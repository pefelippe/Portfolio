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
      className={`w-full flex max-xl:flex-col gap-4 md:gap-12  items-start text-center h-full overflow-hidden justify-start ${
        isEvenId ? "" : ""
      }`}
    >
      <div className="relative border-2 overflow-hidden transition-all group rounded-3xl h-[300px] md:h-[400px] max-xl:w-full ">
        <Link href={link} target="_blank">
          <motion.img
            src={imgUrl}
            alt="card image"
            className="object-cover flex-shrink-0 transition-all w-full h-full flex shadow-2xl overflow-hidden"
          />
          <div className="flex flex-col absolute inset-0 bg-stone-900 opacity-0 transition-opacity group-hover:opacity-90">
            <div className="flex flex-col gap-4 h-full items-center  justify-center text-white text-3xl">
              <p className="text-3xl tracking-widest ">{title}</p>
              <p className="text-xl underline"> Check to check live demo</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col xl:h-full   gap-4  rounded-sm max-w-xl  items-start text-start justify-center">
        <Link
          href={link}
          target="_blank"
          className="text-2xl text-gray-700 font-semibold flex gap-2 w-fit
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
