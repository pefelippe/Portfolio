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
    <motion.div transition={{ duration: 1 }}>
      <Link
        className="flex flex-col mx-auto  w-full  justify-start  min-h-fit h-full 
       items-center text-start rounded-3xl   overflow-hidden"
        href={link}
      >
        <motion.img
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          src={imgUrl}
          alt="card image"
          className="flex-shrink-0 object-cover transition-all flex h-full w-full rounded-3xl  "
        />
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
