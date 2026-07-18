import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What software development services do you provide?",
    answer:
      "We provide custom software development, web development, mobile app development, UI/UX design, cloud solutions, AI integration, DevOps, and ongoing support & maintenance.",
  },
  {
    id: 2,
    question: "Which technologies do you work with?",
    answer:
      "Our team specializes in React, Next.js, Node.js, NestJS, TypeScript, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, Flutter, React Native, and many more modern technologies.",
  },
  {
    id: 3,
    question: "How long does it take to build a software product?",
    answer:
      "The timeline depends on project complexity. Small to medium applications typically take 2–4 months, while large enterprise solutions may require 6–12 months.",
  },
  {
    id: 4,
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer comprehensive maintenance packages including monitoring, security updates, performance optimization, and new feature development.",
  },
  {
    id: 5,
    question: "Can you modernize our existing legacy application?",
    answer:
      "Absolutely. We specialize in modernizing legacy systems, improving performance, redesigning user interfaces, and migrating applications to the cloud.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(1);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-widest text-blue-600 font-semibold text-sm">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about our process,
            services, and working together.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-7xl mx-auto space-y-5">
          {faqData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 pr-8">
                  {item.question}
                </h3>

                <div className="text-blue-600 transition-transform duration-300">
                  {active === item.id ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              <AnimatePresence>
                {active === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-8 text-gray-600 leading-relaxed text-[17px]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            Still have questions?{" "}
            <button
              onClick={() => (window.location.href = "/contact")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Get in touch with us
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
