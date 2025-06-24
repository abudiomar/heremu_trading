'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import HeremuLogo from './HeremuLogo';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMenu}></div>
          <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-xl">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-3">
                <HeremuLogo className="w-10 h-10" />
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Heremu</h2>
                  <p className="text-xs text-blue-600 font-medium">CHEMICALS</p>
                </div>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <nav className="p-6 space-y-6">
              <Link
                href="/about"
                onClick={toggleMenu}
                className="block text-lg text-gray-600 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/products"
                onClick={toggleMenu}
                className="block text-lg text-gray-600 hover:text-blue-600 transition-colors"
              >
                Products
              </Link>
              <Link
                href="/gallery"
                onClick={toggleMenu}
                className="block text-lg text-gray-600 hover:text-blue-600 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/#services"
                onClick={toggleMenu}
                className="block text-lg text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#contact"
                onClick={toggleMenu}
                className="block text-lg text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <button
                onClick={toggleMenu}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Quote
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
} 