import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logoWhite.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#001529] to-[#000a14] text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-2">
          <div className="text-center md:text-left">
              <img src={logo} alt="Dekalb Capital Management LLC" className="h-14 md:h-20 hover:opacity-80 transition-opacity duration-300" />
          </div>
        </div>

        <div className="border-t border-slate-700 mb-8 opacity-30"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dekalb Capital Management LLC. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <Link to="/" className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]">About Us</Link>
            <Link to="/teams" className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]">Team</Link>
            {/* <Link to="/news" className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]">News</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;