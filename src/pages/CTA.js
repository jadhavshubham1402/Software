import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const CTA = () => {
  const navigate = useNavigate();

  const handleGetConsultation = () => {
    navigate("/contact");
  };

  const handleViewPortfolio = () => {
    navigate("/portfolio");
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <section className="relative overflow-hidden py-16 bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-950"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm">
              <FaStar className="text-yellow-400" />
              <span className="uppercase tracking-widest font-semibold text-blue-200">
                Trusted by Industry Leaders
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform
              <br />
              Your Business?
            </h2>

            <p className="text-blue-100 text-[17px]">
              We build exceptional digital products that drive real growth.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {[
                "Free Strategy Consultation",
                "Dedicated Expert Team",
                "Agile Process",
                "24/7 Support",
                "Scalable Architecture",
                "Post-Launch Maintenance",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/50">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-5 py-1.5 rounded-full inline-block mb-6">
              LIMITED TIME OFFER
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              Let's Build Something Great
            </h3>

            <p className="text-gray-600 mt-3 text-[15.5px]">
              Get a free consultation. Our team will reply within 4 hours.
            </p>

            <div className="mt-8 space-y-4">
              {/* Buttons in One Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={handleGetConsultation}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl py-5 px-8 flex items-center justify-center gap-3 font-semibold text-base transition-all"
                >
                  Get Free Consultation
                  <FaArrowRight />
                </button>

                <button
                  onClick={handleViewPortfolio}
                  className="border border-gray-800 hover:border-blue-600 text-gray-800 hover:text-blue-600 rounded-2xl py-5 px-8 flex items-center justify-center gap-3 font-semibold text-base transition-all"
                >
                  Explore Portfolio
                </button>
              </div>

              {/* Phone CTA */}
              <button
                onClick={handleCall}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl group transition-all mt-6"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200">
                  <FaPhoneAlt className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call us directly</p>
                  <p className="font-semibold text-gray-900">+91 98765 43210</p>
                </div>
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-8">
              No obligation • Confidential consultation
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Projects" },
            { number: "150+", label: "Clients" },
            { number: "98%", label: "Retention" },
            { number: "15+", label: "Years" },
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-white">{stat.number}</h3>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
