import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt, FaTag } from "react-icons/fa";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogData = {
    "how-ai-is-transforming-modern-businesses": {
      title: "How AI is Transforming Modern Businesses",
      date: "10 July 2026",
      category: "Artificial Intelligence",
      image: "/images/blog1.jpg",
      content: `
        <p>Artificial Intelligence is no longer a futuristic concept — it's a core competitive advantage for businesses across industries.</p>
        
        <h3>The Current AI Revolution</h3>
        <p>From predictive analytics and personalized customer experiences to intelligent automation and generative AI tools, businesses that embrace AI are seeing unprecedented growth and efficiency.</p>
        
        <h3>Key Areas of Impact</h3>
        <ul>
          <li><strong>Customer Experience:</strong> AI-powered chatbots and recommendation engines are delivering hyper-personalized experiences.</li>
          <li><strong>Operational Efficiency:</strong> Intelligent automation is reducing manual tasks by up to 70% in many organizations.</li>
          <li><strong>Decision Making:</strong> Real-time data insights and predictive modeling are helping leaders make smarter decisions faster.</li>
        </ul>
        
        <p>Companies that successfully integrate AI into their operations are not just surviving — they are thriving in an increasingly competitive digital landscape.</p>
        
        <p>The future belongs to organizations that can effectively combine human creativity with artificial intelligence.</p>
      `,
    },
    "top-web-development-trends-2026": {
      title: "Top Web Development Trends in 2026",
      date: "05 July 2026",
      category: "Web Development",
      image: "/images/blog2.jpg",
      content: `
        <p>The web development landscape continues to evolve rapidly. Here are the most important trends shaping the industry in 2026.</p>
        
        <h3>1. AI-Powered Development</h3>
        <p>AI coding assistants and automated testing tools are becoming standard in modern development workflows.</p>
        
        <h3>2. Progressive Web Apps (PWAs)</h3>
        <p>Businesses are increasingly investing in PWAs for better performance, offline capabilities, and native-like experiences.</p>
        
        <h3>3. WebAssembly & Edge Computing</h3>
        <p>Performance-critical applications are moving toward WebAssembly and edge computing for lightning-fast user experiences.</p>
        
        <h3>4. Sustainability in Web Design</h3>
        <p>Developers and designers are focusing on creating eco-friendly websites with optimized performance and reduced carbon footprints.</p>
        
        <p>Staying ahead of these trends is crucial for delivering modern, competitive digital experiences.</p>
      `,
    },
    "why-businesses-are-moving-to-the-cloud": {
      title: "Why Businesses Are Moving to the Cloud",
      date: "28 June 2026",
      category: "Cloud Computing",
      image: "/images/blog3.jpg",
      content: `
        <p>Cloud migration has become a strategic priority for businesses of all sizes. Here's why organizations are making the move.</p>
        
        <h3>Key Benefits of Cloud Adoption</h3>
        <ul>
          <li><strong>Scalability:</strong> Easily scale resources up or down based on demand.</li>
          <li><strong>Cost Efficiency:</strong> Pay only for what you use with flexible pricing models.</li>
          <li><strong>Security & Compliance:</strong> Enterprise-grade security and compliance tools.</li>
          <li><strong>Global Accessibility:</strong> Access your applications and data from anywhere in the world.</li>
        </ul>
        
        <p>Businesses that leverage cloud infrastructure are better positioned to innovate quickly and respond to market changes effectively.</p>
        
        <p>The question is no longer "if" to move to the cloud, but "how" to do it most effectively.</p>
      `,
    },
    "national-nutrition-week-2025": {
      title:
        "National Nutrition Week (September 1–7): Nourishing India, One Plate at a Time",
      date: "September 1, 2025",
      category: "Health & Wellness",
      image: "https://picsum.photos/id/1080/1200/600",
      content: `
        <p>National Nutrition Week is observed every year from September 1 to 7 to promote awareness about the importance of proper nutrition and balanced diet.</p>
        
        <h3>Theme & Focus</h3>
        <p>This year's theme emphasizes making small, sustainable changes in daily eating habits to build a healthier nation.</p>
        
        <p>Proper nutrition is the foundation of good health. By making conscious choices about what we eat, we can prevent many lifestyle diseases and improve overall well-being.</p>
        
        <p>Let's use this Nutrition Week to educate ourselves and our communities about the power of balanced nutrition.</p>
      `,
    },
  };

  const post = blogData[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A1428] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate("/blogs")}
            className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold"
          >
            ← Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A1428] text-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <button
          onClick={() => navigate("/blogs")}
          className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 mb-10 transition group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          Back to All Blogs
        </button>

        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-3xl shadow-2xl mb-12"
        />

        <div className="flex items-center gap-6 text-sm mb-8">
          <div className="flex items-center gap-2 text-cyan-400">
            <FaTag /> {post.category}
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <FaCalendarAlt /> {post.date}
          </div>
        </div>

        <h1 className="text-5xl font-bold leading-tight mb-12">{post.title}</h1>

        <div
          className="prose prose-invert max-w-none text-lg leading-relaxed text-white/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
