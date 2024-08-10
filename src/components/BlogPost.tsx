// components/BlogPost.tsx
import Link from "next/link";

interface BlogPostProps {
  post: any;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="flex mb-6 border-b pb-4">
      <img
        src={post.image}
        alt={post.title}
        className="w-24 h-24 object-cover rounded-lg shadow-lg mr-4"
      />
      <div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600">{post.excerpt}</p>
      </div>
    </div>
  );
}
