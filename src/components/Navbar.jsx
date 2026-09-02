import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array to manage navigation links cleanly
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav 
      className="bg-white fixed w-full top-0 z-50 shadow-sm"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-3xl font-extrabold text-violet-700 tracking-tight">
              Aryan<span className="text-amber-500">.dev</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:-translate-y-0.5 transform inline-block ${
                  link.name === 'Home' 
                    ? 'text-amber-500 font-semibold hover:text-amber-600' 
                    : 'text-slate-600 hover:text-violet-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 bg-amber-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-md shadow-amber-500/30 hover:bg-amber-600 hover:-translate-y-0.5 transition-all text-sm"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-violet-600 focus:outline-none transition-colors"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 shadow-lg space-y-2 absolute w-full">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Closes menu on click
              className={`block px-3 py-2 rounded-md text-base transition-colors ${
                link.name === 'Home' 
                  ? 'text-amber-500 font-semibold' 
                  : 'text-slate-600 font-medium hover:text-violet-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block bg-amber-500 text-white font-semibold text-center px-3 py-3 rounded-full text-base mt-4 shadow-md shadow-amber-500/30"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
