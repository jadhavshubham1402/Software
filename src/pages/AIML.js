import React from "react";
import { motion } from "framer-motion";

const AIML = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                AI & Machine Learning
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Intelligence That Works
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Transform your business with intelligent systems that learn,
                predict, and automate.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/ai-ml-hero.png"
                alt="AI & Machine Learning"
                className="rounded-3xl shadow-2xl max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            AI & ML Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Predictive Analytics",
                desc: "Forecast trends, customer behavior, and business outcomes",
                icon: "📈",
              },
              {
                title: "Computer Vision",
                desc: "Image recognition, object detection, and visual intelligence",
                icon: "👁️",
              },
              {
                title: "Natural Language Processing",
                desc: "Chatbots, sentiment analysis, and intelligent document processing",
                icon: "💬",
              },
              {
                title: "Recommendation Engines",
                desc: "Personalized product and content recommendations",
                icon: "🎯",
              },
              {
                title: "Automation & RPA",
                desc: "Intelligent process automation with AI",
                icon: "🤖",
              },
              {
                title: "Custom AI Models",
                desc: "Bespoke machine learning models for your specific use case",
                icon: "🧠",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-violet-400 transition">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
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
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full text-lg font-medium transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Businesses Choose Our AI Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Actionable Intelligence",
                desc: "Turn data into real business decisions",
              },
              {
                title: "Custom AI Models",
                desc: "Built specifically for your industry and use case",
              },
              {
                title: "Ethical & Transparent AI",
                desc: "Responsible AI with full explainability",
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
      <section className="py-28 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Add Intelligence to Your Business?
          </h2>
          <p className="text-xl mb-10">
            Let’s build AI solutions that give you a competitive edge.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Your AI Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIML;
