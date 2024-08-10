// components/FeaturedPost.tsx
import Link from "next/link";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
}

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg">
      <Link href={`/blog/${post.slug}`}>
        <div className="cursor-pointer">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <h2 className="text-4xl text-white font-bold">{post.title}</h2>
            <p className="text-lg text-white mt-2">{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
