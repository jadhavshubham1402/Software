import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    designation: "CEO, HealthTech Inc.",
    image: "/images/testimonials/client1.jpg",
    review:
      "The team delivered our healthcare platform on time with exceptional quality. Their communication and technical expertise exceeded our expectations.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    designation: "Founder, FinPay",
    image: "/images/testimonials/client2.jpg",
    review:
      "Working with them was a fantastic experience. They understood our business needs and built a scalable fintech solution that continues to grow.",
  },
  {
    id: 3,
    name: "David Miller",
    designation: "CTO, ShopEase",
    image: "/images/testimonials/client3.jpg",
    review:
      "From UI/UX to deployment, everything was handled professionally. We highly recommend them for enterprise software development.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            We build long-term partnerships by delivering high-quality software
            solutions and exceptional customer experiences.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-slate-50 rounded-3xl p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <FaQuoteLeft className="text-5xl text-blue-100 absolute top-6 right-6" />

              <div className="flex text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

              <p className="text-gray-600 leading-8 mb-8">"{item.review}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>

                  <p className="text-gray-500 text-sm">{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
