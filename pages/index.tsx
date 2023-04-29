import CallToContact from "../src/content/CallToContact";
import Hero from "../src/content/Hero";
import BlogPosts from "../src/content/BlogPosts";
import RecentProjects from "../src/content/RecentProjects";

export default function Home() {
  return (
    <div className="w-screen max-w-5xl mx-auto text-[#2d2e32] space-y-20 md:space-y-32 py-20 md:py-32 max-xl:px-8 ">
      <Hero />
      <RecentProjects />
      <BlogPosts />
      <CallToContact />
    </div>
  );
}
