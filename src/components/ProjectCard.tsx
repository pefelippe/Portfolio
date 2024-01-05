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
  return (
    <div className="w-full  mx-auto">
      <Link
        className="flex flex-col mx-auto  w-full  justify-start  min-h-fit items-center text-start border rounded-md "
        href={link}
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="flex-shrink-1 object-fit transition-all flex h-full w-full max-h-[600px]   "
        />
      </Link>
      
      <div className="flex flex-col  text-start p-6 gap-3 px-0 rounded-sm">
        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-whit">
          {title}
        </h5>
        <p className="mb-2 font-normal text-xl text-gray-700 dark:text-gray-400">
          {description}
        </p>


        <Link
          href={link}
          className="text-xl text-gray-700 font-medium flex gap-2 items-center underline hover:text-gray-500 transition-all"
        >
          Visit the site <FaLink/>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
