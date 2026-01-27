import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#001529] to-[#000a14] text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Brand & Subscribe */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h5 className="font-bold text-xl tracking-wide font-heading">Dekalb Capital Management LLC</h5>
            <p className="text-gray-400 text-sm mt-2">A collective of technical excellence.</p>
          </div>

          
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mb-8 opacity-30"></div>

        {/* Bottom Section: Copyright & Nav Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dekalb Capital Management LLC. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <Link to="/" className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]">About Us</Link>
            <Link to="/teams" className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]">Team</Link>
            <Link to="/news" className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]">News</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;