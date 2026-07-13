import {
  FaCheckCircle,
  FaLaptopCode,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Experienced Developers",
    description:
      "Our skilled engineers build scalable and high-performance software using modern technologies.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Centric Approach",
    description:
      "We work closely with clients to understand business goals and deliver tailored solutions.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Delivery",
    description:
      "Agile development process ensures faster delivery without compromising quality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="relative">

            <img
              src="/images/about/why-choose-us.jpg"
              alt="Why Choose Us"
              className="rounded-3xl shadow-xl w-full"
            />

            {/* Experience Card */}

            <div className="absolute -bottom-8 left-8 bg-blue-600 text-white rounded-2xl px-8 py-6 shadow-xl">

              <h2 className="text-4xl font-bold">
                15+
              </h2>

              <p>Years Experience</p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="text-blue-600 uppercase tracking-widest font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Delivering Innovative Software Solutions That Drive Growth
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              We combine technical expertise, creative thinking, and business
              understanding to build software products that help organizations
              scale faster and achieve measurable results.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-8">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2 leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* Checklist */}

            <div className="grid md:grid-cols-2 gap-4 mt-10">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Agile Development
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Dedicated Team
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Transparent Communication
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                24/7 Support
              </div>

            </div>

            {/* Button */}

            <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;