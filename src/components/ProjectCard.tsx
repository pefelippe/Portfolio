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
    <div className="w-full  mx-auto ">
      <motion.div
        className="flex flex-col mx-auto w-full  justify-start  
        min-h-fit items-center text-start border rounded-md overflow-hidden"
      >
        <Link href={link} target="_blank">
          <motion.img
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            src={imgUrl}
            alt="card image"
            className="flex-shrink-1 object-fit transition-all flex h-full w-full max-h-[400px]  "
            />
          </Link>
      </motion.div>

      <div className="flex flex-col  text-start p-4 gap-2 px-0 rounded-sm ">
        <p className="text-3xl">{title}</p>
        

        <div className="flex gap-2 flex-wrap">
          {stack.map(tool => {
            return <div key={tool} className="bg-black w-fit text-white px-2">{tool}</div>
          })}
        </div>

        <h3 className="max-w-xl text-lg pb-2">{description}</h3>

        <Link
          href={link}
          target="_blank"
          className="text-xl text-gray-700 font-medium flex gap-2 items-center underline hover:text-gray-300 transition-all "
        >
          Visit the site <FaLink/>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
