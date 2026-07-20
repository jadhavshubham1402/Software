import { motion } from "framer-motion";
import {
  FaBuilding,
  FaChartLine,
  FaGlobe,
  FaMobileAlt,
  FaRocket,
  FaShieldAlt,
  FaSync,
  FaUsers
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MobileAppDevelopment = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/mobileDevelopment1.jpg')",
            opacity: 0.75,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-sm text-cyan-400 text-sm">
                <FaMobileAlt className="text-xl" />
                <span className="uppercase tracking-widest font-medium">
                  Mobile App Development
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter">
                Mobile Apps That
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-300 bg-clip-text text-transparent">
                  Users Love & Businesses Need
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-lg">
                We create beautiful, high-performance iOS and Android apps that
                drive user engagement, retention, and measurable business
                growth.
              </p>
            </div>

            <div className="relative hidden lg:flex justify-center">
              <div className="relative">
                <img
                  src="/images/mobileDevelopment2.jpg"
                  alt="Mobile App Development"
                  className="rounded-3xl shadow-2xl border border-white/10"
                />
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-cyan-400">4.8★</div>
                  <div className="text-sm text-white/70">
                    Average App Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Our Mobile Development Services
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              End-to-end mobile solutions tailored for your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Native iOS & Android Apps",
                desc: "High-performance apps built with Swift and Kotlin for the best possible user experience.",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Cross-Platform Development",
                desc: "Faster development using Flutter and React Native while maintaining native quality.",
                icon: <FaSync className="text-5xl" />,
              },
              {
                title: "Enterprise Mobile Solutions",
                desc: "Secure, scalable applications for large organizations with complex workflows.",
                icon: <FaBuilding className="text-5xl" />,
              },
              {
                title: "Progressive Web Apps",
                desc: "App-like experiences accessible from any browser with offline capabilities.",
                icon: <FaGlobe className="text-5xl" />,
              },
              {
                title: "App Redesign & Modernization",
                desc: "Complete visual and technical upgrade of existing mobile applications.",
                icon: <FaRocket className="text-5xl" />,
              },
              {
                title: "MVP Development",
                desc: "Fast, cost-effective Minimum Viable Products to validate your idea quickly.",
                icon: <FaChartLine className="text-5xl" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/60 rounded-3xl p-10 transition-all duration-500"
              >
                <div className="text-cyan-400 mb-8 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">Our Mobile Tech Stack</h2>
          <p className="text-white/70 mb-12">
            Industry-leading tools for exceptional performance
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Flutter",
              "React Native",
              "Swift",
              "Kotlin",
              "Firebase",
              "AWS Amplify",
              "GraphQL",
              "Redux",
              "Fastlane",
            ].map((tech) => (
              <span
                key={tech}
                className="px-8 py-4 bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 rounded-2xl text-lg font-medium transition-all hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Why Choose Us for Mobile Apps?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRocket />,
                title: "Native Performance",
                desc: "Smooth animations, fast load times, and optimal battery usage.",
              },
              {
                icon: <FaUsers />,
                title: "User-Centric Design",
                desc: "Beautiful, intuitive interfaces that users actually love.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Enterprise Security",
                desc: "Robust security practices and data protection standards.",
              },
              {
                icon: <FaChartLine />,
                title: "App Store Success",
                desc: "Proven track record of high ratings and downloads.",
              },
              {
                icon: <FaSync />,
                title: "Continuous Support",
                desc: "Post-launch maintenance, updates, and feature enhancements.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 text-cyan-400">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - ONLY ONE */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Let’s turn your idea into a successful mobile product that users
            love.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto shadow-2xl"
          >
            Discuss Your App Idea
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
