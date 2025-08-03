import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-1">₹{product.price.toFixed(2)}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;