import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaChartLine,
  FaRobot,
  FaEye,
  FaComments,
  FaTrophy,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const AIML = () => {
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
            backgroundImage: "url('/images/AIML1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-sm text-cyan-400 text-sm">
                <FaBrain className="text-xl" />
                <span className="uppercase tracking-widest font-medium">
                  {" "}
                  Artificial Intelligence & ML{" "}
                </span>
              </div>

              <h1 className="text-2xl lg:text-4xl font-bold leading-[1.1] tracking-tighter">
                Intelligence That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
                  Delivers Results
                </span>
              </h1>

              <p className="text-xl text-white/80 max-w-lg">
                We build enterprise-grade AI and Machine Learning solutions that
                learn, predict, automate, and drive measurable business growth.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/AIML2.jpg"
                alt="AI & Machine Learning"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10 w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0A1428]/90 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">⚡</div>
                  <div>
                    <p className="text-cyan-400 font-semibold">98% Accuracy</p>
                    <p className="text-sm text-white/70">
                      Average across deployments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "150+", label: "AI Projects Delivered" },
            { number: "40+", label: "Enterprise Clients" },
            { number: "95%", label: "Client Retention" },
            { number: "3.2x", label: "Avg ROI in Year 1" },
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

      {/* WHAT WE BUILD */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              AI & ML Solutions We Deliver
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              From strategy to deployment — end-to-end intelligent systems
              tailored to your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Predictive Analytics",
                desc: "Forecast trends, customer behavior, demand, and business outcomes with high accuracy.",
                icon: <FaChartLine className="text-3xl" />,
              },
              {
                title: "Computer Vision",
                desc: "Image recognition, object detection, quality inspection, and visual intelligence.",
                icon: <FaEye className="text-3xl" />,
              },
              {
                title: "Natural Language Processing",
                desc: "Chatbots, sentiment analysis, document intelligence, and voice systems.",
                icon: <FaComments className="text-3xl" />,
              },
              {
                title: "Recommendation Engines",
                desc: "Personalized experiences that dramatically boost engagement and revenue.",
                icon: <FaTrophy className="text-3xl" />,
              },
              {
                title: "Intelligent Automation",
                desc: "AI-powered RPA, workflow optimization, and autonomous decision systems.",
                icon: <FaRobot className="text-3xl" />,
              },
              {
                title: "Custom AI Models",
                desc: "Bespoke models trained on your proprietary data and domain knowledge.",
                icon: <FaBrain className="text-3xl" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-cyan-400/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400 flex-shrink-0 transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <span className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </span>
                </div>
                <p className="text-sm lg:text-sm text-white/70 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech-stack" className="py-20 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-3xl font-bold mb-4">
            Our AI/ML Technology Stack
          </h2>
          <p className="text-white/60 mb-12">
            Industry-leading tools and frameworks
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "LangChain",
              "Hugging Face",
              "OpenAI",
              "AWS SageMaker",
              "Google Vertex AI",
              "Kubernetes",
              "Docker",
              "MLflow",
              "FastAPI",
              "React Native",
              "Snowflake",
              "Databricks",
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

      {/* INDUSTRIES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Industries We Transform
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Healthcare",
                image: "/images/AIML3.jpg",
                desc: "Diagnostics, Patient Care & Drug Discovery",
              },
              {
                name: "Retail & E-commerce",
                image: "/images/AIML4.jpg",
                desc: "Personalization & Demand Forecasting",
              },
              {
                name: "Finance & Banking",
                image: "/images/AIML5.jpg",
                desc: "Fraud Detection & Risk Management",
              },
              {
                name: "Manufacturing",
                image: "/images/AIML6.jpg",
                desc: "Predictive Maintenance & Quality Control",
              },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden h-96 shadow-xl"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                  <p className="text-white/80 text-sm">{industry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaLightbulb className="text-3xl" />,
                title: "Business-First AI",
                desc: "Every solution is designed to solve real business problems and deliver measurable ROI.",
              },
              {
                icon: <FaShieldAlt className="text-3xl" />,
                title: "Ethical & Secure",
                desc: "Transparent, explainable, and compliant AI with enterprise-grade security.",
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: "End-to-End Expertise",
                desc: "From data strategy and model development to deployment and continuous optimization.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 transition group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl text-cyan-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">
            Ready to Add Intelligence to Your Business?
          </h2>
          <p className="text-lg text-white/90 mb-12">
            Let’s discuss how AI can create a real competitive advantage for
            you.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Schedule a Consultation
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AIML;
