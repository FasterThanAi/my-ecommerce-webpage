import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p>© 2025 Priyanshu. All rights reserved.</p>
        <p>Created by <Link to="/owner" className="text-blue-400 hover:underline">Priyanshu</Link>.</p>
      </div>
    </footer>
  );
};

export default Footer;