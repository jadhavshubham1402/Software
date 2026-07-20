import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBolt,
  FaChartBar,
  FaCode,
  FaLightbulb,
  FaMobileAlt,
  FaPalette,
  FaReact,
  FaTachometerAlt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Frontend = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/frontend1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaReact /> Frontend Development
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Frontend Development That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Feels Alive
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                We craft fast, visually stunning, and highly interactive user
                interfaces that deliver exceptional user experiences and
                business results.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Performance Obsessed</span>
                </div>
                <div>•</div>
                <div>Pixel Perfect</div>
                <div>•</div>
                <div>Future Ready</div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/frontend2.jpg"
                alt="Frontend Development"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "180+", label: "Projects Delivered" },
            { number: "98", label: "Lighthouse Score Avg" },
            { number: "45+", label: "Happy Clients" },
            { number: "3.8x", label: "Avg Engagement Boost" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-r border-white/10 last:border-0"
            >
              <p className="text-4xl font-bold text-cyan-400">{stat.number}</p>
              <p className="text-white/70 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHAT WE BUILD */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              High-performance digital experiences tailored to your business
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Single Page Applications",
                desc: "Lightning-fast, dynamic SPAs using React, Next.js, and TypeScript.",
                icon: <FaReact className="text-5xl" />,
              },
              {
                title: "Responsive Websites",
                desc: "Mobile-first, pixel-perfect websites that look stunning on every device.",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Interactive Dashboards",
                desc: "Powerful admin panels and real-time data visualization platforms.",
                icon: <FaChartBar className="text-5xl" />,
              },
              {
                title: "E-commerce Frontends",
                desc: "High-conversion online stores with seamless shopping experiences.",
                icon: <FaPalette className="text-5xl" />,
              },
              {
                title: "Progressive Web Apps",
                desc: "App-like experiences that work offline and load instantly.",
                icon: <FaBolt className="text-5xl" />,
              },
              {
                title: "Design Systems",
                desc: "Scalable, reusable component libraries with perfect consistency.",
                icon: <FaCode className="text-5xl" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-cyan-400/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-500"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Modern Frontend Stack</h2>
          <p className="text-white/60 mb-12">
            Built with the latest technologies for performance and scalability
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Redux Toolkit",
              "Vue.js",
              "Svelte",
              "Astro",
              "Three.js",
              "GSAP",
            ].map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 px-8 py-4 rounded-2xl text-lg font-medium transition-all hover:-translate-y-1"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Our Frontend Team
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaTachometerAlt className="text-5xl" />,
                title: "Blazing Fast Performance",
                desc: "Optimized Core Web Vitals, excellent Lighthouse scores, and lightning-fast load times.",
              },
              {
                icon: <FaPalette className="text-5xl" />,
                title: "Pixel Perfect & Intuitive",
                desc: "Faithful implementation of designs with smooth interactions and delightful UX.",
              },
              {
                icon: <FaLightbulb className="text-5xl" />,
                title: "Clean & Scalable Code",
                desc: "Maintainable, well-documented, and future-proof architecture.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 transition group text-center"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s build beautiful, high-performing interfaces that users love
            and your business thrives on.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your Frontend Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Frontend;
