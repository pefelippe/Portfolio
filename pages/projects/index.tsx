import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="work"
      className=" min-h-screen mx-auto w-full  flex items-start justify-center  "
    >
      {/* <div className="   leading-1 gap-2 flex flex-col justify-center items-start  max-w-md w-full">
        <h1 className="text-7xl font-thin xs:text-4xl  leading-tight text-gray-100 ">
          Selected work
        </h1>
        <h3 className="text-[1.6rem] max-w-2xl text-[#BABABA] leading-tight">
          Explore the following projects to get a glimpse of my job experience.
        </h3>
      </div>
      <div className="grid h-full  gap-10 xl:gap-14 justify-center ">
        {projects?.map((proj) => {
          return (
            <ProjectCard
              key={proj.id}
              id={proj.id}
              description={proj.description}
              imgUrl={proj.imgUrl}
              link={proj.link}
              title={proj.title}
              repo={proj.repo}
              stack={proj.stack}
            />
          );
        })}
      </div> */}
    </motion.div>
  );
}

export default Projects;
