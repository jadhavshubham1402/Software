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
              <div key={item.id} className="relative group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 font-medium transition duration-300 ${
                      isActive
                        ? "text-blue-500"
                        : isSticky
                          ? "text-gray-800 hover:text-blue-600"
                          : "text-white hover:text-blue-400"
                    }`
                  }
                >
                  {item.title}

                  {item.hasDropdown && (
                    <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </NavLink>

                {/* Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute left-0 top-full mt-4 w-64 rounded-xl bg-white shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                    {item.dropdownItems.map((subItem, index) => (
                      <NavLink
                        key={index}
                        to={subItem.path}
                        className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-xl last:rounded-b-xl"
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
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
