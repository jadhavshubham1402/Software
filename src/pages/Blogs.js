import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaTag } from "react-icons/fa";

const Blogs = () => {
  const navigate = useNavigate();
  const [subscribed, setSubscribed] = useState(false);

  const blogPosts = [
    {
      id: 1,
      slug: "how-ai-is-transforming-modern-businesses",
      title: "How AI is Transforming Modern Businesses",
      date: "10 July 2026",
      category: "Artificial Intelligence",
      excerpt:
        "Discover how artificial intelligence is helping companies automate processes, improve customer experiences, and drive innovation.",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      slug: "top-web-development-trends-2026",
      title: "Top Web Development Trends in 2026",
      date: "05 July 2026",
      category: "Web Development",
      excerpt:
        "Explore the latest technologies, frameworks, and best practices shaping the future of web development.",
      image: "/images/blog2.jpg",
    },
    {
      id: 3,
      slug: "why-businesses-are-moving-to-the-cloud",
      title: "Why Businesses Are Moving to the Cloud",
      date: "28 June 2026",
      category: "Cloud Computing",
      excerpt:
        "Learn how cloud infrastructure improves scalability, security, performance, and operational efficiency.",
      image: "/images/blog3.jpg",
    },
    {
      id: 4,
      slug: "national-nutrition-week-2025",
      title:
        "National Nutrition Week (September 1–7): Nourishing India, One Plate at a Time",
      date: "September 1, 2025",
      category: "Health & Wellness",
      excerpt:
        "Every year, September 1-7 is celebrated as National Nutrition Week in India.",
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
    }, 800);
  };

  return (
    <div className="bg-[#0A1428] text-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/blogs1.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl font-bold mb-6">
            LifeOnPlus <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-2xl text-white/70 max-w-2xl mx-auto">
            Insights, stories, and knowledge from the world of health, wellness,
            technology, and human values
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                onClick={() => handleReadBlog(post.slug)}
                className="bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl overflow-hidden cursor-pointer transition-all h-full flex flex-col group"
              >
                <div className="aspect-video bg-zinc-900 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm mb-5">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <FaTag />
                      <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/50">
                      <FaCalendarAlt />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 line-clamp-2 group-hover:text-cyan-400 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-white/70 line-clamp-3 mb-8 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="text-cyan-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Read Full Article
                    <span className="text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
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
            Subscribe to our newsletter and never miss important health
            insights, wellness tips, and latest updates.
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
              {subscribed ? "Subscribed!" : "Subscribe"}
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
