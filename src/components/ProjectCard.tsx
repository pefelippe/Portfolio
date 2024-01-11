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

  const initialX = isEvenId ? 50 : -50;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full flex  max-xl:flex-col  items-center text-start  overflow-hidden justify-start  gap-2 xl:gap-12 ${
        isEvenId ? "xl:flex-row-reverse" : ""
      }`}
    >
      <Link
        href={link}
        target="_blank"
        className="rounded overflow-hidden w-full max-w-3xl
         transition-all  border-4 hover:border-blue"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover flex-shrink-1 transition-all w-full h-full  min-h-[300px] xl:h-[450px] "
        />
      </Link>

      <div className="flex flex-col gap-2 h-full justify-start  text-md mx-auto w-full xl:max-w-lg ">
        <p className="text-4xl font-bold  ">{title}</p>
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
        <p className="text-md font-normal">{description}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
