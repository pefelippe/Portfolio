import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { GithubIcon, LinkIcon, MoveRight, Rocket } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";

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
    <div
      className="relative flex  h-full items-center text-start  gap-8 xl:gap-16
       justify-center max-xl:flex-col-reverse w-full text-[#fff] transition-all"
    >
      <div className="xl:max-w-sm flex flex-col gap-4 justify-start items-start text-start w-full text-md tracking-tighter text-[#212531">
        <p className="text-2xl xl:text-4xl  font-semibold">{title}</p>
        <p className="secondTitle text-[#bcb7c8] text-xl">{description}</p>
        {/* <Link
          href={"/projects/" + id}
          className="pt-1 text-base xl:text-2xl font-semibold flex items-center gap-2 hover:text-[#fff]/70"
        >
          <MoveRight /> Check details
        </Link> */}

        <motion.div className="flex flex-col gap-4 font-medium text-2xl w-full">
          <Link href={repo} target="_blank">
            <Button
              variant={"outline"}
              className="text-lg py-6 px-10 rounded flex items-center gap-1 w-full"
            >
              <GithubIcon /> Github
            </Button>
          </Link>
          <Link href={link} target="_blank">
            <Button className="text-lg py-6 px-10 rounded items-center gap-1 flex text-white w-full">
              <Rocket /> Deploy
            </Button>
          </Link>
        </motion.div>
      </div>
      <Link
        href={"/projects/" + id}
        className="relative shadow  overflow-hidden w-full h-full  "
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full h-[280px] md:h-[500px] xl:min-h-[75vh]  "
        />
      </Link>
    </div>
  );
}

export default ProjectCard;
