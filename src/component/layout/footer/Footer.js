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

  // Social Media Links
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
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="h-12 mb-6 brightness-110"
            />

            <p className="leading-7 text-white/70 max-w-md">
              We build scalable software solutions, web applications, mobile
              apps, cloud platforms, and AI-powered products for startups,
              enterprises, and global businesses.
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8 tracking-tight">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 flex items-center gap-2 transition-colors group"
                >
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 flex items-center gap-2 transition-colors group"
                >
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-cyan-400 flex items-center gap-2 transition-colors group"
                >
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-cyan-400 flex items-center gap-2 transition-colors group"
                >
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-cyan-400 flex items-center gap-2 transition-colors group"
                >
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Now Clickable */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8 tracking-tight">
              Services
            </h3>

            <ul className="space-y-4 text-white/70">
              <li
                onClick={() => handleServiceClick("/services/web-development")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Web Development
              </li>
              <li
                onClick={() =>
                  handleServiceClick("/services/mobile-development")
                }
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Mobile App Development
              </li>
              <li
                onClick={() => handleServiceClick("/services/ui-ux-design")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                UI / UX Design
              </li>
              <li
                onClick={() => handleServiceClick("/services/cloud-solutions")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Cloud Solutions
              </li>
              <li
                onClick={() => handleServiceClick("/services/ai-ml")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                AI & Machine Learning
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8 tracking-tight">
              Contact
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
                    href="mailto:info@company.com"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    info@company.com
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
      <div className="border-t border-white/10 bg-black/40">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
