import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/contact");
      setIsLoading(false);
    }, 400);
  };

  const handleViewWork = () => {
    const projectsSection = document.getElementById("featured-projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/portfolio");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,130,246,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-20 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
              <span className="text-emerald-400">●</span>
              Trusted by 150+ Growing Businesses
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              We Build Digital Products
              <br />
              That{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Actually Matter
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-[520px] leading-relaxed">
              From idea to launch — we craft high-performance web apps, mobile
              experiences, and enterprise solutions that drive real business
              growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGetStarted}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 text-lg transition-all disabled:opacity-75"
              >
                {isLoading ? "Connecting..." : "Start Your Project"}
                <FaArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewWork}
                className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-2xl font-medium flex items-center gap-3 text-lg transition-all"
              >
                View Our Work
              </motion.button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6 pt-8">
              {[
                "Clutch Top Rated",
                "ISO 27001 Certified",
                "100% On-Time Delivery",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <FaCheckCircle className="text-emerald-400" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src="/images/hero-illustration.png"
                alt="Modern Software Development"
                className="w-full max-w-[520px] drop-shadow-2xl"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-xl rounded-3xl px-6 py-4 shadow-2xl border border-white/30"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🚀</div>
                  <div>
                    <p className="font-semibold text-gray-900">15+ Projects</p>
                    <p className="text-sm text-gray-500">
                      Delivered this month
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-3xl px-7 py-5 shadow-2xl"
              >
                <p className="text-4xl font-bold">98%</p>
                <p className="text-sm opacity-90">Client Retention Rate</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
