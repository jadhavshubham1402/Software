import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlayCircle, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Blur Effects */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-sm mb-8">
              🚀 Trusted Software Development Company
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transform Your
              <span className="text-blue-400"> Digital Ideas </span>
              Into Powerful Software
            </h1>

            <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
              We design and develop enterprise software, AI-powered
              applications, websites, mobile apps, and cloud solutions that help
              businesses scale faster.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full flex items-center gap-3 font-semibold"
              >
                Get Started
                <FaArrowRight />
              </Link>

              <Link
                to="/portfolio"
                className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-full flex items-center gap-3"
              >
                <FaPlayCircle />
                View Portfolio
              </Link>
            </div>

            {/* Features */}

            <div className="grid md:grid-cols-2 gap-4 mt-10">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                Agile Development
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                AI Integration
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                Cloud Solutions
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                24×7 Support
              </div>
            </div>

            {/* Stats */}

            <div className="flex gap-10 mt-14 flex-wrap">
              <div>
                <h2 className="text-4xl font-bold text-blue-400">500+</h2>

                <p className="text-gray-400 mt-2">Projects</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">120+</h2>

                <p className="text-gray-400 mt-2">Developers</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">15+</h2>

                <p className="text-gray-400 mt-2">Years</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Main Illustration */}

            <img
              src="/images/hero-illustration.png"
              alt="Software Company"
              className="w-full max-w-xl relative z-10"
            />

            {/* Dashboard */}

            <div className="absolute bottom-4 right-0 bg-white rounded-2xl shadow-2xl p-3 w-64 z-20">
              <img
                src="/images/hero-dashboard.png"
                alt="Dashboard"
                className="rounded-xl"
              />
            </div>

            {/* AI Card */}

            <div className="absolute top-16 left-0 bg-white rounded-2xl shadow-xl px-5 py-4 z-20">
              <p className="text-xs uppercase text-gray-500">AI Powered</p>

              <h3 className="text-xl font-bold text-gray-800">
                Smart Solutions
              </h3>
            </div>

            {/* Clients Card */}

            <div className="absolute bottom-40 -left-6 bg-blue-600 rounded-2xl px-6 py-5 shadow-xl text-white z-20">
              <h2 className="text-3xl font-bold">150+</h2>

              <p className="text-sm">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
