import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <FaInfoCircle className="text-6xl text-green-500 mb-4" />
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="text-lg mt-2">This is a page to tell you more about our project.</p>
    </div>
  );
};

export default About;