import { useNavigate, Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = {
    facebook: "https://facebook.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    youtube: "https://youtube.com/@yourcompany",
  };

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
  };

  return (
    <footer className="bg-[#0A0A0F] text-white/80 border-t border-white/10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className="h-12 brightness-110"
              />
            </div>

            <p className="leading-7 text-white/70 max-w-md">
              We craft scalable software solutions, modern web & mobile
              applications, AI-powered systems, and enterprise platforms that
              help businesses innovate and grow.
            </p>

            <div className="flex gap-4 mt-10">
              {[
                { icon: <FaFacebookF />, link: socialLinks.facebook },
                { icon: <FaLinkedinIn />, link: socialLinks.linkedin },
                { icon: <FaInstagram />, link: socialLinks.instagram },
                { icon: <FaYoutube />, link: socialLinks.youtube },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { title: "Home", path: "/" },
                { title: "About", path: "/about" },
                { title: "Portfolio", path: "/portfolio" },
                { title: "Blogs", path: "/blogs" },
                { title: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="hover:text-cyan-400 flex items-center gap-2 transition-colors group"
                  >
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8 tracking-tight">
              Services
            </h3>
            <ul className="space-y-4 text-white/70">
              {[
                { title: "Web Development", path: "/services/web-development" },
                {
                  title: "Mobile App Development",
                  path: "/services/mobile-development",
                },
                { title: "UI / UX Design", path: "/services/ui-ux-design" },
                { title: "Cloud Solutions", path: "/services/cloud-solutions" },
                { title: "AI & Machine Learning", path: "/services/ai-ml" },
              ].map((service) => (
                <li
                  key={service.title}
                  onClick={() => handleServiceClick(service.path)}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8 tracking-tight">
              Get In Touch
            </h3>

            <div className="space-y-6 text-white/70">
              <div className="flex gap-4">
                <div className="mt-1 text-cyan-400">
                  <FaPhoneAlt />
                </div>
                <div>
                  <a
                    href="tel:+919876543210"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-cyan-400">
                  <FaEnvelope />
                </div>
                <div>
                  <a
                    href="mailto:info@softtech.com"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    info@softtech.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-cyan-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  Mumbai, Maharashtra,
                  <br />
                  India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-white/60">
            © {new Date().getFullYear()} SoftTech. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-white/60">
            <Link
              to="/privacy-policy"
              className="hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="hover:text-cyan-400 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/cookie-policy"
              className="hover:text-cyan-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          <p className="text-white/50 text-xs">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
