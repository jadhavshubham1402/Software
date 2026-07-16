import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received. We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#0A1428] text-white min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://picsum.photos/id/1077/1920/1080')" }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl font-bold mb-6">
            Let's Build Something <span className="text-cyan-400">Great</span>
          </h1>
          <p className="text-2xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind? We're here to help turn your vision into reality.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14">
              <h2 className="text-3xl font-semibold mb-10">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-3xl px-6 py-5 outline-none resize-y transition"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:brightness-110 py-6 rounded-2xl font-semibold text-lg transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-12 pt-6">
            <div>
              <h3 className="text-3xl font-semibold mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="mt-1 text-cyan-400">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email Us</p>
                    <a href="mailto:hello@lifeonplus.com" className="text-xl hover:text-cyan-400 transition">
                      hello@lifeonplus.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="mt-1 text-cyan-400">
                    <FaPhoneAlt size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call Us</p>
                    <a href="tel:+919988680000" className="text-xl hover:text-cyan-400 transition">
                      +91 99868 00000
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="mt-1 text-cyan-400">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">WhatsApp</p>
                    <a href="https://wa.me/919988680000" className="text-xl hover:text-cyan-400 transition">
                      +91 99868 00000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-3xl font-semibold mb-8">Our Offices</h3>
              <div className="space-y-10">
                <div className="flex gap-5">
                  <div className="mt-1 text-cyan-400">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Mumbai (Head Office)</p>
                    <p className="text-white/70 text-[15px]">
                      #301, 3rd Floor, MasterMind 1,<br />
                      Royal Palms, Goregaon East, Mumbai
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="mt-1 text-cyan-400">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Chennai</p>
                    <p className="text-white/70 text-[15px]">
                      No. 15, Devraja Mudali Street,<br />
                      Park Town, Chennai
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="mt-1 text-cyan-400">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Bangalore</p>
                    <p className="text-white/70 text-[15px]">
                      WeWork Cinnabar Hills,<br />
                      Embassy Golf Links, Bangalore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;