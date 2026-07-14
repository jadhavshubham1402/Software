import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { navLinks } from "./HeaderData";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isSticky ? "bg-white shadow-xl py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="h-12" />
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-medium transition ${
                    isActive
                      ? "text-blue-500"
                      : isSticky
                        ? "text-gray-800 hover:text-blue-600"
                        : "text-white hover:text-blue-400"
                  }`
                }
              >
                {item.title}

                {item.hasDropdown && <FaChevronDown className="text-xs" />}
              </NavLink>
            ))}
          </nav>

          {/* Button */}

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`px-7 py-3 rounded-full font-semibold transition ${
                isSticky
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-slate-900 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile */}

          <button className="lg:hidden">
            <HiBars3
              className={`text-3xl ${
                isSticky ? "text-gray-800" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
