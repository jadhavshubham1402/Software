import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaMobileAlt,
  FaBrain,
  FaSchool,
  FaShieldAlt,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const Education = () => {
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
            backgroundImage: "url('/images/education1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaGraduationCap /> EdTech Solutions
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Education Technology That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Inspires Learning
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                Digital platforms that make education more accessible, engaging,
                personalized, and effective for students and institutions.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/education2.jpg"
                alt="Education Technology"
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
            { number: "80+", label: "EdTech Projects" },
            { number: "500K+", label: "Students Reached" },
            { number: "4.8/5", label: "User Satisfaction" },
            { number: "98%", label: "Adoption Rate" },
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

      {/* OUR EDUCATION SOLUTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Education Solutions</h2>
            <p className="text-xl text-white/70">
              Transforming learning experiences through technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Learning Management Systems (LMS)",
                desc: "Powerful platforms for online, hybrid, and blended learning with rich analytics.",
                icon: <FaGraduationCap className="text-5xl" />,
              },
              {
                title: "Student Information Systems",
                desc: "Complete management of admissions, attendance, grading, and academic records.",
                icon: <FaUsers className="text-5xl" />,
              },
              {
                title: "Interactive E-Learning Apps",
                desc: "Gamified, mobile-first learning experiences with assessments and progress tracking.",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Virtual Classrooms",
                desc: "Real-time interactive classes with collaboration tools and screen sharing.",
                icon: <FaChalkboardTeacher className="text-5xl" />,
              },
              {
                title: "AI-Powered Tutoring",
                desc: "Personalized learning paths, intelligent recommendations, and adaptive content.",
                icon: <FaBrain className="text-5xl" />,
              },
              {
                title: "Campus Management Systems",
                desc: "End-to-end digital transformation for schools, colleges, and universities.",
                icon: <FaSchool className="text-5xl" />,
              },
            ].map((solution, i) => (
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
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Educational Institutions Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Secure & Compliant",
                desc: "Enterprise-grade security with full data privacy and regulatory compliance.",
              },
              {
                icon: <FaLightbulb className="text-5xl" />,
                title: "Engaging User Experience",
                desc: "Beautiful, intuitive interfaces loved by students, teachers, and administrators.",
              },
              {
                icon: <FaSchool className="text-5xl" />,
                title: "Seamless Integration",
                desc: "Works smoothly with existing tools and legacy education systems.",
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
            Ready to Transform Education?
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s create engaging, accessible, and effective digital learning
            experiences together.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your EdTech Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Education;