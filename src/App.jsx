import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Owner from './pages/Owner'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
        <main className="flex-grow container mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/owner" element={<Owner />} /> 
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;