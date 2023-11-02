import { motion } from "framer-motion";

import BlogPosts from "../src/components/BlogPosts";
import { posts } from "../src/constants/posts";

export const HighlightedPost = () => {
  const postInfo = posts[0];

  if (!postInfo) return <></>;

  return (
    <a
      href={postInfo.href}
      className="flex w-full gap-10 items-center bg-[#1d1b22] rounded-3xl overflow-hidden 
       border-2 hover:border-gray-300 max-md:hidden"
    >
      <motion.img
        src={postInfo?.author?.imageUrl}
        alt="HighlightedPost"
        className="max-h-[350px]  object-contain w-fit "
      />

      <div className="flex flex-col items-start justify-start   ">
        <div className="text-gray-300 text-sm">{postInfo.datetime}</div>

        <h1 className="text-4xl font-semibold leading-6 text-white text-left py-4">
          {postInfo.title}
        </h1>
        <h3 className="my-3 text-xxl font-normal leading-6 text-gray-100 text-left">
          {postInfo.description}
        </h3>
      </div>
    </a>
  );
};

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col min-h-fit mx-auto max-w-5xl  gap-8  py-32 max-xl:px-6 items-start "
    >
      <HighlightedPost />
      <h3 className="text-3xl font-thin py-4 text-gray-300">Lastests Posts</h3>

      <BlogPosts />
    </motion.main>
  );
}
