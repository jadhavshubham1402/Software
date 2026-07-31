import { motion } from "framer-motion";
import {
  FaApple,
  FaArrowRight,
  FaChartBar,
  FaMobileAlt,
  FaReact,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Mobile = () => {
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
            backgroundImage: "url('/images/mobile1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-sm text-cyan-400 text-sm">
                <FaMobileAlt className="text-xl" />
                <span className="uppercase tracking-widest font-medium">
                  {" "}
                  Mobile Development
                </span>
              </div>

              <h1 className="text-2xl lg:text-4xl font-bold leading-[1.1] tracking-tighter">
                Mobile Apps That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Users Love
                </span>
              </h1>

              <p className="text-lg text-white/80 max-w-xl mb-10">
                We build exceptional native and cross-platform mobile
                experiences that deliver outstanding performance, beautiful
                design, and real business value.
              </p>

              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  App Store Ready
                </div>
                <div>High Performance</div>
                <div>Seamless UX</div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/mobile2.jpg"
                alt="Mobile Development"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE PLATFORMS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Mobile Development Platforms
            </h2>
            <p className="text-lg text-white/70">
              We deliver excellence across all major technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* iOS */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-12 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl text-cyan-400"></div>
                <div>
                  <h3 className="text-lg font-semibold">iOS Development</h3>
                  <p className="text-white/60 text-base">
                    Native iOS Applications
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">→ Swift & SwiftUI</li>
                <li className="flex items-start gap-3">→ UIKit & Combine</li>
                <li className="flex items-start gap-3">
                  → Core Data & CloudKit
                </li>
                <li className="flex items-start gap-3">→ ARKit & Vision</li>
                <li className="flex items-start gap-3">
                  → App Store Optimization
                </li>
              </ul>
            </motion.div>

            {/* Android */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-12 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl text-cyan-400">🤖</div>
                <div>
                  <h3 className="text-lg font-semibold">Android Development</h3>
                  <p className="text-white/60 text-base">
                    Native Android Applications
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">→ Kotlin</li>
                <li className="flex items-start gap-3">→ Jetpack Compose</li>
                <li className="flex items-start gap-3">→ Room & WorkManager</li>
                <li className="flex items-start gap-3">→ Coroutines & Flow</li>
                <li className="flex items-start gap-3">
                  → Google Play Services
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Cross Platform */}
          <div className="mt-12 bg-gradient-to-br from-white/5 to-cyan-400/5 border border-white/10 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-semibold mb-8">
              Cross-Platform Development
            </h3>
            <div className="flex flex-wrap justify-center gap-16 text-4xl">
              <div className="flex flex-col items-center gap-3">
                <SiFlutter className="text-cyan-400" />
                <span className="text-xl">Flutter</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <FaReact className="text-cyan-400" />
                <span className="text-xl">React Native</span>
              </div>
            </div>
            <p className="mt-8 text-white/70 max-w-md mx-auto">
              Single codebase. Native performance. Beautiful UI across both
              platforms.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mobile Tech Stack</h2>
          <p className="text-white/60 mb-12">
            Modern tools for exceptional mobile experiences
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Swift",
              "Kotlin",
              "Flutter",
              "React Native",
              "SwiftUI",
              "Jetpack Compose",
              "Firebase",
              "Realm",
              "GraphQL",
              "Redux",
              "TypeScript",
              "Fastlane",
            ].map((tech, i) => (
              <div
                key={tech}
                className="w-48 h-16 flex items-center justify-center text-center bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 rounded-2xl text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Businesses Trust Our Mobile Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaMobileAlt className="text-3xl" />,
                title: "Native Performance",
                desc: "Blazing fast apps with smooth animations and optimal battery usage.",
              },
              {
                icon: <FaChartBar className="text-3xl" />,
                title: "Business Focused",
                desc: "Apps designed to drive engagement, conversions, and revenue.",
              },
              {
                icon: <FaApple className="text-3xl" />,
                title: "App Store Success",
                desc: "Proven track record of high ratings and successful launches.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 transition group text-center"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl text-cyan-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-center w-full">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">
            Ready to Build Your Next Great App?
          </h2>
          <p className="text-lg text-white/90 mb-12">
            Let’s choose the perfect technology stack and create a mobile
            experience your users will love.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your Mobile Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
