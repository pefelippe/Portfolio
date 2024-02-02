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
      className="w-full flex flex-col h-full items-start text-start justify-start gap-4 
     relative rounded-xl overflow-hidden border-2 hover:border-blue"
    >
      <Link
        href={`projects/${id}`}
        className=" overflow-hidden  border-[#101010] hover:border-blue  
        w-full  min-h-[350px]"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover  w-full h-full "
        />
      </Link>
      {/* 
      <div className="flex flex-col gap-2 justify-center items-center text-center  mx-auto text-md">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-md font-light ">{description}</p>
      </div> */}
    </motion.div>
  );
}

export default ProjectCard;
