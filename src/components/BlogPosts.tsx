import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

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
      <div className="flex lg:mx-0 text-start w-full justify-between pb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Latest Posts
        </h2>

        <Link
          href="/blog"
          className="w-fit text-lg font-normal flex items-center justify-center  text-gray-300
           transition-all   hover:underline"
        >
          Read all posts
        </Link>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="freeMode "
      >
        {postsToShow.map((post) => {
          return (
            <SwiperSlide key={post.id}>
              <AnimatedBtn key={post.id}>
                <div
                  className="flex flex-col items-start justify-end transition-all p-5 py-10 min-h-[350px] mx-auto
              rounded-md h-full hover:shadow-xl bg-[#fafafa] 
              hover:bg-opacity-90 hover:text-white hover:border-transparent cursor-pointer"
                >
                  <div className="flex items-center gap-x-2 text-xs h-fit">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-800">
                    {post.title}
                  </h3>
                </div>
              </AnimatedBtn>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
