import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold">Logo</div>

        {/* Navbar items */}
        <div className="hidden md:flex space-x-4">
          <NavItem link="#">Home</NavItem>
          <NavItem link="#">Skills</NavItem>
          <NavItem link="#">Work</NavItem>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button
            className="text-white p-2 focus:outline-none"
            onClick={() => console.log('Toggle mobile menu')}
          >
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ link, children }) => {
  return (
    <a href={link} className="text-white hover:text-gray-300">
      {children}
    </a>
  );
};

export default Navbar;
