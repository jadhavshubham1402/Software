import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaLaptopCode,
  FaGlobe,
  FaAward,
  FaIndustry,
} from "react-icons/fa";

const stats = [
  { number: "500", label: "Projects Delivered", suffix: "+" },
  { number: "150", label: "Happy Clients", suffix: "+" },
  { number: "98", label: "Client Retention", suffix: "%" },
  { number: "15", label: "Years Experience", suffix: "+" },
];

const expertise = [
  {
    title: "Custom Software Development",
    desc: "Tailored solutions built for your unique business needs",
    image: "/images/about1.jpg",
  },
  {
    title: "AI & Machine Learning",
    desc: "Intelligent automation and predictive solutions",
    image: "/images/about2.jpg",
  },
  {
    title: "Mobile & Web Applications",
    desc: "Seamless digital experiences across platforms",
    image: "/images/about3.jpg",
  },
];

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "CEO & Founder",
    image: "https://picsum.photos/id/64/400/400",
    bio: "18+ years driving digital transformation",
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    image: "https://picsum.photos/id/65/400/400",
    bio: "Award-winning UX/UI expert",
  },
  {
    name: "Marcus Chen",
    role: "CTO",
    image: "https://picsum.photos/id/66/400/400",
    bio: "Ex-Google, AI & Cloud specialist",
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

  const handleStartConversation = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/about-bg.jpg')",
            opacity: 0.65,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0A1428]/75" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1E40AF_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        <div className="relative max-w-5xl mx-auto text-center px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-blue-500/30 bg-white/5 mb-8 backdrop-blur-sm">
              <FaGlobe className="text-cyan-400" />
              <span className="text-sm uppercase tracking-widest text-white/70">
                Mumbai • San Francisco • Global
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Excellence
              </span>{" "}
              Since 2010
            </h1>
            <p className="text-2xl text-white/80 max-w-2xl mx-auto">
              We transform ambitious ideas into powerful, scalable software
              solutions that drive real business growth.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-8">Who We Are</h2>
          <p className="text-xl text-white/80 leading-relaxed">
            We are a full-stack digital engineering company based in Mumbai with
            a global footprint. Since 2010, we have been helping startups and
            enterprises build custom software, mobile apps, AI solutions, and
            digital platforms that deliver measurable results.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-black/30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/40 to-transparent border border-blue-500/40 rounded-3xl p-10 hover:border-blue-400/60 transition-all group"
          >
            <div className="text-5xl mb-6 text-blue-400">🎯</div>
            <h3 className="text-3xl font-bold mb-6 text-blue-400">
              Our Mission
            </h3>
            <p className="text-lg text-white/80">
              To deliver exceptional digital solutions that drive business
              growth, automate operations, and create meaningful user
              experiences while maintaining the highest standards of quality and
              integrity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-900/40 to-transparent border border-cyan-500/40 rounded-3xl p-10 hover:border-cyan-400/60 transition-all group"
          >
            <div className="text-5xl mb-6 text-cyan-400">🌍</div>
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Our Vision
            </h3>
            <p className="text-lg text-white/80">
              To become the most trusted technology partner globally, known for
              innovation, transparency, and delivering long-term value that
              helps businesses thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              From idea to deployment — we build solutions that scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden h-[420px] flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/90 via-[#0A1428]/70 to-transparent" />

                <div className="relative mt-auto p-8">
                  <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Why Companies Choose Us</h2>
            <p className="text-white/70 text-xl">
              Proven expertise. Transparent delivery. Lasting partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRocket />,
                title: "Lightning Fast Delivery",
                desc: "Agile methodology with bi-weekly releases",
              },
              {
                icon: <FaUsers />,
                title: "True Partnership",
                desc: "We become an extension of your team",
              },
              {
                icon: <FaShieldAlt />,
                title: "Enterprise Security",
                desc: "SOC2, ISO27001 compliant processes",
              },
              {
                icon: <FaLaptopCode />,
                title: "Modern Tech Stack",
                desc: "Latest frameworks & cloud-native solutions",
              },
              {
                icon: <FaChartLine />,
                title: "Measurable Results",
                desc: "Clear KPIs and transparent reporting",
              },
              {
                icon: <FaHandshake />,
                title: "Long-term Support",
                desc: "Post-launch maintenance & evolution",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-8 transition-all hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="text-5xl mb-6 text-cyan-400">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-bold text-cyan-400 mb-2">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-white/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-white/70 text-xl">
              Passionate experts dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-all"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-white/70 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-24 text-center bg-gradient-to-b from-transparent via-blue-950/30 to-transparent">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Let's discuss how we can help bring your vision to life with custom
            software solutions.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleStartConversation}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-12 py-5 rounded-2xl font-semibold text-lg hover:brightness-110 transition-all flex items-center gap-3 mx-auto"
          >
            Start a Conversation
            <span className="text-xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
