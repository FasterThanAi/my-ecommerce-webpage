import React from 'react';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <MdEmail className="text-6xl text-red-500 mb-4" />
      <h1 className="text-4xl font-bold">Contact Page</h1>
      <p className="text-lg mt-2">Get in touch with us at rishucoder64@gmail.com</p>
    </div>
  );
};

export default Contact;