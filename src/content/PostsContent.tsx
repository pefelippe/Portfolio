import { motion } from "framer-motion";
import { HighlightedPost } from "../../pages/blog";

function Projects() {
  return (
    <motion.div
      id="work"
      className="mx-auto flex flex-col  w-full items-center  justify-start max-xl:px-6 max-w-4xl  py-20"
    >
      <div className=" flex  w-full items-start  justify-start ">
        <div className="leading-1 gap-5 flex flex-col justify-between items-start   w-full text-white">
          <h1 className="text-[1.6rem] sm:text-3xl leading-tight font-bold   max-w-xl">
            Latest posts
          </h1>
          <h3 className="text-gray-300 mb-10  text-lg text-start max-w-md">
            Check out my blog for occasional notes and articles on things Ive
            learned, projects Ive been working on and thoughts on hot topics.
          </h3>
        </div>
      </div>

      <HighlightedPost />
    </motion.div>
  );
}

export default Projects;
