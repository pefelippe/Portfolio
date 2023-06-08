import BlogPosts from "../src/content/BlogPosts";

import Hero from "../src/content/Hero";

export default function Home() {
  return (
    <div className="w-full max-w-screen-md mx-auto max-lg:px-8 py-32 space-y-32">
      <Hero />
      <BlogPosts qnt={2} />
    </div>
  );
}
