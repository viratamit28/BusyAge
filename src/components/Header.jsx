import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { Link } from 'react-router-dom'; // <<< Yahi import missing tha bhai
import BusyageLogo from '../assets/Busyage logo1.png'; // Import your logo image
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-b from-white via-white to-blue-200 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img src={BusyageLogo} alt="Logo" className="h-10 w-30 " /> {/* Logo */}
        <div className="flex items-center space-x-2">
         
        </div>

        {/* Hamburger Icon - always visible */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        <div className="hidden md:flex">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Menu for all screens */}
      {menuOpen && (
        <div className="bg-black bg-opacity-90 text-white">
          
          {/* For small screens */}
          <div className="md:hidden flex flex-col items-center space-y-6 py-10">
            <Link to="/" onClick={toggleMenu} className="text-2xl hover:text-blue-400">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="text-2xl hover:text-blue-400">About Us</Link>
            <Link to="/Ecosystem" onClick={toggleMenu} className="text-2xl hover:text-blue-400">Our Ecosystem</Link>
            <Link to="/Services" onClick={toggleMenu} className="text-2xl hover:text-blue-400">Services</Link>
            <Link to="/Solutions" onClick={toggleMenu} className="text-2xl hover:text-blue-400">Solutions</Link>
            <Link to="/Investor" onClick={toggleMenu} className="text-2xl hover:text-blue-400">Investor Relations</Link>
            <Link to="/Join" onClick={toggleMenu} className="text-2xl hover:text-blue-400">Join the Ecosystem</Link>
            <Link to="/Contact" onClick={toggleMenu} className="text-2xl hover:text-blue-400">Contact Us</Link>
          </div>

          {/* For medium and large screens */}
          <div className="hidden md:flex justify-center space-x-8 p-4">
            <Link to="/" onClick={toggleMenu} className="text-lg hover:text-blue-400">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="text-lg hover:text-blue-400">About Us</Link>
            <Link to="/Ecosystem" onClick={toggleMenu} className="text-lg hover:text-blue-400">Our Ecosystem</Link>
            <Link to="/Services" onClick={toggleMenu} className="text-lg hover:text-blue-400">Services</Link>
            <Link to="/Solutions" onClick={toggleMenu} className="text-lg hover:text-blue-400">Solutions</Link>
            <Link to="/Investor" onClick={toggleMenu} className="text-lg hover:text-blue-400">Investor Relations</Link>
            <Link to="/Join" onClick={toggleMenu} className="text-lg hover:text-blue-400">Join the Ecosystem</Link>
            <Link to="/Contact" onClick={toggleMenu} className="text-lg hover:text-blue-400">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
