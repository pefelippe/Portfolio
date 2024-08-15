// pages/blog/index.tsx
import { useState } from "react";
import posts from "../../src/data/posts";
import FeaturedPost from "../../src/components/FeaturedPost";
import BlogPost from "../../src/components/BlogPost";
import BlogPagination from "../../src/components/BlogPagination";
import { motion } from "framer-motion";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState<number>(1); // Estado para a página atual
  const postsPerPage: number = 5;

  // Atualizando a página atual
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const featuredPost = posts[0];
  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex w-full mt-20 min-h-screen flex-col max-w-3xl mx-auto"
    >
      <FeaturedPost post={featuredPost} />
      <div className="grid mt-8">
        {paginatedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Animação em cascata
          >
            <BlogPost post={post} />
          </motion.div>
        ))}
      </div>
      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange} // Passa a função para mudar a página
      />
    </motion.div>
  );
}
