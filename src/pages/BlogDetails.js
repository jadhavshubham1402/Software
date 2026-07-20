import {
  FaArrowLeft,
  FaCalendarAlt,
  FaTag,
  FaClock,
  FaUser,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogData = {
    "how-ai-is-transforming-modern-businesses": {
      title: "How AI is Transforming Modern Businesses",
      date: "10 July 2026",
      readTime: "12 min read",
      category: "Artificial Intelligence",
      author: "Dr. Priya Sharma",
      image: "/images/blog1.jpg",
      content: `
        <p>Artificial Intelligence has moved from being a futuristic concept to becoming a core competitive advantage for businesses across every industry.</p>
        
        <h3>The AI Revolution in Business</h3>
        <p>From predictive analytics and personalized customer experiences to intelligent automation and generative AI tools, businesses that embrace AI are seeing unprecedented growth and efficiency.</p>
        
        <h3>Key Areas of Impact</h3>
        <ul>
          <li><strong>Customer Experience:</strong> AI-powered chatbots, recommendation engines, and sentiment analysis are delivering hyper-personalized experiences.</li>
          <li><strong>Operational Efficiency:</strong> Intelligent automation is reducing manual tasks by up to 70% in many organizations.</li>
          <li><strong>Decision Making:</strong> Real-time data insights and predictive modeling are helping leaders make smarter, faster decisions.</li>
          <li><strong>Innovation:</strong> Generative AI is accelerating product development and creative processes.</li>
        </ul>
        
        <p>Companies that successfully integrate AI into their operations are not just surviving — they are thriving in an increasingly competitive digital landscape.</p>
      `,
    },

    "top-web-development-trends-2026": {
      title: "Top Web Development Trends in 2026",
      date: "05 July 2026",
      readTime: "14 min read",
      category: "Web Development",
      author: "Rahul Verma",
      image: "/images/blog2.jpg",
      content: `
        <p>The web development landscape continues to evolve at a rapid pace. Here are the most important trends that will define the industry in 2026 and beyond.</p>
        
        <h3>1. AI-Powered Development Tools</h3>
        <p>AI coding assistants, automated testing, and intelligent code review tools are becoming standard in modern development workflows.</p>
        
        <h3>2. Advanced Progressive Web Apps (PWAs)</h3>
        <p>Businesses are investing heavily in PWAs for superior performance, offline capabilities, and native-like user experiences.</p>
        
        <h3>3. WebAssembly & Edge Computing</h3>
        <p>For performance-critical applications, WebAssembly and edge computing are delivering lightning-fast user experiences.</p>
        
        <h3>4. Sustainable & Accessible Web Design</h3>
        <p>Developers are focusing on creating eco-friendly, accessible websites with optimized performance and reduced carbon footprints.</p>
        
        <p>Staying ahead of these trends is crucial for delivering modern, competitive digital experiences.</p>
      `,
    },

    "why-businesses-are-moving-to-the-cloud": {
      title: "Why Businesses Are Moving to the Cloud",
      date: "28 June 2026",
      readTime: "9 min read",
      category: "Cloud Computing",
      author: "Ananya Patel",
      image: "/images/blog3.jpg",
      content: `
        <p>Cloud migration has become a strategic priority for businesses of all sizes. Here's why organizations are making the move.</p>
        
        <h3>Major Benefits of Cloud Adoption</h3>
        <ul>
          <li><strong>Scalability & Flexibility:</strong> Instantly scale resources based on demand</li>
          <li><strong>Cost Efficiency:</strong> Pay only for what you use with flexible pricing models</li>
          <li><strong>Enterprise Security:</strong> Advanced security tools and compliance frameworks</li>
          <li><strong>Global Accessibility:</strong> Access applications and data from anywhere</li>
          <li><strong>Faster Innovation:</strong> Quick deployment of new features and services</li>
        </ul>
        
        <p>Businesses leveraging cloud infrastructure are better positioned to innovate quickly and respond to market changes effectively.</p>
      `,
    },

    "national-nutrition-week-2025": {
      title:
        "National Nutrition Week 2025: Nourishing India, One Plate at a Time",
      date: "01 September 2025",
      readTime: "11 min read",
      category: "Health & Wellness",
      author: "Dr. Meera Nair",
      image: "https://picsum.photos/id/1080/1200/600",
      content: `
        <p>Every year from September 1 to 7, India observes <strong>National Nutrition Week</strong> to spread awareness about the importance of proper nutrition and balanced diet.</p>
        
        <h3>This Year's Theme</h3>
        <p>This year’s focus is on making small, sustainable changes in our daily eating habits to build a healthier and stronger nation.</p>
        
        <h3>Why Nutrition Matters</h3>
        <p>Proper nutrition is the foundation of good health. It helps prevent many lifestyle diseases, boosts immunity, and improves overall energy and well-being.</p>
        
        <p>Let’s use this Nutrition Week as an opportunity to educate ourselves, our families, and communities about making better food choices for long-term wellness.</p>
      `,
    },
  };

  const post = blogData[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A1428] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate("/blogs")}
            className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold transition"
          >
            ← Back to All Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A1428] text-white min-h-screen pb-24">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 pt-28">
        <button
          onClick={() => navigate("/blogs")}
          className="flex items-center gap-3 text-cyan-400 hover:text-white mb-10 transition-all group text-lg"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          Back to All Blogs
        </button>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto px-6"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-3xl shadow-2xl aspect-video object-cover"
        />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm mb-10 text-white/70">
          <div className="flex items-center gap-2 text-cyan-400">
            <FaTag /> {post.category}
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt /> {post.date}
          </div>
          <div className="flex items-center gap-2">
            <FaClock /> {post.readTime}
          </div>
          <div className="flex items-center gap-2">
            <FaUser /> {post.author}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-5xl font-bold leading-tight mb-12">
          {post.title}
        </h1>

        {/* Content */}
        <div
          className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-semibold prose-p:text-white/80 prose-li:text-white/80 text-[17.5px] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
