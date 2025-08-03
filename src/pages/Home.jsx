import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { FaTshirt, FaLaptop, FaBook } from 'react-icons/fa';

// Mock data for featured products
const featuredProducts = [
  { id: 1, name: 'Modern T-Shirt', price: 300.99, imageUrl: 'https://placehold.co/400x400/blue/white?text=T-Shirt' },
  { id: 2, name: 'Slim Laptop', price: 50000.99, imageUrl: 'https://placehold.co/400x400/green/white?text=Laptop' },
  { id: 3, name: 'React Mastery', price: 1000.99, imageUrl: 'https://placehold.co/400x400/orange/white?text=Book' },
  { id: 4, name: 'Wireless Headphones', price: 1990.99, imageUrl: 'https://placehold.co/400x400/purple/white?text=Headphones' },
];

const Home = () => {
  return (
    <div className="space-y-16">
      {/* 1. Hero Section */}
      <section className="bg-gray-900 text-white rounded-lg p-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Summer Collection is Here</h1>
        <p className="text-xl mb-8">Check out the latest trends and get 20% off!</p>
        <Link to="/products">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105">
            Shop Now
          </button>
        </Link>
      </section>
    {/* // categories section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50">
            <FaTshirt className="text-5xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Apparel</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50">
            <FaLaptop className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Electronics</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50">
            <FaBook className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Books</h3>
          </div>
        </div>
      </section>
      
      {/* 3. Featured Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;