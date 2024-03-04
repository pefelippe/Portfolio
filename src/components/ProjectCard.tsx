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
      transition={{ duration: 0.5, delay: id == 1 || id == 2 ? 1 : 0 }}
      className="relative flex min-h-fit h-full items-start text-start  hover:opacity-80
       justify-center flex-col w-full "
    >
      <Link
        href={`projects/${id}`}
        className="relative shadow  overflow-hidden w-full h-full min-h-[280px] lg:min-h-[400px] xl:min-h-[450px] "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full h-full min-h-[280px] lg:min-h-[400px] xl:min-h-[550px] "
        />

        <div
          className="absolute inset-0 flex flex-col gap-3 justify-center items-center text-center w-full text-md p-6 py-3
         bg-black bg-opacity-85 opacity-0 hover:opacity-90 transition-opacity"
        >
          <p className="text-xl md:text-5xl font-extralight tracking-tight text-white">
            {title}
          </p>
          <p className="text-sm md:text-xl  text-white max-w-md font-normal">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
