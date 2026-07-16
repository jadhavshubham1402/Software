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
                <FaBrain /> Artificial Intelligence
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                AI & Machine Learning
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Intelligence That Works
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Transform your business with intelligent systems that learn,
                predict, automate, and deliver measurable results.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="https://picsum.photos/id/1074/600/500"
                alt="AI & Machine Learning"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            AI & ML Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Predictive Analytics",
                desc: "Forecast trends, customer behavior, demand, and business outcomes with high accuracy.",
                icon: <FaChartLine className="text-5xl" />,
              },
              {
                title: "Computer Vision",
                desc: "Image recognition, object detection, quality inspection, and visual intelligence systems.",
                icon: <FaEye className="text-5xl" />,
              },
              {
                title: "Natural Language Processing",
                desc: "Chatbots, sentiment analysis, intelligent document processing, and voice assistants.",
                icon: <FaComments className="text-5xl" />,
              },
              {
                title: "Recommendation Engines",
                desc: "Personalized product, content, and service recommendations that boost engagement.",
                icon: <FaTrophy className="text-5xl" />,
              },
              {
                title: "Intelligent Automation",
                desc: "RPA with AI, workflow automation, and smart decision-making systems.",
                icon: <FaRobot className="text-5xl" />,
              },
              {
                title: "Custom AI Models",
                desc: "Bespoke machine learning models tailored to your industry and specific use cases.",
                icon: <FaBrain className="text-5xl" />,
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
          <h2 className="text-4xl font-bold mb-12">Our AI/ML Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "LangChain",
              "Hugging Face",
              "OpenAI",
              "AWS SageMaker",
              "Kubernetes",
              "Docker",
              "MLflow",
              "FastAPI",
              "React Native",
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

      {/* INDUSTRIES WE SERVE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Industries We Transform with AI
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Healthcare",
                image: "https://picsum.photos/id/107/600/400",
                desc: "Diagnostics & Patient Care",
              },
              {
                name: "Retail & E-commerce",
                image: "https://picsum.photos/id/201/600/400",
                desc: "Personalization & Demand Forecasting",
              },
              {
                name: "Finance",
                image: "https://picsum.photos/id/251/600/400",
                desc: "Fraud Detection & Risk Analysis",
              },
              {
                name: "Manufacturing",
                image: "https://picsum.photos/id/1077/600/400",
                desc: "Predictive Maintenance & Quality Control",
              },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden h-80"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-3xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-white/70">{industry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Businesses Trust Our AI Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Actionable Intelligence",
                desc: "Turn raw data into clear, actionable business insights and decisions.",
              },
              {
                title: "Custom-Built Models",
                desc: "AI solutions designed specifically for your industry, data, and goals.",
              },
              {
                title: "Ethical & Transparent",
                desc: "Responsible AI development with full explainability and compliance.",
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
                  {i === 0 ? "📊" : i === 1 ? "🛠️" : "⚖️"}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Add Intelligence to Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s build AI solutions that give you a real competitive advantage.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Start Your AI Project
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AIML;
