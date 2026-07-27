import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaHeartbeat,
  FaUserMd,
  FaCalendarAlt,
  FaBrain,
  FaChartBar,
  FaIdCard,
  FaArrowRight,
} from "react-icons/fa";

const HealthTech = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleReadMore = (page) => {
  navigate(page);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/healthcare2.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaHeartbeat /> Health Tech
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                World's Most Advanced Medical and {" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                   Digital Health Techologies...
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                World's Most Advanced Medical & Digital Health Techologies..  
                streamline operations, and empower medical professionals.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/healthcare1.jpg"
                alt="Healthcare Technology"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR HEALTHCARE SOLUTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Health Tech Solutions
            </h2>
            <p className="text-xl text-white/70">
              Transforming healthTeck delivery through technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HMS",
                paragraph: "We help providers keep close track of patient surveys and generate meaningful statistics which can help the management understand trends and make decisions that facilitates higher productivity and enhanced operation management.",
                icon: <FaHeartbeat className="text-5xl" />,
                route: "/healthtech/hms",
              },
              {
                title: "Mobile Health care",
                paragraph: "Data driven insights helps you understand patients better and our information rich dashboards achieve that for you. Its intuitive, rich with quality metrics and offers clear insight on your response to patients.",
                icon: <FaUserMd className="text-5xl" />,
                route: "/healthtech/mobile-healthcare",
              },
              {
                title: "Smart hospitals",
                paragraph: "Let your workforce deliver your expectations by sharing critical information that our dashboards generate for you. When everyone is clear of what to deliver, better the ROI.",
                icon: <FaCalendarAlt className="text-5xl" />,
                route: "/healthtech/smart-hospitals",
              },
              {
                title: "Patients Engagement",
                paragraph: "Business intelligence solutions helps providers make the best use of massive amount of data. Our dashboards empower the management to get both small and big metrics such as the bed occupancy levels and help view the big picture for improvised decision making.",
                icon: <FaBrain className="text-5xl" />,
                route: "/healthtech/patients-engagement",
              },
              {
                title: "Wearables",
                paragraph: "Our dashboards help optimize the art of resource allocation and deliver better standards of quality care. It comes inclusive of KPIs and ways to enhance profitability and patient engagement.",
                icon: <FaChartBar className="text-5xl" />,
                route: "/healthtech/wearables",
              },
              {
                title: "Dashboard",
                paragraph: "Our patient health dashboard offers clear metrics on patients health individually and enables the hospital to plan and provide more custom treatments which again has direct impact on patients over all treatment experience at the hospital.",
                icon: <FaIdCard className="text-5xl" />,
                route: "/healthtech/dashboard",
              },
              {
                title: "Internet of Things",
                paragraph: "It’s the employees or workers performance that drives the quality service to patients in any hospital or medical establishment. With productivity tracker dashboard one can have a systematic view of data from various other sources which becomes vital to measure workforce performance against the set targets. This helps identify areas of improvements and also eliminate redundant activities.",
                icon: <FaChartBar className="text-5xl" />,
                route: "/healthtech/internet-of-things",
              }
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
                <p className="text-white/70 leading-relaxed">{solution.paragraph}</p>
                <button
                    onClick={() => handleReadMore(solution.route)}
                    className="mt-6 text-cyan-400 font-semibold hover:text-cyan-300 flex items-center gap-2"
                >
                    Read More <FaArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Transform Healthcare with Digital Innovation
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s build compassionate, efficient, and life-saving digital
            healthcare solutions together.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your HealthTech Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default HealthTech;
