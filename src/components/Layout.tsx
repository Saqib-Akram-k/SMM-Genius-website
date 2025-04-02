import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-white text-2xl font-bold">SMM Genius</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/services/advertising" className="text-white hover:text-blue-200">Advertising</Link>
              <Link to="/services/content" className="text-white hover:text-blue-200">Content</Link>
              <Link to="/services/strategy" className="text-white hover:text-blue-200">Strategy</Link>
              <Link to="/portfolio" className="text-white hover:text-blue-200">Portfolio</Link>
              <Link to="/pricing" className="text-white hover:text-blue-200">Pricing</Link>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SMM Genius</h3>
              <p className="text-gray-400">
                Your partner in digital marketing excellence
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Email: contact@smmgenius.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SMM Genius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}