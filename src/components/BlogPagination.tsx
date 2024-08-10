interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void; // Função para mudar a página
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  return (
    <div className="flex justify-center my-8">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)} // Chame a função com o número da página
          className={`px-4 py-2 mx-1 rounded-md ${
            currentPage === i + 1
              ? "bg-gray-700 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-500 hover:text-white transition-colors duration-200`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
