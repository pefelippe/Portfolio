import Image from "next/image";
import { projects } from "../../src/constants";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Button } from "../../src/components/ui/button";
import Link from "next/link";
import { GithubIcon, Rocket } from "lucide-react";

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
    <motion.div className="min-h-[60vh] flex flex-col  justify-center text-center  max-w-6xl mx-auto items-center mt-20 pt-10 gap-6">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="firstTitle "
      >
        {projectInfo.title}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="firstDesc"
      >
        {projectInfo.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.75 }}
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
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        src={projectInfo.imgUrl}
        alt={projectInfo.title}
        width={2000}
        className="border-2 rounded-xl h-[65vh] object-cover"
      />
    </motion.div>
  );
}

export default ProjectDetails;
