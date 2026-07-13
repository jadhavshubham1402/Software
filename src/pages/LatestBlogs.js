import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "/images/blogs/blog1.jpg",
    category: "Artificial Intelligence",
    date: "10 July 2026",
    title: "How AI is Transforming Modern Businesses",
    description:
      "Discover how artificial intelligence is helping companies automate processes, improve customer experiences, and drive innovation.",
  },
  {
    id: 2,
    image: "/images/blogs/blog2.jpg",
    category: "Web Development",
    date: "05 July 2026",
    title: "Top Web Development Trends in 2026",
    description:
      "Explore the latest technologies, frameworks, and best practices shaping the future of web development.",
  },
  {
    id: 3,
    image: "/images/blogs/blog3.jpg",
    category: "Cloud Computing",
    date: "28 June 2026",
    title: "Why Businesses Are Moving to the Cloud",
    description:
      "Learn how cloud infrastructure improves scalability, security, performance, and operational efficiency.",
  },
];

const LatestBlogs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
          <div>
            <span className="uppercase tracking-widest text-blue-600 font-semibold">
              Latest Insights
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Latest Articles & Blogs
            </h2>
          </div>

          <Link
            to="/blogs"
            className="mt-6 lg:mt-0 border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            View All Blogs
          </Link>
        </div>

        {/* Blog Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>

                  <span className="flex items-center gap-2 text-gray-500">
                    <FaCalendarAlt />

                    {blog.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-8">
                  {blog.description}
                </p>

                <Link
                  to={`/blogs/${blog.id}`}
                  className="flex items-center gap-3 text-blue-600 font-semibold hover:gap-5 transition-all"
                >
                  Read More
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
