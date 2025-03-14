import React from 'react';
import Button from '@/components/Button';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Features</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="bg-blue-100 text-blue-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-3">Lightning Fast Performance</h2>
          <p className="text-gray-600 mb-4">
            Optimized for speed with server-side rendering, automatic code splitting, and efficient static site generation capabilities.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
            <li>Server-side rendering for optimal performance</li>
            <li>Automatic code splitting for faster page loads</li>
            <li>Static site generation for blazing fast static pages</li>
          </ul>
        </div>
        
        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="bg-green-100 text-green-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-3">Developer Experience</h2>
          <p className="text-gray-600 mb-4">
            Built with the latest technologies to provide an exceptional developer experience.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
            <li>TypeScript for type safety and better tooling</li>
            <li>ESLint and Prettier for code quality</li>
            <li>Fast Refresh for instant feedback during development</li>
          </ul>
        </div>
        
        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="bg-purple-100 text-purple-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-3">Responsive Design</h2>
          <p className="text-gray-600 mb-4">
            Built with Tailwind CSS for beautiful, responsive designs across all devices.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
            <li>Mobile-first approach for optimal user experience</li>
            <li>Utility-first CSS for rapid UI development</li>
            <li>Custom design system for consistent branding</li>
          </ul>
        </div>
        
        {/* Feature 4 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="bg-yellow-100 text-yellow-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-3">Security</h2>
          <p className="text-gray-600 mb-4">
            Built with security best practices to protect your application and user data.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
            <li>Secure authentication with JWT tokens</li>
            <li>HTTPS by default for secure communication</li>
            <li>Protection against common web vulnerabilities</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Start Building Today
          </Button>
        </Link>
      </div>
    </div>
  );
}