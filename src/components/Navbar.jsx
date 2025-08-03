import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold gap-2">
          <FaReact className="text-cyan-400" />
          <span>E-Commerce</span>
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;