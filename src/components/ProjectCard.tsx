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
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow  ">
      <Link
        className="flex flex-col mx-auto  w-full  justify-start  min-h-fit h-[350px] items-center text-start "
        href={link}
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="flex-shrink-0 object-cover transition-all flex h-full w-full   "
        />
      </Link>
      <div className="flex flex-col  text-start p-5 rounded-sm">
        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-whit">
          {title}
        </h5>
        <p className="mb-2 font-normal text-xl text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <Link
          href={link}
          className="inline-flex items-center px-6 bg-blue hover:bg-blue/90 transition-all  gap-2 py-2 text-lg w-fit
          font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 
          dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
