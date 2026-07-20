import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { solutionDetails } from "../data/softwareData"; // Adjust path as needed

const SolutionDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const solution = solutionDetails.find((item) => item.slug === slug);

  if (!solution) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Solution Not Found</h1>
          <button
            onClick={() => navigate("/solutions")}
            className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
          >
            ← Back to Solutions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <button
          onClick={() => navigate("/solutions")}
          className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-medium transition"
        >
          <FaArrowLeft />
          Back to All Solutions
        </button>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {solution.hero.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {solution.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg transition"
              >
                {solution.hero.primaryButton}
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition"
              >
                {solution.hero.secondaryButton}
              </button>
            </div>
          </div>

          <div>
            <img
              src={solution.hero.image}
              alt={solution.hero.title}
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">{solution.about.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {solution.about.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            {solution.features.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.features.items.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-xl mb-4">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            {solution.industries.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {solution.industries.items.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-blue-200 transition"
              >
                <img
                  src={industry.icon}
                  alt={industry.name}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <p className="font-medium text-gray-800">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            {solution.process.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {solution.process.steps.map((step) => (
              <div
                key={step.step}
                className="bg-slate-800 rounded-2xl p-8 text-center hover:bg-slate-700 transition"
              >
                <div className="text-4xl font-bold text-blue-400 mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold mb-3 text-lg">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {solution.cta && (
        <section className="bg-blue-600 text-white py-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">{solution.cta.title}</h2>
            <p className="text-xl mb-10">{solution.cta.description}</p>

            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 font-semibold px-10 py-5 rounded-2xl text-lg hover:bg-gray-100 transition"
            >
              {solution.cta.button}
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default SolutionDetails;
