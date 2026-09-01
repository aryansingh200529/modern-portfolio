import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="bg-white fixed w-full top-0 z-50 shadow-sm"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-extrabold text-violet-700 tracking-tight">
              Aryan<span className="text-amber-500">.dev</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-amber-500 font-semibold hover:text-amber-600 transition-colors text-base">Home</a>
              <a href="#about" className="text-slate-600 font-medium hover:text-violet-600 transition-colors text-base">About</a>
              <a href="#projects" className="text-slate-600 font-medium hover:text-violet-600 transition-colors text-base">Projects</a>
              <a href="#contact" className="bg-amber-500 text-white font-semibold px-7 py-2.5 rounded-full shadow-md shadow-amber-500/30 hover:bg-amber-600 hover:-translate-y-0.5 transition-all">
                Contact Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 shadow-lg space-y-2 absolute w-full">
          <a href="#home" className="block text-amber-500 font-semibold px-3 py-2 rounded-md text-base">Home</a>
          <a href="#about" className="block text-slate-600 hover:text-violet-600 font-medium px-3 py-2 rounded-md text-base transition-colors">About</a>
          <a href="#projects" className="block text-slate-600 hover:text-violet-600 font-medium px-3 py-2 rounded-md text-base transition-colors">Projects</a>
          <a href="#contact" className="block bg-amber-500 text-white font-semibold text-center px-3 py-3 rounded-full text-base mt-4 shadow-md shadow-amber-500/30">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;