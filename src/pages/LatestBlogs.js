import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "/images/blog1.jpg",
    category: "Artificial Intelligence",
    date: "10 July 2026",
    title: "How AI is Transforming Modern Businesses",
    description:
      "Discover how artificial intelligence is helping companies automate processes, improve customer experiences, and drive innovation.",
    slug: "how-ai-is-transforming-modern-businesses",
  },
  {
    id: 2,
    image: "/images/blog2.jpg",
    category: "Web Development",
    date: "05 July 2026",
    title: "Top Web Development Trends in 2026",
    description:
      "Explore the latest technologies, frameworks, and best practices shaping the future of web development.",
    slug: "top-web-development-trends-2026",
  },
  {
    id: 3,
    image: "/images/blog3.jpg",
    category: "Cloud Computing",
    date: "28 June 2026",
    title: "Why Businesses Are Moving to the Cloud",
    description:
      "Learn how cloud infrastructure improves scalability, security, performance, and operational efficiency.",
    slug: "why-businesses-are-moving-to-the-cloud",
  },
];

const LatestBlogs = () => {
  const navigate = useNavigate();

  const handleReadMore = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  const handleViewAll = () => {
    navigate("/blogs");
  };

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div>
            <span className="uppercase tracking-widest text-blue-600 font-semibold text-sm">
              FROM OUR BLOG
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4">
              Latest Insights
            </h2>
          </div>

          <button
            onClick={handleViewAll}
            className="mt-6 lg:mt-0 flex items-center gap-3 text-blue-600 font-medium hover:gap-4 transition-all group"
          >
            View All Articles
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              onClick={() => handleReadMore(blog.slug)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-5">
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaCalendarAlt />
                    {blog.date}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold leading-tight text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {blog.description}
                </p>

                {/* Read More */}
                <div className="mt-8 flex items-center gap-3 text-blue-600 font-medium group-hover:gap-4 transition-all">
                  Read Full Article
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;