import React from 'react';
import { FaUserCircle, FaEnvelope } from 'react-icons/fa';

const Owner = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Owner Details</h1>
        
        <div className="flex items-center justify-center gap-4 mb-4">
          <FaUserCircle className="text-2xl text-gray-700" />
          <p className="text-xl">Priyanshu Kumar</p>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <FaEnvelope className="text-2xl text-gray-700" />
          <a 
            href="mailto:rishucoder64@gmail.com" 
            className="text-xl text-blue-600 hover:underline"
          >
            rishucoder64@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Owner;