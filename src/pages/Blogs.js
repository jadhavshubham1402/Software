import { motion } from "framer-motion";
import { useState } from "react";
import { FaClock, FaTag, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const [subscribed, setSubscribed] = useState(false);

  const blogPosts = [
    {
      id: 1,
      slug: "how-ai-is-transforming-modern-businesses",
      title: "How AI is Transforming Modern Businesses",
      date: "10 July 2026",
      readTime: "8 min read",
      category: "Artificial Intelligence",
      author: "Dr. Priya Sharma",
      excerpt:
        "Discover how artificial intelligence is helping companies automate processes, improve customer experiences, and drive sustainable innovation.",
      image: "/images/blog1.jpg",
      featured: true,
    },
    {
      id: 2,
      slug: "top-web-development-trends-2026",
      title: "Top Web Development Trends in 2026",
      date: "05 July 2026",
      readTime: "12 min read",
      category: "Web Development",
      author: "Rahul Verma",
      excerpt:
        "Explore the latest technologies, frameworks, and best practices that will shape the future of web development in 2026 and beyond.",
      image: "/images/blog2.jpg",
    },
    {
      id: 3,
      slug: "why-businesses-are-moving-to-the-cloud",
      title: "Why Businesses Are Moving to the Cloud",
      date: "28 June 2026",
      readTime: "6 min read",
      category: "Cloud Computing",
      author: "Ananya Patel",
      excerpt:
        "Learn how cloud infrastructure improves scalability, security, performance, and operational efficiency for modern enterprises.",
      image: "/images/blog3.jpg",
    },
    {
      id: 4,
      slug: "national-nutrition-week-2025",
      title:
        "National Nutrition Week 2025: Nourishing India, One Plate at a Time",
      date: "01 September 2025",
      readTime: "10 min read",
      category: "Health & Wellness",
      author: "Dr. Meera Nair",
      excerpt:
        "Every year, September 1-7 is celebrated as National Nutrition Week in India. Here's how you can make the most of it for better health.",
      image: "https://picsum.photos/id/1080/800/500",
    },
  ];

  const handleReadBlog = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      alert("Thank you! You've successfully subscribed to our newsletter.");
      setSubscribed(false);
    }, 1000);
  };

  return (
    <div className="bg-[#0A1428] text-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/blogs1.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/85" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            LifeOnPlus <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Insights, stories, and expert knowledge from the world of health,
            wellness, technology, and human values.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => handleReadBlog(post.slug)}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl overflow-hidden cursor-pointer transition-all flex flex-col h-full"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4 bg-cyan-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-xs mb-4">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <FaTag />
                      <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <FaClock />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 line-clamp-2 group-hover:text-cyan-400 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-white/70 text-[15px] leading-relaxed flex-1 line-clamp-4">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-white/60">
                      <FaUser />
                      <span>{post.author}</span>
                    </div>
                    <div className="text-cyan-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Article →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black/60 border-t border-white/10">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-white/70 mb-10">
            Subscribe to our newsletter and get the latest insights on health,
            wellness, and technology delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 placeholder:text-white/50"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:brightness-110 px-10 py-4 rounded-2xl font-semibold transition whitespace-nowrap"
            >
              {subscribed ? "Subscribed ✓" : "Subscribe Now"}
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
