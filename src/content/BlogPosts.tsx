import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "How AI is revolutionizing the healthcare industry",
    href: "#",
    description:
      "From predictive analytics to personalized medicine, AI is transforming the healthcare industry. In this article, we explore some of the latest applications of AI in healthcare and the potential impact they could have on patient outcomes.",
    date: "Apr 12, 2022",
    datetime: "2022-04-12",
    category: { title: "Technology", href: "#" },
    author: {
      name: "Pedro Felippe",
      role: "Senior AI Engineer",
      href: "#",
      imageUrl: "/assets/avatar-pdr.png",
    },
  },
  {
    id: 2,
    title: "The future of work: How automation is changing the job market",
    href: "#",
    description:
      "Automation is transforming the job market, but what does that mean for workers? In this article, we explore the potential impact of automation on employment, and what companies and policymakers can do to mitigate the risks.",
    date: "Mar 28, 2023",
    datetime: "2023-03-28",
    category: { title: "Technology", href: "#" },
    author: {
      name: "Pedro Felippe",
      role: "Senior AI Engineer",
      href: "#",
      imageUrl: "/assets/avatar-pdr.png",
    },
  },
  {
    id: 3,
    title: "The future of work: How automation is changing the job market",
    href: "#",
    description:
      "Automation is transforming the job market, but what does that mean for workers? In this article, we explore the potential impact of automation on employment, and what companies and policymakers can do to mitigate the risks.",
    date: "Mar 28, 2023",
    datetime: "2023-03-28",
    category: { title: "Technology", href: "#" },
    author: {
      name: "Pedro Felippe",
      role: "Senior AI Engineer",
      href: "#",
      imageUrl: "/assets/avatar-pdr.png",
    },
  },
];

export default function BlogPosts({ qnt = 0 }) {
  const postsToShow = qnt > 0 ? posts.slice(0, qnt) : posts;
  return (
    <div className=" ">
      <div className=" lg:mx-0 text-center w-full  ">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Latest Posts
        </h2>
      </div>
      <div
        className="mx-auto grid grid-cols-1  w-full py-10
        gap-5 border-gray-200  lg:mx-0 
        lg:max-w-none lg:grid-cols-2"
      >
        {postsToShow.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between transition-all px-8 py-10 mx-auto
               rounded-md h-full hover:shadow-xl bg-[#fafafa]
              hover:bg-opacity-90 hover:text-white hover:border-transparent cursor-pointer"
          >
            <div className="flex items-center gap-x-2 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-800">
                <a href={post.href}>
                  <span className="absolute inset-0  " />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">
                {post.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/about"
        className="w-fit text-xl font-medium flex items-center justify-center gap-2 
          underline transition-all drop-shadow-md hover:text-gray-300 hover:text-blue"
      >
        See posts
        <FaArrowRight />
      </Link>
    </div>
  );
}
