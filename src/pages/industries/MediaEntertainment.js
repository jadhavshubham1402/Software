import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaRoute,
  FaShieldAlt,
  FaTachometerAlt,
  FaTruck
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { mediaList } from "../../data/softwareData";

const MediaEntertainment = () => {
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
            backgroundImage: "url('/images/media1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaTruck /> MediaEntertainment
              </div>

              <h1 className="text-2xl lg:text-4xl font-bold leading-[1.1] mb-8">
                MediaEntertainment That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Moves the World
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                Intelligent logistics solutions for OTT Services, Software for
                Digital Asset Management, CMS Development
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/media2.jpg"
                alt="Logistics Technology"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR MediaEntertainment SOLUTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Entertainment</h2>
            <p className="text-xl text-white/70">
              Smart technology for modern supply chains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaList.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-cyan-400/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-8 flex flex-col h-full transition-all duration-500"
              >
                <div className="text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-white/70 leading-relaxed flex-grow">
                  {solution.desc}
                </p>

                <button
                  onClick={() =>
                    navigate(`/industries/media-entertainment/${solution.slug}`)
                  }
                  className="mt-6 inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            MediaEntertainment
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaTachometerAlt className="text-5xl" />,
                title: "Digital Asset Management",
                desc: "Securely manage, organize, and access digital assets from a centralized platform.",
              },
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Seamless Content Delivery",
                desc: "Deliver digital content efficiently across web, mobile, and OTT platforms.",
              },
              {
                icon: <FaRoute className="text-5xl" />,
                title: "Scalable Media Solutions",
                desc: "Build flexible media platforms that grow with your business and audience.",
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
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Let’s build smarter, faster, and more efficient supply chain
            solutions.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-base hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your MediaEntertainment Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default MediaEntertainment;
