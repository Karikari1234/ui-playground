import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AstraHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <svg className="h-8 w-8 text-white" viewBox="0 0 40 40" fill="currentColor">
                <circle cx="20" cy="20" r="18" fill="white" />
                <path d="M20 7 L10 30 L20 23 L30 30 Z" fill="#6D28D9" />
              </svg>
              <span className="ml-2 text-xl font-bold">ASTRA</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/starter-templates" className="font-medium hover:text-purple-200">
              Starter Templates
            </Link>
            <Link href="/astra" className="font-medium hover:text-purple-200 flex items-center">
              Astra
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="/pro" className="font-medium hover:text-purple-200">
              Pro
            </Link>
            <Link 
              href="/tracker" 
              className={`font-medium ${pathname === '/tracker' ? 'text-white underline' : 'hover:text-purple-200'}`}
            >
              Tracker
            </Link>
            <Link href="/resources" className="font-medium hover:text-purple-200 flex items-center">
              Resources
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="/pricing" className="font-medium hover:text-purple-200">
              Pricing
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="/get-started" className="inline-flex items-center justify-center px-6 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-purple-700 transition-colors">
              GET STARTED
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-200 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/starter-templates" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">
              Starter Templates
            </Link>
            <Link href="/astra" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">
              Astra
            </Link>
            <Link href="/pro" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">
              Pro
            </Link>
            <Link 
              href="/tracker" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/tracker' ? 'bg-purple-600' : 'hover:bg-purple-600'}`}
            >
              Tracker
            </Link>
            <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">
              Resources
            </Link>
            <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">
              Pricing
            </Link>
            <Link href="/get-started" className="block px-3 py-2 mt-4 text-center rounded-full border border-white text-base font-medium hover:bg-white hover:text-purple-700">
              GET STARTED
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default AstraHeader;