import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      id="work"
      className="bg-[#1A1C1D]   mx-auto flex  w-full items-center  justify-start max-xl:px-6 min-h-[80vh]  "
    >
      <div className="mx-auto flex  w-full items-start  justify-start  max-w-7xl">
        <div className="leading-1 gap-5 flex flex-col justify-between items-start   w-full text-white">
          <h1 className="text-[1.6rem] sm:text-3xl leading-tight font-bold   max-w-xl">
            Latest posts
          </h1>
          <h3 className="text-gray-300 mb-10  text-lg max-w-sm text-start">
            Check out my blog for occasional notes and articles on things Ive
            learned, projects Ive been working on and thoughts on hot topics.
          </h3>
        </div>
      </div>

      {/* <div className="grid md:grid-cols-2 gap-10 justify-center ">
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
