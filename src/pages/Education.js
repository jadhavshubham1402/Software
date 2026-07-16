import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Education Technology
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  That Inspires Learning
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Digital platforms that make education more accessible, engaging,
                and effective.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/education-hero.png"
                alt="Education Technology"
                className="rounded-3xl shadow-2xl max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Education Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Learning Management Systems (LMS)",
                desc: "Comprehensive platforms for online and hybrid learning",
                icon: "📚",
              },
              {
                title: "Student Information Systems",
                desc: "Efficient management of student records and admissions",
                icon: "🆔",
              },
              {
                title: "Interactive E-Learning Apps",
                desc: "Engaging content with gamification and assessments",
                icon: "🎮",
              },
              {
                title: "Virtual Classrooms",
                desc: "Real-time video classes with collaboration tools",
                icon: "📹",
              },
              {
                title: "AI-Powered Tutoring",
                desc: "Personalized learning paths and intelligent recommendations",
                icon: "🧠",
              },
              {
                title: "Campus Management Systems",
                desc: "Complete digital transformation for educational institutions",
                icon: "🏫",
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 border border-white/10 hover:border-violet-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-violet-400 transition">
                  {solution.title}
                </h3>
                <p className="text-white/70">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Why Educational Institutions Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Scalable & Secure",
                desc: "Handles thousands of students with enterprise security",
              },
              {
                title: "User-Friendly Interfaces",
                desc: "Intuitive design for students, teachers, and administrators",
              },
              {
                title: "Seamless Integration",
                desc: "Works with existing school management systems",
              },
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-violet-600 to-purple-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Transforming Education Through Technology
          </h2>
          <p className="text-xl mb-10">
            Let’s build the future of learning together.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Education Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Education;
