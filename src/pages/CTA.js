import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

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
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900"></div>

      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <span className="uppercase tracking-widest text-blue-200 font-semibold">
              Let's Build Together
            </span>

            <h2 className="text-5xl font-bold text-white mt-5 leading-tight">
              Ready to Transform
              <br />
              Your Business?
            </h2>

            <p className="text-blue-100 mt-8 leading-8 text-lg">
              From custom software and AI solutions to enterprise applications,
              our experts help businesses build secure, scalable, and
              future-ready digital products.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              <div className="flex items-center gap-3 text-white">
                <FaCheckCircle className="text-green-400" />
                Free Consultation
              </div>
              <div className="flex items-center gap-3 text-white">
                <FaCheckCircle className="text-green-400" />
                Dedicated Team
              </div>
              <div className="flex items-center gap-3 text-white">
                <FaCheckCircle className="text-green-400" />
                Agile Development
              </div>
              <div className="flex items-center gap-3 text-white">
                <FaCheckCircle className="text-green-400" />
                24/7 Support
              </div>
            </div>
          </div>

          {/* Right Side - Form Card */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900">
              Start Your Project Today
            </h3>

            <p className="text-gray-600 mt-5 leading-7">
              Tell us about your idea and we'll help you choose the best
              technology and development approach.
            </p>

            <div className="flex flex-col gap-5 mt-10">
              {/* Primary Button */}
              <button
                onClick={handleGetConsultation}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 px-6 flex justify-center items-center gap-3 transition-all active:scale-95 font-semibold"
              >
                Get Free Consultation
                <FaArrowRight />
              </button>

              {/* Secondary Button */}
              <button
                onClick={handleViewPortfolio}
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl py-4 px-6 flex justify-center items-center gap-3 transition-all active:scale-95"
              >
                View Our Portfolio
              </button>

              {/* Phone Number */}
              <div className="border-t pt-6 mt-2">
                <button
                  onClick={handleCall}
                  className="flex items-center gap-4 hover:scale-105 active:scale-95 transition-all w-full text-left group"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition">
                    <FaPhoneAlt className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us anytime</p>
                    <h4 className="text-xl font-semibold text-gray-900">
                      +91 98765 43210
                    </h4>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">500+</h3>
            <p className="text-blue-200 mt-2">Projects Delivered</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">150+</h3>
            <p className="text-blue-200 mt-2">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">15+</h3>
            <p className="text-blue-200 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">24/7</h3>
            <p className="text-blue-200 mt-2">Technical Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;