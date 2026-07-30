import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import paxykopLogo from "../../../assets/paxykop-logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = {
    facebook: "https://www.facebook.com/paxykop-116236794396439",
    instagram: "https://www.instagram.com/paxykopone/",
    twitter: "https://twitter.com/paxykopone/",
    linkedin: "#",
  };

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
  };

  return (
    <footer className="bg-[#0A0A0F] text-white/80 border-t border-white/10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={paxykopLogo}
                alt="Company Logo"
                className="h-20 brightness-110"
              />
            </div>

            <p className="leading-7 text-white/70 max-w-md">
              We craft scalable software solutions, modern web & mobile
              applications, AI-powered systems, and enterprise platforms that
              help businesses innovate and grow.
            </p>

            <div className="flex gap-4 mt-6">
              {[
                { icon: <FaFacebookF />, link: socialLinks.facebook },
                { icon: <FaInstagram />, link: socialLinks.instagram },
                { icon: <FaTwitter />, link: socialLinks.twitter },
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
                <FaPhoneAlt className="mt-1 text-cyan-400" />
                <a href="tel:+6589182836">+65 89182836</a>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 text-cyan-400" />
                <a href="mailto:info@paxykop.com">info@paxykop.com</a>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-cyan-400" />
                <div>
                  L-39, MBFC, 10 Marina Blvd,
                  <br />
                  Singapore - 018 983
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar - Copyright + Legal Links */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Paxykop. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/terms" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies"
              className="hover:text-cyan-400 transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              to="/refund"
              className="hover:text-cyan-400 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
