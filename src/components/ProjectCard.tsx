import { motion } from "framer-motion";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

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
  // const isEvenId = id % 2 === 0; // Verifica se o ID é par

  //  ${isEvenId ? "md:flex-row-reverse" : ""}`}
  return (
    <div className="w-full flex flex-col gap-6 items-center text-center justify-center">
      <div className="min-h-fit w-full border-2 rounded-lg overflow-hidden ">
        <Link href={link} target="_blank">
          <motion.img
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            src={imgUrl}
            alt="card image"
            className=" transition-all flex w-full h-[350px] md:h-[600px] "
          />
        </Link>
      </div>

      <div className="flex flex-col   gap-6 px-0 rounded-sm max-w-lg w-full items-center text-center justify-center">
        <Link
          href={link}
          target="_blank"
          className="text-xl text-gray-700 font-semibold flex gap-2 w-fit
           items-center underline hover:text-gray-300 transition-all "
        >
          <FaLink />
          <p className="text-4xl tracking-tighter underline">{title}</p>
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
        <h3 className="max-w-xl text-2xl  ">{description}</h3>
      </div>
    </div>
  );
}

export default ProjectCard;
