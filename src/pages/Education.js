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
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/id/1015/1920/1080')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaGraduationCap /> EdTech Solutions
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Education Technology
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  That Inspires Learning
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Digital platforms that make education more accessible, engaging,
                and effective for students and institutions.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="https://picsum.photos/id/1015/600/500"
                alt="Education Technology"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR EDUCATION SOLUTIONS */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Education Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Learning Management Systems (LMS)",
                desc: "Comprehensive platforms for online, hybrid, and blended learning experiences",
                icon: <FaGraduationCap className="text-5xl" />,
              },
              {
                title: "Student Information Systems",
                desc: "Efficient management of admissions, records, attendance, and academic progress",
                icon: <FaUsers className="text-5xl" />,
              },
              {
                title: "Interactive E-Learning Apps",
                desc: "Gamified learning experiences with assessments and progress tracking",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Virtual Classrooms",
                desc: "Real-time video classes with collaboration tools and screen sharing",
                icon: <FaChalkboardTeacher className="text-5xl" />,
              },
              {
                title: "AI-Powered Tutoring",
                desc: "Personalized learning paths and intelligent content recommendations",
                icon: <FaBrain className="text-5xl" />,
              },
              {
                title: "Campus Management Systems",
                desc: "Complete digital transformation for schools, colleges, and universities",
                icon: <FaSchool className="text-5xl" />,
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {solution.title}
                </h3>
                <p className="text-white/70">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Why Educational Institutions Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Scalable & Secure",
                desc: "Handles thousands of students with enterprise-grade security and compliance",
              },
              {
                title: "User-Friendly Interfaces",
                desc: "Intuitive design loved by students, teachers, and administrators alike",
              },
              {
                title: "Seamless Integration",
                desc: "Works smoothly with existing tools and school management systems",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-cyan-400/50 transition"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-4xl">
                  {i === 0 ? "🔒" : i === 1 ? "👥" : "🔄"}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Transforming Education Through Technology
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s build the future of learning together.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Start Education Project
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Education;
