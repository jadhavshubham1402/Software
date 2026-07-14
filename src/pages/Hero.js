import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlayCircle, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white pb-24">
      {/* Animated Grid */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "35px 35px",
        }}
      />

      {/* Blur Background */}

      <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      {/* Floating Particles */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-blue-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen pt-28">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-sm mb-8">
              🚀 Trusted Software Development Company
            </div>

            {/* Heading */}

            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Build
              <span className="text-blue-400"> Future Ready </span>
              Software That
              <br />
              Grows Your Business
            </h1>

            {/* Description */}

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
              We build modern web applications, mobile apps, AI solutions and
              enterprise software that help startups and businesses innovate
              faster and scale confidently.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                to="/contact"
                className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full flex items-center gap-3 font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>

              <Link
                to="/portfolio"
                className="group border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105"
              >
                <FaPlayCircle />
                View Portfolio
              </Link>
            </div>

            {/* Features */}

            <div className="grid grid-cols-2 gap-5 mt-12">
              {[
                "Enterprise Solutions",
                "AI Integration",
                "Cloud Deployment",
                "24×7 Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <FaCheckCircle className="text-green-400 text-lg" />

                  {item}
                </div>
              ))}
            </div>

            {/* Stats */}

            <div className="flex flex-wrap gap-12 mt-16">
              {[
                {
                  number: "500+",
                  title: "Projects",
                },
                {
                  number: "120+",
                  title: "Experts",
                },
                {
                  number: "15+",
                  title: "Years",
                },
              ].map((item) => (
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  key={item.title}
                >
                  <h2 className="text-4xl font-bold text-blue-400">
                    {item.number}
                  </h2>

                  <p className="text-gray-400 mt-2">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center min-h-[650px]"
          >
            {/* Background Glow */}

            <div className="absolute w-[480px] h-[480px] rounded-full bg-blue-600/20 blur-[120px]"></div>

            {/* Decorative Ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[420px] h-[420px] border border-blue-500/20 rounded-full"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[340px] h-[340px] border border-cyan-400/20 rounded-full"
            />

            {/* Hero Illustration */}

            <motion.img
              src="/images/hero-illustration.png"
              alt="Software Development"
              className="relative z-20 w-full max-w-xl drop-shadow-[0_20px_60px_rgba(37,99,235,.4)]"
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Dashboard Card */}

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-8 right-0 z-30 w-72 rounded-3xl border border-white/20 bg-white/95 backdrop-blur-xl p-3 shadow-2xl"
            >
              <img
                src="/images/hero-dashboard.png"
                alt="Dashboard"
                className="rounded-2xl"
              />
            </motion.div>

            {/* AI Card */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute top-12 left-0 z-30 rounded-3xl border border-white/20 bg-white/90 backdrop-blur-xl px-6 py-5 shadow-2xl"
            >
              <p className="text-xs uppercase tracking-widest text-gray-500">
                AI Powered
              </p>

              <h3 className="mt-1 text-xl font-bold text-gray-800">
                Smart Automation
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Faster • Smarter • Secure
              </p>
            </motion.div>

            {/* Happy Clients */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-40 -left-5 z-30 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-5 text-white shadow-2xl"
            >
              <h2 className="text-3xl font-bold">150+</h2>

              <p className="mt-1 text-sm">Happy Clients</p>
            </motion.div>

            {/* Active Projects */}

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-40 right-0 z-30 rounded-3xl border border-slate-700 bg-slate-900/90 backdrop-blur-xl px-6 py-5 shadow-2xl"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

                <span className="text-xs uppercase tracking-wide text-gray-400">
                  Live Status
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">25+</h3>

              <p className="text-sm text-gray-400">
                Active Development Projects
              </p>
            </motion.div>

            {/* Experience */}

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute bottom-4 left-20 z-30 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-4 shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-blue-400">15+</h2>

              <p className="text-sm text-gray-300">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
