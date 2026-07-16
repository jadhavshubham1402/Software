import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "national-nutrition-week-2025",
      title:
        "National Nutrition Week (September 1–7): Nourishing India, One Plate at a Time",
      date: "September 1, 2025",
      category: "Health & Wellness",
      excerpt:
        "Every year, September 1-7 is celebrated as National Nutrition Week in India...",
      image: "/images/blog-nutrition.jpg",
    },
    {
      id: 2,
      slug: "international-left-handers-day",
      title: "August 13: International Left-Handers Day",
      date: "August 13, 2025",
      category: "Awareness",
      excerpt: "Celebrating the unique 10% — The Left-Handed Community...",
      image: "/images/blog-left-handers.jpg",
    },
    {
      id: 3,
      slug: "world-lung-cancer-day",
      title: "World Lung Cancer Day – Let’s Breathe Better, Together",
      date: "August 1, 2025",
      category: "Health Awareness",
      excerpt: "Lung cancer is the leading cause of cancer deaths globally...",
      image: "/images/blog-lung-cancer.jpg",
    },
    {
      id: 4,
      slug: "world-humanitarian-day",
      title: "World Humanitarian Day – August 19th",
      date: "August 19, 2025",
      category: "Human Values",
      excerpt:
        "A global tribute to those who risk their lives to help others...",
      image: "/images/blog-humanitarian.jpg",
    },
  ];

  return (
    <div className="bg-[#0A0A0F] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6">LifeOnPlus Blog</h1>
          <p className="text-2xl text-white/70">
            Insights, stories, and knowledge from the world of health,
            technology, and innovation
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
                whileHover={{ y: -12 }}
                className="group bg-white/5 border border-white/10 hover:border-white/30 rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-zinc-900 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs uppercase tracking-widest text-emerald-400">
                      {post.category}
                    </span>
                    <span className="text-xs text-white/50">{post.date}</span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-white/70 line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-emerald-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-black/60 border-t border-white/10">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/70 mb-8">
            Get the latest insights delivered to your inbox
          </p>

          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-400"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 px-10 rounded-2xl font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
