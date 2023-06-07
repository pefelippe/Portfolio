import BlogPosts from "../src/content/BlogPosts";
import About from "../src/content/Hero";

import Hero from "../src/content/Hero";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-full max-w-5xl text-[#2d2e32] space-y-28 py-40 mx-auto max-lg:px-8 ">
      <Hero />
      <BlogPosts />
    </div>
  );
}
