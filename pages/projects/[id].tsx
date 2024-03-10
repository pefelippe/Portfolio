import { motion } from "framer-motion";
import { GithubIcon, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "../../src/components/ui/button";
import { projects } from "../../src/constants";

type IProjectCard = {
  description: string;
  imgUrl: string;
  link: string;
  repo: string;
  title: string;
  stack: string[];
  id: number;
};

function ProjectDetails() {
  const router = useRouter();

  const id = router.query.id;

  const projectInfo = projects.find(
    (proj: IProjectCard) => String(proj.id) === id,
  );

  if (!projectInfo) {
    return (
      <h1 className="min-h-screen flex flex-col items-center justify-center ">
        {" "}
        404
      </h1>
    );
  }
  return (
    <motion.div className="min-h-screen flex flex-col  justify-center text-center   mx-auto items-center mt-10 gap-6 max-w-4xl">
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        src={projectInfo.imgUrl}
        alt={projectInfo.title}
        width={2000}
        className="border-2 rounded-xl h-[50vh] object-cover"
      />
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        className="firstTitle pt-10 "
      >
        {projectInfo.title}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1.5 }}
        className="firstDesc"
      >
        {projectInfo.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 2 }}
        className="flex gap-4 font-medium text-2xl pb-10"
      >
        <Link href={projectInfo.repo} target="_blank">
          <Button
            variant={"outline"}
            className="text-lg py-6 px-10 rounded flex items-center gap-1"
          >
            <GithubIcon /> Github
          </Button>
        </Link>
        <Link href={projectInfo.link} target="_blank">
          <Button className="text-lg py-6 px-10 rounded items-center gap-1 flex text-white">
            <Rocket /> Deploy
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default ProjectDetails;
