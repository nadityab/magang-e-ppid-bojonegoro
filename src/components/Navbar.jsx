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
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-20 w-40 mr-2" src={logo} alt="" />
              <div className="text-center">
                <span className="text-xl font-bold tracking-tight text-black">
                  PPID KABUPATEN BOJONEGORO
                </span>
                <hr className="w-full border-t border-gray-400 mt-1" />
                <p className="text-sm text-gray-600">
                  PEJABAT PENGELOLA INFORMASI DAN DOKUMENTASI
                </p>
              </div>
              <ul className="hidden lg:flex ml-14 space-x-12">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li className="py-3" key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
