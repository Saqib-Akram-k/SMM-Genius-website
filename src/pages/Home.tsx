import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert digital marketing solutions to grow your business online
          </p>
          <Link 
            to="/pricing" 
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto px-6 py-12">
        <Link 
          to="/services/advertising" 
          className="group relative overflow-hidden rounded-xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80" 
            alt="Advertising Services"
            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <h3 className="text-white text-2xl font-bold">Advertising</h3>
          </div>
        </Link>

        <Link 
          to="/services/content" 
          className="group relative overflow-hidden rounded-xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80" 
            alt="Content Services"
            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <h3 className="text-white text-2xl font-bold">Content</h3>
          </div>
        </Link>

        <Link 
          to="/services/strategy" 
          className="group relative overflow-hidden rounded-xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" 
            alt="Strategy Services"
            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <h3 className="text-white text-2xl font-bold">Strategy</h3>
          </div>
        </Link>
      </div>
    </>
  );
}