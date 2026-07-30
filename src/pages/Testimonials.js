import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    company: "TechNova Solutions",
    role: "CEO",
    review:
      "The team delivered our enterprise software on time with exceptional quality. Their technical expertise and communication exceeded our expectations.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    company: "HealthCare Plus",
    role: "Director",
    review:
      "Professional, responsive, and highly skilled. They transformed our healthcare platform into a modern, scalable solution.",
  },
  {
    id: 3,
    name: "Michael Brown",
    company: "RetailMart",
    role: "Founder",
    review:
      "Outstanding experience from design to deployment. The UI is modern, and the backend is incredibly fast and reliable.",
  },
  {
    id: 4,
    name: "David Wilson",
    company: "EduSmart",
    role: "Managing Director",
    review:
      "Their development process was transparent, and they delivered exactly what we envisioned. Highly recommended!",
  },
  {
    id: 5,
    name: "Emma Taylor",
    company: "FinEdge",
    role: "Operations Head",
    review:
      "Excellent support and innovative solutions. Our business productivity has significantly improved after implementation.",
  },
  {
    id: 6,
    name: "James Carter",
    company: "LogiMove",
    role: "CTO",
    review:
      "Highly experienced team with deep technical knowledge. We look forward to working together on future projects.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold mt-3">What Our Clients Say</h2>

          <p className="text-slate-400 mt-5">
            We build long-term relationships through innovative software
            solutions, transparent communication, and exceptional support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative"
            >
              <FaQuoteLeft className="text-2xl text-blue-500 mb-5 opacity-30" />

              <p className="text-slate-300 leading-7 mb-4 text-sm">"{item.review}"</p>

              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <h4 className="font-semibold text-base">{item.name}</h4>

                  <p className="text-slate-400 text-xs">{item.role}</p>

                  <p className="text-blue-400 text-sm font-medium">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
