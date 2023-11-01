import { motion } from "framer-motion";

import { posts } from "./../constants/posts";

const Post = (postInfo: {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: {
    title: string;
    href: string;
  };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
}) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="md:max-w-[400px] w-full rounded-3xl overflow-hidden border-2 hover:border-gray-100"
      key={postInfo.id}
    >
      <div
        className="flex flex-col items-start  transition-all   rounded-xl overflow-hidden 
        hover:shadow-xl bg-[#1d1b22] max-md:flex-col 
       hover:bg-opacity-95 hover:text-white hover:border-transparent cursor-pointer"
      >
        <motion.img
          src="/assets/avatar-pdr.png"
          alt="me"
          className="w-full max-h-[224px] object-cover"
        />
        <div className="flex-col items-center gap-x-2  h-fit p-6 justify-center my-auto max-w-xl">
          <h1 className="text-xl font-semibold leading-6 text-white text-left text-ellipsis overflow-hidden ">
            {postInfo.title}
          </h1>
          <h3 className="my-3 text-lg font-normal leading-6 text-gray-100 text-left text-ellipsis overflow-hidden ">
            {postInfo.description}
          </h3>
        </div>
      </div>
    </motion.a>
  );
};

export default function BlogPosts({ qnt = 0 }) {
  const postsToShow = qnt > 0 ? posts.slice(0, qnt) : posts;
  return (
    <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-8  ">
      {postsToShow.map((postInfo) => {
        return Post(postInfo);
      })}
    </div>
  );
}
