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
      <div className="min-h-fit w-full  overflow-hidden border-2  hover:border-blue rounded-3xl transition-all">
        <Link href={link} target="_blank">
          <motion.img
            src={imgUrl}
            alt="card image"
            className="object-cover flex-shrink-1 transition-all flex w-full max-h-[350px] md:max-h-[600px] shadow-2xl h-screen"
          />
        </Link>
      </div>

      {/* <div className="flex flex-col  gap-4  rounded-sm max-w-3xl w-full items-start text-start justify-start">
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
      </div> */}
    </div>
  );
}

export default ProjectCard;
