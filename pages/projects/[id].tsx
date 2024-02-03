import Image from "next/image";
import { projects } from "../../src/constants";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Button } from "../../src/components/ui/button";
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className="min-h-screen flex flex-col  justify-start gap-4 max-w-5xl mx-auto items-start mt-20 pt-10 "
    >
      <Image
        src={projectInfo.imgUrl}
        alt={projectInfo.title}
        width={2000}
        className="border-2 rounded-xl"
        height={400}
      />
      <div className="w-full justify-between flex">
        <div className="flex gap-12 font-medium text-xl items-center justify-between w-full">
          <p className="text-4xl font-bold ">{projectInfo.title}</p>
        </div>
      </div>
      <p className="text-xl font-normal ">{projectInfo.description}</p>
      <div className="flex gap-4 font-medium text-xl">
        <Link href={projectInfo.repo} target="_blank">
          <Button className="text-lg py-6 px-10 rounded">Github</Button>
        </Link>
        <Link href={projectInfo.link} target="_blank">
          <Button variant={"secondary"} className="text-lg py-6 px-10 rounded">
            Deploy
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
