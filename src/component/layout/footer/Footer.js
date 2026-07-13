import { Link } from "react-router-dom";
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
  return (
    <footer className="bg-slate-950 text-gray-300">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company */}
          <div className="lg:col-span-2">

            <img
              src="/images/logo-white.png"
              alt="Company Logo"
              className="h-12 mb-6"
            />

            <p className="leading-7 text-gray-400">
              We build scalable software solutions, web applications,
              mobile apps, cloud platforms, and AI-powered products for
              startups, enterprises, and global businesses.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 duration-300"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/" className="hover:text-blue-500 flex items-center gap-2">
                  <FaArrowRight className="text-xs" />
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-500 flex items-center gap-2">
                  <FaArrowRight className="text-xs" />
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-blue-500 flex items-center gap-2">
                  <FaArrowRight className="text-xs" />
                  Services
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="hover:text-blue-500 flex items-center gap-2">
                  <FaArrowRight className="text-xs" />
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/blogs" className="hover:text-blue-500 flex items-center gap-2">
                  <FaArrowRight className="text-xs" />
                  Blogs
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-500 flex items-center gap-2">
                  <FaArrowRight className="text-xs" />
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4">

              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI / UX Design</li>
              <li>Cloud Solutions</li>
              <li>AI & Machine Learning</li>
              <li>Digital Transformation</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <FaPhoneAlt className="mt-1 text-blue-500" />

                <span>+91 98765 43210</span>

              </div>

              <div className="flex gap-3">

                <FaEnvelope className="mt-1 text-blue-500" />

                <span>info@company.com</span>

              </div>

              <div className="flex gap-3">

                <FaMapMarkerAlt className="mt-1 text-blue-500" />

                <span>
                  Mumbai, Maharashtra,
                  India
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SoftTech. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link to="/privacy-policy" className="hover:text-blue-500">
              Privacy Policy
            </Link>

            <Link to="/terms-conditions" className="hover:text-blue-500">
              Terms & Conditions
            </Link>

            <Link to="/cookie-policy" className="hover:text-blue-500">
              Cookie Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;