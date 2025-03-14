import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Test Node App' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/tracker" className="text-gray-600 hover:text-blue-600 transition-colors">
                Tracker
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2 bg-white border-t">
            <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/features" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="/tracker" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
              Tracker
            </Link>
            <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;