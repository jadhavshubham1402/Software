import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { navLinks } from "./HeaderData";

const Header = () => {
  const location = useLocation();

  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isParentActive = (item) => {
    return (
      location.pathname === item.path ||
      (item.hasDropdown && location.pathname.startsWith(item.path + "/"))
    );
  };

  // Close dropdown when clicking a sub-item
  const handleSubItemClick = () => {
    setMobileMenu(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              className="h-12 transition-transform group-hover:scale-105"
              alt="logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <div key={item.id} className="relative group">
                <NavLink
                  to={item.path}
                  className={`flex items-center gap-2 font-medium text-lg transition-all duration-300 pb-1 relative
                    ${
                      isParentActive(item)
                        ? "text-blue-600"
                        : isSticky
                          ? "text-gray-800 hover:text-blue-600"
                          : "text-white hover:text-blue-300"
                    }`}
                >
                  {item.title}
                  {item.hasDropdown && (
                    <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                  )}

                  {isParentActive(item) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded" />
                  )}
                </NavLink>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute left-0 top-full mt-4 w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 py-3 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    {item.dropdownItems.map((sub, i) => (
                      <NavLink
                        key={i}
                        to={sub.path}
                        className={({ isActive }) =>
                          `block px-6 py-3.5 text-[15px] transition-all hover:bg-blue-50
                          ${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`
                        }
                      >
                        {sub.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 text-base shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5 ${
                isSticky
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-gray-900 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenu(true)} className="lg:hidden p-2">
            <HiBars3
              className={`text-4xl transition-all ${isSticky ? "text-gray-900" : "text-white"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[100] transition-all duration-500 ease-out ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <img src="/images/logo.png" className="h-11" alt="logo" />
            <button onClick={() => setMobileMenu(false)} className="p-2">
              <HiXMark className="text-4xl text-gray-700" />
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-100 last:border-none"
              >
                <div className="flex justify-between items-center py-4">
                  <NavLink
                    to={item.path}
                    onClick={() => {
                      setMobileMenu(false);
                      setOpenDropdown(null);
                    }}
                    className={`text-xl font-medium transition ${isParentActive(item) ? "text-blue-600" : "text-gray-800"}`}
                  >
                    {item.title}
                  </NavLink>

                  {item.hasDropdown && (
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.id ? null : item.id,
                        )
                      }
                      className="text-gray-500 p-1"
                    >
                      <FaChevronDown
                        className={`transition-transform ${openDropdown === item.id ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Dropdown Items */}
                {item.hasDropdown && openDropdown === item.id && (
                  <div className="pl-6 pb-4 space-y-3">
                    {item.dropdownItems.map((sub, index) => (
                      <NavLink
                        key={index}
                        to={sub.path}
                        onClick={handleSubItemClick}
                        className={({ isActive }) =>
                          `block py-2 text-[17px] transition ${isActive ? "text-blue-600 font-medium" : "text-gray-600"}`
                        }
                      >
                        {sub.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
            className="block text-center mt-10 bg-blue-600 text-white rounded-2xl py-4 font-semibold text-lg shadow-lg"
          >
            Let's Talk
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/60 lg:hidden z-50"
        />
      )}
    </header>
  );
};

export default Header;
