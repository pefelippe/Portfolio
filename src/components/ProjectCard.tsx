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
  const isEvenId = id % 2 === 0; // Verifica se o ID é par

  return (
    <div className={`w-full flex max-md:flex-col md:gap-12 items-center justify-start ${isEvenId ? 'md:flex-row-reverse' : ''}`}>
      <div
        className="min-h-fit w-full  border-2 rounded-lg overflow-hidden max-w-2xl">
        <Link href={link} target="_blank">
          <motion.img
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            src={imgUrl}
            alt="card image"
            className=" object-cover  transition-all flex w-full h-[350px] md:h-[400px] "
            />
          </Link>
      </div>

      <div className="flex flex-col  text-start p-6 gap-3 px-0 rounded-sm max-w-xl w-full">
        <p className="text-3xl tracking-tighter underline">{title}</p>
        <h3 className="max-w-xl text-xl  ">{description}</h3>
        <div className="flex gap-2 flex-wrap pb-8">
          {stack.map(tool => {
            return <div key={tool} className="bg-black w-fit text-white px-2">{tool}</div>
          })}
        </div>
        <Link
          href={link}
          target="_blank"
          className="text-xl text-gray-700 font-semibold flex gap-2 
           items-start underline hover:text-gray-300 transition-all "
        >
          Visit the site <FaLink/>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
