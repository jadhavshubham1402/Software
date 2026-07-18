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
    <section className="relative overflow-hidden py-28 bg-slate-950">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-950"></div>

      {/* Decorative Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <FaStar className="text-yellow-400" />
              <span className="uppercase tracking-[3px] text-sm font-semibold text-blue-200">
                Trusted by Industry Leaders
              </span>
            </div>

            <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter">
              Ready to Transform
              <br />
              Your Business?
            </h2>

            <p className="text-xl text-blue-100 max-w-lg">
              We partner with ambitious companies to build exceptional digital
              products that drive real business growth using modern technology
              and strategic design.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              {[
                "Free Strategy Consultation",
                "Dedicated Expert Team",
                "Agile & Transparent Process",
                "24/7 Technical Support",
                "Scalable Architecture",
                "Post-Launch Maintenance",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-white group"
                >
                  <div className="mt-1">
                    <FaCheckCircle className="text-green-400 text-xl group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 pt-6 text-sm text-blue-200">
              <div>✓ ISO Certified</div>
              <div>✓ 100% Client Retention</div>
              <div>✓ NDA Protected</div>
            </div>
          </div>

          {/* Right Side - Enhanced Card */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl shadow-black/50 relative">
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">
              LIMITED TIME OFFER
            </div>

            <h3 className="text-4xl font-bold text-gray-900 mt-6">
              Let's Build Something Great
            </h3>

            <p className="text-gray-600 mt-4 text-lg">
              Share your vision with us. Our experts will get back to you within
              4 hours with a tailored approach and timeline.
            </p>

            <div className="mt-10 space-y-5">
              {/* Primary CTA */}
              <button
                onClick={handleGetConsultation}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl py-5 px-8 flex items-center justify-center gap-3 text-lg font-semibold transition-all active:scale-[0.985] shadow-lg shadow-blue-500/30"
              >
                Get Your Free Consultation
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={handleViewPortfolio}
                className="w-full border-2 border-gray-800 hover:border-blue-600 text-gray-800 hover:text-blue-600 rounded-2xl py-5 px-8 flex items-center justify-center gap-3 text-lg font-semibold transition-all active:scale-[0.985]"
              >
                Explore Our Portfolio
              </button>

              {/* Phone CTA */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  onClick={handleCall}
                  className="w-full flex items-center gap-5 p-4 hover:bg-gray-50 rounded-2xl group transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <FaPhoneAlt className="text-blue-600 text-3xl" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500">
                      Speak with our experts now
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                      +91 98765 43210
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-8">
              No obligation • Confidential consultation
            </p>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "150+", label: "Happy Clients" },
            { number: "98%", label: "Client Retention Rate" },
            { number: "15+", label: "Years of Excellence" },
          ].map((stat, idx) => (
            <div key={idx} className="group">
              <h3 className="text-6xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {stat.number}
              </h3>
              <p className="text-blue-200 mt-3 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
