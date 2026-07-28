import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHeartbeat
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { retailList } from "../../data/softwareData";

const Healthcare = () => {
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
            backgroundImage: "url('/images/retail1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaHeartbeat /> Retail & eCommerce
              </div>

              <h1 className="text-2xl lg:text-4xl font-bold leading-[1.1] mb-8">
                Retail &{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  eCommerce Solutions
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                Empower your retail business with innovative digital solutions
                that improve sales, enhance customer experiences, streamline
                operations, and accelerate business growth across online and
                offline channels.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/retail2.jpg"
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
            <h2 className="text-4xl font-bold mb-4">RetailEcommerce</h2>
            <p className="text-xl text-white/70">
              One thing that makes sales teams more agile is implementation of
              Sales force automation, that’s always shown in terms of sales
              growth in trade markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailList.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-cyan-400/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-8 flex flex-col h-full transition-all duration-500"
              >
                <div className="text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-white/70 leading-relaxed flex-grow">
                  {solution.desc}
                </p>

                <button
                  onClick={() =>
                    navigate(`/industries/retail-ecommerce/${solution.slug}`)
                  }
                  className="mt-6 inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform RetailEcommerce?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Let’s build compassionate, efficient, and life-saving digital
            healthcare solutions together.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-base hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your RetailEcommerce Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
