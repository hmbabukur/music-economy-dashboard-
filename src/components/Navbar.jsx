import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Analytics", path: "/streaming-analytics" },
    { name: "Economy", path: "/economic-impact" },
    { name: "Global Reach", path: "/global-reach" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl shadow-xl sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 transition-all">
      <div className="mx-auto flex items-center justify-between px-12 py-8">
        
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wide">
            Music Economy Dashboard
          </h1>
        </div>

     
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium text-2xl text-gray-700 dark:text-gray-200 transition-colors hover:text-blue-500 px-4 py-2 ${
                location.pathname === link.path
                  ? "text-blue-600 dark:text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold text-2xl rounded-lg shadow-md hover:bg-blue-600 transition-all transform hover:scale-105"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200 text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-3 rounded-b-lg shadow-lg border-t border-gray-200 dark:border-gray-700 transition-all">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-gray-700 dark:text-gray-200 font-medium py-2 px-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="w-full px-4 py-2 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
