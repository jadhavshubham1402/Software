import React, { useState } from "react";

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
    alert(
      "Thank you! Your message has been received. We'll get back to you soon.",
    );
    // In real app, send to backend API
  };

  return (
    <div className="bg-[#0A0A0F] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6">
            Let's Build Something Great
          </h1>
          <p className="text-2xl text-white/70">
            Have a project in mind? We're here to help turn your vision into
            reality.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-10">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 focus:border-white/40 rounded-2xl px-6 py-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 focus:border-white/40 rounded-2xl px-6 py-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 focus:border-white/40 rounded-2xl px-6 py-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full bg-white/5 border border-white/10 focus:border-white/40 rounded-3xl px-6 py-5 outline-none resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 py-6 rounded-2xl font-semibold text-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white/60">Email</p>
                  <a
                    href="mailto:hello@lifeonplus.com"
                    className="text-xl hover:text-cyan-400 transition"
                  >
                    hello@lifeonplus.com
                  </a>
                </div>
                <div>
                  <p className="text-white/60">Phone</p>
                  <a
                    href="tel:+919988680000"
                    className="text-xl hover:text-cyan-400 transition"
                  >
                    +91 99868 00000
                  </a>
                </div>
                <div>
                  <p className="text-white/60">WhatsApp</p>
                  <a
                    href="https://wa.me/919988680000"
                    className="text-xl hover:text-cyan-400 transition"
                  >
                    +91 99868 00000
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Office Locations</h3>
              <div className="space-y-8 text-white/70">
                <div>
                  <p className="font-medium text-white">Mumbai (Head Office)</p>
                  <p>
                    # No.301, 3rd Floor, MasterMind 1, Royal Palms, Goregaon
                    East
                  </p>
                </div>
                <div>
                  <p className="font-medium text-white">Chennai</p>
                  <p>No. 15, Devraja Mudali Street, Park Town</p>
                </div>
                <div>
                  <p className="font-medium text-white">Bangalore</p>
                  <p>WeWork Cinnabar Hills, Embassy Golf Links</p>
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
