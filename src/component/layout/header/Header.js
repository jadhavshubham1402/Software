import { useEffect, useState } from "react";
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}

          <Link to="/">
            <img src="/images/logo.png" className="h-12" alt="logo" />
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <div key={item.id} className="relative group">
                <NavLink
                  to={item.path}
                  className={`flex items-center gap-2 font-medium transition ${
                    isParentActive(item)
                      ? "text-blue-600"
                      : isSticky
                        ? "text-gray-800 hover:text-blue-600"
                        : "text-white hover:text-blue-400"
                  }`}
                >
                  {item.title}

                  {item.hasDropdown && (
                    <FaChevronDown className="text-xs transition duration-300 group-hover:rotate-180" />
                  )}
                </NavLink>

                {item.hasDropdown && (
                  <div className="absolute left-0 top-full mt-5 w-64 rounded-xl bg-white shadow-xl border opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    {item.dropdownItems.map((sub, i) => (
                      <NavLink
                        key={i}
                        to={sub.path}
                        className={({ isActive }) =>
                          `block px-5 py-3 transition ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          }`
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

          {/* Button */}

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`px-7 py-3 rounded-full font-semibold transition ${
                isSticky
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-blue-600 hover:text-white"
              }`}
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Icon */}

          <button onClick={() => setMobileMenu(true)} className="lg:hidden">
            <HiBars3
              className={`text-3xl ${isSticky ? "text-black" : "text-white"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[100] transition-all duration-300 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <img src="/images/logo.png" className="h-10" alt="" />

            <button onClick={() => setMobileMenu(false)}>
              <HiXMark className="text-3xl" />
            </button>
          </div>

          <div className="space-y-2">
            {navLinks.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between items-center">
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileMenu(false)}
                    className={`py-3 font-medium ${
                      isParentActive(item) ? "text-blue-600" : "text-gray-700"
                    }`}
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
                    >
                      <FaChevronDown
                        className={`transition ${
                          openDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.hasDropdown && openDropdown === item.id && (
                  <div className="ml-4 mt-2 border-l">
                    {item.dropdownItems.map((sub, index) => (
                      <NavLink
                        key={index}
                        to={sub.path}
                        onClick={() => setMobileMenu(false)}
                        className={({ isActive }) =>
                          `block py-3 pl-4 ${
                            isActive
                              ? "text-blue-600 font-semibold"
                              : "text-gray-600"
                          }`
                        }
                      >
                        {sub.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="block text-center mt-6 bg-blue-600 text-white rounded-full py-3"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}

      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/40 lg:hidden z-50"
        />
      )}
    </header>
  );
};

export default Header;
