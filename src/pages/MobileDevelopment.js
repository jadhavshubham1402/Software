import React from 'react';
import { motion } from 'framer-motion';

const MobileAppDevelopment = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Mobile Apps That<br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Users Love & Businesses Need
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Beautiful, high-performance mobile applications for iOS and Android that drive engagement, retention, and revenue.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img 
                src="/images/mobile-app-hero.png" 
                alt="Mobile App Development" 
                className="rounded-3xl shadow-2xl max-w-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Mobile Development Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Native iOS & Android Apps", 
                desc: "High-performance apps built with Swift & Kotlin", 
                icon: "📱" 
              },
              { 
                title: "Cross-Platform Apps", 
                desc: "Flutter & React Native — faster development, consistent experience", 
                icon: "🔄" 
              },
              { 
                title: "Enterprise Mobile Solutions", 
                desc: "Secure, scalable apps for large organizations", 
                icon: "🏢" 
              },
              { 
                title: "Progressive Web Apps", 
                desc: "App-like experience accessible via browser", 
                icon: "🌐" 
              },
              { 
                title: "App Redesign & Modernization", 
                desc: "Upgrade legacy apps with modern UX/UI", 
                icon: "✨" 
              },
              { 
                title: "MVP Development", 
                desc: "Fast, cost-effective Minimum Viable Products", 
                icon: "🚀" 
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 rounded-3xl p-10 transition-all"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="text-white/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Mobile Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Flutter", "React Native", "Swift", "Kotlin", 
              "Firebase", "AWS Amplify", "GraphQL", "Redux", 
              "Fastlane", "App Center"
            ].map((tech, i) => (
              <span key={i} className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full text-lg font-medium transition">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us for Mobile Development?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Native Performance", desc: "Smooth 60fps animations and fast load times" },
              { title: "App Store Ready", desc: "Full compliance with Apple & Google guidelines" },
              { title: "Ongoing Support", desc: "Post-launch maintenance and feature updates" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Launch Your Mobile App?</h2>
          <p className="text-xl mb-10">Let’s turn your idea into a successful mobile product.</p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Discuss Your App Idea →
          </button>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;