import React from 'react';
import Button from '@/components/Button';
import Link from 'next/link';
import Hero from '@/components/Hero';
import TemplateCards from '@/components/TemplateCards';
import ProcessSteps from '@/components/ProcessSteps';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      <TemplateCards />
      <ProcessSteps />
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Next.js Framework</h3>
              <p className="text-gray-600">
                Built on the powerful Next.js framework with App Router for
                efficient page rendering and routing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">TypeScript Support</h3>
              <p className="text-gray-600">
                Full TypeScript integration for enhanced developer experience
                and type safety.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Tailwind CSS</h3>
              <p className="text-gray-600">
                Modern utility-first CSS framework for rapidly building custom
                designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our documentation to learn more about how to use this
            application.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}