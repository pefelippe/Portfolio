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
      className="md:max-w-[400px] w-full overflow-hidden  border-2
       hover:border-gray-100 rounded-3xl shadow bg-[#1d1b22]"
      key={postInfo.id}
    >
      <div
        className="flex flex-col items-start transition-all
       overflow-hidden hover:shadow-xl max-md:flex-col hover:bg-opacity-95
        hover:text-white hover:border-transparent cursor-pointer"
      >
        <motion.img
          src="/assets/avatar-pdr.png"
          alt={postInfo.title}
          className="w-full max-h-[224px] object-cover"
        />
        <div className="flex-col items-center gap-y-3 h-fit p-6 justify-between my-auto max-w-xl">
          <div className="text-gray-300 text-sm">{postInfo.datetime}</div>

          <h1 className="text-xl font-semibold leading-6 text-white text-left line-clamp-2 my-3">
            {postInfo.title}
          </h1>
          <h3 className=" text-lg font-normal leading-6 text-gray-100 text-left line-clamp-3">
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {postsToShow.map((postInfo) => {
        if (postInfo.id === 1) return null;
        return <Post key={postInfo.id} postInfo={postInfo} />;
      })}
    </div>
  );
}
