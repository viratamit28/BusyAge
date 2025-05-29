import React from 'react';
import Bcs from '../assets/Busyage logo.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        
        {/* Company Info */}
        <div>

        <img src={Bcs} alt="Logo" className="h-10 p-1 bg-white rounded-md" /> {/* Logo */}
          <p className="text-gray-400 text-sm pt-2">
            Structured movement for doers, builders, and visionaries.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:support@busyage.in" className="hover:text-white transition">support@busyage.in</a></li>
           
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BusyAge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
