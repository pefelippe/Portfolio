import Image from "next/image";

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
    id: 23,
    title: "How blockchain is transforming supply chain management",
    href: "#",
    description:
      "Blockchain technology has the potential to revolutionize supply chain management by increasing transparency, reducing costs, and improving security. In this article, we explore some of the latest developments in blockchain-based supply chain management and the potential benefits they offer.",
    date: "Feb 18, 2022",
    datetime: "2022-02-18",
    category: { title: "Technology", href: "#" },
    author: {
      name: "Pedro Felippe",
      role: "Senior Blockchain Engineer",
      href: "#",
      imageUrl: "/assets/avatar-pdr.png",
    },
  },
];

export default function Blog() {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto  lg:mx-0 text-center w-full justify-center ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Direto do blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Meus posts mais recentes.
          </p>
        </div>
        <div
          className="mx-auto grid max-w-2xl grid-cols-1 
        gap-x-4 gap-y-10 border-t border-gray-200 mt-8 pt-8 lg:mx-0 
        lg:max-w-none lg:grid-cols-3"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between transition-all p-5
               hover:bg-gray-300/80 rounded-md cursor-pointer"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  width={300}
                  height={300}
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
