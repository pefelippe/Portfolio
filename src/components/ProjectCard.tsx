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
    <motion.div className="w-full h-full" transition={{ duration: 1 }}>
      <Link
        className="flex flex-col mx-auto  w-full  justify-start  min-h-fit h-[300px]
       items-center text-start "
        href={link}
      >
        <motion.img
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.1 },
          }}
          src={imgUrl}
          alt="card image"
          className="flex-shrink-0 object-cover transition-all flex h-full w-full rounded-md  "
        />
      </Link>
      <div className="flex flex-col pt-3  text-[#222]">
        <p className="text-[22px] font-semibold">{title}</p>
        <p className="font-regular text-[16px] md:text-[18px] mb-[13px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
