import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="work"
      className=" min-h-screen mx-auto w-full  flex items-start justify-center  "
    ></motion.div>
  );
}

export default Projects;
