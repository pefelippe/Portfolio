import { motion } from "framer-motion";

import BlogPosts from "../components/BlogPosts";

function PostsContent() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col min-h-fit mx-auto max-w-5xl gap-6 lg:gap-10 max-xl:px-6 items-start "
    >
      <h1 className="text-3xl lg:text-4xl font-normal   text-white ">
        My posts
      </h1>
      <BlogPosts />
    </motion.main>
  );
}

export default PostsContent;
