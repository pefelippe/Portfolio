// pages/blog/[slug].tsx
import { useRouter } from "next/router";
import posts from "../../src/data/posts"; // Suponha que os posts estejam armazenados em um arquivo JSON
import { Post } from "../../src/components/FeaturedPost";

export default function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post: Post | undefined = posts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="blog-post-page">
      <h1 className="text-4xl">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover mt-4"
      />
      <p className="mt-6">{post.content}</p>
    </div>
  );
}
