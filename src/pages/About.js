import { motion } from "framer-motion";
import {
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaUsers
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/about-bg.jpg')",
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(#1E40AF_1px,transparent_1px)] bg-[length:48px_48px] opacity-30" />

        <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">
              About Paxykop
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building Digital Solutions
              <br />
              That Drive Growth
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              We help businesses stay competitive through custom technology,
              thoughtful innovation, and reliable IT services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-white/75 leading-relaxed">
            With decades of experience, the Paxykop team has turned countless
            ideas into real, working products. We combine creativity and
            technical excellence to help you take your business to the next
            level.
          </p>
          <p className="text-lg text-white/75 leading-relaxed mt-5">
            We are your one-stop partner for digital transformation — from
            selecting the right technology to delivering seamless post-launch
            support.
          </p>
        </div>
      </section>

      {/* WHY PAXYKOP */}
      <section className="py-24 bg-black/25">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Why Paxykop
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Practical solutions designed to improve revenue, reduce churn, and
              reach more people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Great Solutions",
                desc: "Solutions that improve revenue visibility for investors and partners.",
              },
              {
                title: "Healthcare Innovation",
                desc: "Innovative healthcare IT products, applications, and medical devices that drive sales and reduce churn.",
              },
              {
                title: "Affordable & Accessible",
                desc: "Unique, cost-effective products and services designed to reach people globally.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            What We Do
          </h2>
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-10 md:p-12">
            <p className="text-lg text-white/75 leading-relaxed">
              Competition in digital and IT services is intense. Staying ahead
              requires continuous innovation. Our custom technology solutions
              help you increase ROI, unlock new revenue streams, and maintain a
              competitive edge.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-24 bg-black/25">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Why Work With Us
            </h2>
            <p className="text-white/60">Proven. Proactive. Professional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Proven",
                items: [
                  "Years of market research & development",
                  "Presence across multiple countries",
                  "Trusted by global healthcare leaders",
                ],
              },
              {
                title: "Proactive",
                items: [
                  "Opportunity-driven approach",
                  "Deep digital expertise",
                  "Forward-looking technology mindset",
                ],
              },
              {
                title: "Professional",
                items: [
                  "Committed leadership",
                  "Strong presence across India & Asia",
                  "Accountability, transparency & loyalty",
                ],
              },
            ].map((col, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-6 text-cyan-400 tracking-wide">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-white/75"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      {/* OUR CAPABILITIES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Our Capabilities
            </h2>
            <p className="text-white/60 max-w-lg mx-auto">
              Areas where we consistently deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "Research & Development",
                value: 60,
                desc: "Products and services built on dedicated research and current market trends.",
              },
              {
                label: "Innovation & Transformation",
                value: 80,
                desc: "We make products more affordable and accessible through continuous innovation.",
              },
              {
                label: "Technology & Design",
                value: 70,
                desc: "User-centered design paired with modern technology for better experiences.",
              },
              {
                label: "Customer Service & Support",
                value: 95,
                desc: "We treat our users and partners as long-term relationships, not transactions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-8 overflow-hidden hover:bg-white/[0.07] transition-all duration-300"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400/80 rounded-l-2xl" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-3xl md:text-4xl font-bold text-cyan-400 leading-none">
                      {item.value}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-black/25">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Our Values
            </h2>
            <p className="text-white/60 max-w-lg mx-auto">
              These principles guide how we work and how we build lasting
              relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaHeart />,
                title: "User Centric",
                desc: "Everything we design starts with real user needs and ends with genuine satisfaction.",
              },
              {
                icon: <FaLightbulb />,
                title: "Effectiveness",
                desc: "We focus on high efficiency so our clients see strong returns on their investment.",
              },
              {
                icon: <FaRocket />,
                title: "Excellence",
                desc: "Quality is built into our culture — visible in every product and every interaction.",
              },
              {
                icon: <FaHandshake />,
                title: "Partnership",
                desc: "We work as true partners, not just vendors. Your growth is our shared goal.",
              },
              {
                icon: <FaUsers />,
                title: "Growth",
                desc: "We believe company growth and individual growth go hand in hand.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Care",
                desc: "We create a supportive environment that gives our people freedom and purpose.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-colors duration-300"
              >
                <div className="text-cyan-400 text-2xl mb-5">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
