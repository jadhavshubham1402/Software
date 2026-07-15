import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What software development services do you provide?",
    answer:
      "We provide custom software development, web development, mobile app development, UI/UX design, cloud solutions, AI integration, DevOps, and ongoing support.",
  },
  {
    id: 2,
    question: "Which technologies do you work with?",
    answer:
      "Our team specializes in React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, Flutter, React Native, and modern cloud technologies.",
  },
  {
    id: 3,
    question: "How long does it take to build a software product?",
    answer:
      "The timeline depends on project complexity. Small applications typically take 1–3 months, while enterprise platforms may require 4–12 months.",
  },
  {
    id: 4,
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We provide maintenance, monitoring, performance optimization, security updates, and feature enhancements after deployment.",
  },
  {
    id: 5,
    question: "Can you modernize our existing application?",
    answer:
      "Absolutely. We help businesses migrate legacy systems, redesign user interfaces, improve performance, and move applications to the cloud.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(1);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            FAQs
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Find answers to the most common questions about our services,
            technologies, and development process.
          </p>

        </div>

        {/* Accordion */}

        <div className="space-y-5">

          {faqData.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >

              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-lg font-semibold">
                  {item.question}
                </h3>

                {active === item.id ? (
                  <FaMinus className="text-blue-600" />
                ) : (
                  <FaPlus className="text-blue-600" />
                )}

              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  active === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-8">
                  {item.answer}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;