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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="h-12"
            />
          </Link>

          {/* Desktop Menu */}

          <nav className="lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-medium transition duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : isSticky
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-black hover:text-blue-300"
                  }`
                }
              >
                {item.title}

                {item.hasDropdown && (
                  <FaChevronDown className="text-xs mt-0.5" />
                )}
              </NavLink>
            ))}

          </nav>

          {/* CTA */}

          <div className="hidden lg:flex">

            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300"
            >
              Let's Talk
            </Link>

          </div>

          {/* Mobile Icon */}

          <button className="lg:hidden text-3xl">
            <HiBars3
              className={
                isSticky ? "text-gray-900" : "text-white"
              }
            />
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;