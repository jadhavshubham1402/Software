import { motion } from "framer-motion";
import {
  FaGlobe,
  FaHandshake,
  FaHeart,
  FaLightbulb
} from "react-icons/fa";

const AboutPage = () => {

  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/about-bg.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(#1E40AF_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        <div className="relative max-w-5xl mx-auto text-center px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              About Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Custom Digital Solutions & IT services competition is at every nook & corner in any industry & it becomes imperative to be competitive & innovative to stay ahead
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Decades of experience the team paxykop has converted tons of amazing ideas to realities 7 the wining momentum continues to bring more ideas to life. We inject creativity innovation & help you take your business to new heights. 
            One shop stop for all your IT Solutions. We smoothen your business journey by meticulously planning your company’s digital transformation, starting from choosing right technology to best in practise post deployment support.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
    <section className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
           Why Paxykop
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold mb-4">
          Great Solutions
          </h3>
        <p className="text-white/70">
          Great Solutions for enhanced revenue visibility of investors / partners
        </p>
        </div>

        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold mb-4">
          Innovative Healthcare Products
          </h3>
        <p className="text-white/70">
          Innovative Health Care IT products, Innovative Applications and Medical Devices for increased sales & Service Revenue and reduced churn.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold mb-4">
          Affordable Products & Services
          </h3>
        <p className="text-white/70">
          Unique and affordable products / services reaching all humans globally.
          </p>
        </div>

        </div>
        </div>
    </section>
    {/* WHAT WE DO */}
<section className="py-20">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-10">
      What We Do
    </h2>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
      <p className="text-lg text-white/80 leading-relaxed">
        Custom Digital Solutions & IT services competition is at every nook & corner in any industry & it becomes imperative to be competitive & innovative to stay ahead, our custom tech & IT solutions does just that & helps you boost your return on investment, identify & target new revenue streams.
      </p>
    </div>
  </div>
</section>
{/* WHY WORK WITH US */}
<section className="py-20 bg-black/30">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Why Work With Us
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">PROVEN</h3>
        <ul className="list-decimal pl-5 space-y-3 text-white/80">
          <li>Years of market survey & development</li>
          <li>Presence in many countries with Global partners</li>
          <li>Global Healthcare leaders</li>
        </ul>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">PROACTIVE</h3>
        <ul className="list-decimal pl-5 space-y-3 text-white/80">
          <li>Proactive opportunity management</li>
          <li>Tech citizens</li>
          <li>Digital world expertise</li>
        </ul>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">PROFESSIONAL</h3>
        <ul className="list-decimal pl-5 space-y-3 text-white/80">
          <li>Committed management</li>
          <li>Strong offices / affiliates across India & Asia</li>
          <li>Accountability</li>
          <li>Transparency</li>
          <li>Loyalty</li>
        </ul>
      </div>

    </div>
  </div>
</section>
{/* OUR CAPABILITIES */}
<section className="py-20 bg-black/30">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Our Capabilities
    </h2>

    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Research & Development</span>
        <span>60%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 mb-3">
        <div className="bg-cyan-400 h-3 rounded-full w-[60%]"></div>
      </div>
      <p className="text-white/70 text-sm">
        Our services & products are developed based on dedicated research and market trends.
      </p>
    </div>

    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Innovation & Transformation</span>
        <span>80%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 mb-3">
        <div className="bg-cyan-400 h-3 rounded-full w-[80%]"></div>
      </div>
      <p className="text-white/70 text-sm">
        We believe innovation makes the products more affordable & accessible to a much larger market.
      </p>
    </div>

    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Technology & Design</span>
        <span>70%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 mb-3">
        <div className="bg-cyan-400 h-3 rounded-full w-[70%]"></div>
      </div>
      <p className="text-white/70 text-sm">
        Our designs are driven by user experience & top notch technology makes the difference.
      </p>
    </div>

    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Customer Service & Support</span>
        <span>95%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 mb-3">
        <div className="bg-cyan-400 h-3 rounded-full w-[95%]"></div>
      </div>
      <p className="text-white/70 text-sm">
        We know our users & partners have made us proud & we try our best to offer assistance & support.
      </p>
    </div>

  </div>
</section>

    {/* OUR VALUES */}
<section className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-3">Our Values</h2>
      <p className="text-white/70">
        Our values define the way we work and build lasting relationships.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-cyan-400 text-3xl mb-5">
          <FaHeart />
        </div>
        <h3 className="text-xl font-semibold mb-3">User Centric</h3>
        <p className="text-white/70">
         We believe in end user satisfaction & our services are targeted towards designing & delivering solutions based on customer needs
         </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-cyan-400 text-3xl mb-5">
          <FaLightbulb />
        </div>
        <h3 className="text-xl font-semibold mb-3">Effectiveness</h3>
        <p className="text-white/70">
          We provide high return on investments (ROY) as we work with high efficiency
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-cyan-400 text-3xl mb-5">
          <FaGlobe />
        </div>
        <h3 className="text-xl font-semibold mb-3">Excellence</h3>
        <p className="text-white/70">
          Excellence is imbibed in our culture & is easily seen in what ever we design & develop
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-cyan-400 text-3xl mb-5">
          <FaHandshake />
        </div>
        <h3 className="text-xl font-semibold mb-3">Partnership</h3>
        <p className="text-white/70">
          We work with customers as partners & not as just another vendor. As partner we help our customers grow.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-cyan-400 text-3xl mb-5">
          <FaGlobe />
        </div>
        <h3 className="text-xl font-semibold mb-3">Growth</h3>
        <p className="text-white/70">
          We believe that company’s growth in depend as the individual growth, hence we emphasis proper opportunities & growth together.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-cyan-400 text-3xl mb-5">
          <FaHeart />
        </div>
        <h3 className="text-xl font-semibold mb-3">Care</h3>
        <p className="text-white/70">
          We look after all our employees with providing freedom with a proper work environment.
        </p>
      </div>

    </div>
  </div>

</section>
</div>
  );
};


export default AboutPage;
