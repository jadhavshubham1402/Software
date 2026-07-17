import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaApple,
  FaAndroid,
  FaMobileAlt,
  FaRocket,
  FaSync,
  FaChartLine,
} from "react-icons/fa";

const MobileAppDevelopment = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/mobileDevelopment1.jpg')",
            opacity: 0.75,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaMobileAlt /> Mobile App Development
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Mobile Apps That
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Users Love & Businesses Need
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Beautiful, high-performance mobile applications for iOS and
                Android that drive engagement, retention, and revenue.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/mobileDevelopment2.jpg"
                alt="Mobile App Development"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR MOBILE DEVELOPMENT SERVICES */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Mobile Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Native iOS & Android Apps",
                desc: "High-performance apps built with Swift & Kotlin for maximum speed and reliability",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Cross-Platform Apps",
                desc: "Flutter & React Native — faster development with consistent experience across platforms",
                icon: <FaSync className="text-5xl" />,
              },
              {
                title: "Enterprise Mobile Solutions",
                desc: "Secure, scalable applications for large organizations and internal teams",
                icon: <FaChartLine className="text-5xl" />,
              },
              {
                title: "Progressive Web Apps",
                desc: "App-like experience accessible directly from the browser",
                icon: <FaRocket className="text-5xl" />,
              },
              {
                title: "App Redesign & Modernization",
                desc: "Upgrade legacy apps with modern UX/UI and latest technologies",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "MVP Development",
                desc: "Fast, cost-effective Minimum Viable Products to validate your idea quickly",
                icon: <FaRocket className="text-5xl" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Mobile Tech Stack</h2>
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
              "App Center",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 px-8 py-4 rounded-2xl text-lg font-medium transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Us for Mobile Development?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Native Performance",
                desc: "Smooth 60fps animations and fast load times",
              },
              {
                title: "App Store Ready",
                desc: "Full compliance with Apple & Google guidelines",
              },
              {
                title: "Ongoing Support",
                desc: "Post-launch maintenance and feature updates",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-cyan-400/50 transition"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-4xl">
                  {i === 0 ? "⚡" : i === 1 ? "✅" : "🔄"}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s turn your idea into a successful mobile product.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
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
