import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-blue-200">
            MyApp
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-200">
            Home
          </a>
          <a href="/about" className="hover:text-blue-200">
            About
          </a>
          <a href="/services" className="hover:text-blue-200">
            Services
          </a>
          <a href="/contact" className="hover:text-blue-200">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="/" className="hover:text-blue-200">
              Home
            </a>
            <a href="/about" className="hover:text-blue-200">
              About
            </a>
            <a href="/services" className="hover:text-blue-200">
              Services
            </a>
            <a href="/contact" className="hover:text-blue-200">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
