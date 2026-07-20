import React from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { solutionDetails } from "../data/softwareData";

const SolutionDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const solution = solutionDetails.find((item) => item.slug === slug);

  if (!solution) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-5">
                Software Development
              </span>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {solution.hero.title}
              </h1>

              <p className="text-gray-300 mt-6 text-lg leading-8">
                {solution.hero.description}
              </p>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
                >
                  {solution.hero.primaryButton}
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-lg font-semibold"
                >
                  {solution.hero.secondaryButton}
                </button>
              </div>
            </div>

            <div>
              <img
                src={solution.hero.image}
                alt={solution.hero.title}
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-6">{solution.about.title}</h2>

          <p className="text-gray-600 text-lg leading-8">
            {solution.about.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">{solution.features.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.features.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>

                <p className="text-gray-600 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">{solution.industries.title}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {solution.industries.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border shadow-sm p-6 text-center hover:shadow-lg transition"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-14 h-14 mx-auto mb-4 object-contain"
                />

                <h5 className="font-semibold">{item.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">{solution.process.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {solution.process.steps.map((step) => (
              <div
                key={step.step}
                className="bg-slate-800 rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                  {step.step}
                </div>

                <h5 className="font-semibold mb-3">{step.title}</h5>

                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      {solution.benefits && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-4xl font-bold mb-10">
              {solution.benefits.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {solution.benefits.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-50 p-5 rounded-lg"
                >
                  <span className="text-green-600 text-2xl mr-4">✓</span>

                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      {solution.technologies && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-4xl font-bold mb-10">
              {solution.technologies.title}
            </h2>

            <div className="flex flex-wrap gap-4">
              {solution.technologies.items.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">
            {solution.faq.title}
          </h2>

          <div className="space-y-5">
            {solution.faq.items.map((faq, index) => (
              <details key={index} className="border rounded-xl p-6 group">
                <summary className="cursor-pointer font-semibold text-lg">
                  {faq.question}
                </summary>

                <p className="mt-4 text-gray-600 leading-7">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {solution.cta && (
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-5xl mx-auto text-center px-5">
            <h2 className="text-4xl font-bold">{solution.cta.title}</h2>

            <p className="mt-5 text-lg">{solution.cta.description}</p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
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
