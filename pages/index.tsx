import BlogPosts from "../src/content/BlogPosts";
import CallToContact from "../src/content/CallToContact";
import Hero from "../src/content/Hero";
import RecentProjects from "../src/content/RecentProjects";

export default function Home() {
  return (
    <div className="w-full max-w-7xl text-[#2d2e32] space-y-32 py-40 mx-auto max-lg:px-8 ">
      <Hero />
      <RecentProjects />
      <BlogPosts />
      <CallToContact />
    </div>
  );
}
