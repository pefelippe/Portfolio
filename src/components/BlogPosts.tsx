import { motion } from "framer-motion";

import { posts } from "./../constants/posts";

type PostInfo = {
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
};

const Post = ({ postInfo }: { postInfo: PostInfo }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" w-full overflow-hidden  border-2
       hover:border-gray-100 rounded-3xl shadow bg-[#1d1b22] max-lg:max-w-xl max-lg:mx-auto max-lg:flex-col"
      key={postInfo.id}
    >
      <div
        className="flex max-lg:flex-col items-start transition-all w-full
       overflow-hidden hover:shadow-xl  hover:bg-opacity-95
        hover:text-white hover:border-transparent cursor-pointer"
      >
        <motion.img
          src="/assets/avatar-pdr.png"
          alt={postInfo.title}
          className="max-h-[280px] object-cover w-full lg:max-w-sm"
        />
        <div className="flex-col items-center gap-y-3 h-fit p-6 justify-between my-auto w-full">
          <div className="text-gray-300 text-md">{postInfo.datetime}</div>

          <h1 className="text-xl font-semibold leading-6 text-white text-left line-clamp-2 my-3 lg:text-3xl">
            {postInfo.title}
          </h1>
          <h3 className=" text-xl font-normal leading-6 text-gray-100 text-left line-clamp-3">
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
    <div className="grid grid-cols-1 w-full gap-8 lg:gap-12">
      {postsToShow.map((postInfo) => {
        return <Post key={postInfo.id} postInfo={postInfo} />;
      })}
    </div>
  );
}
