import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navItems } from "../constants";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 py-3 bg-white border-b border-neutral-700/80">
        <div className="container px-4 mx-auto flex justify-between items-center">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <img className="h-20 w-40 mr-2" src={logo} alt="Logo" />
            <div className="text-center">
              <span className="text-xl font-bold tracking-tight text-black">
                PPID KABUPATEN BOJONEGORO
              </span>
              <hr className="w-full border-t border-gray-400 mt-1" />
              <p className="text-sm text-gray-600">
                PEJABAT PENGELOLA INFORMASI DAN DOKUMENTASI
              </p>
            </div>
          </div>

          {/* Navbar Menu (Desktop) */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Burger Menu Button (Mobile) */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="p-2">
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Drawer */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
              mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleNavbar}>
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col items-start px-6 space-y-4">
              {navItems.map((item, index) => (
                <li key={index} className="py-2">
                  <a href={item.href} className="text-lg font-semibold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
