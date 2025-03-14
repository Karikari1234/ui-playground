import React from 'react';
import Button from '@/components/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At Test Node App, our mission is to provide a robust and scalable foundation for web applications.
          We believe in creating clean, efficient, and maintainable code that empowers developers to build
          exceptional user experiences.
        </p>
        <p className="text-gray-700 mb-4">
          Our team is dedicated to staying at the forefront of web development technologies and best practices,
          ensuring that our solutions are modern, secure, and performant.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
            <h3 className="text-xl font-medium text-center">Jane Doe</h3>
            <p className="text-gray-600 text-center">Founder & CEO</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
            <h3 className="text-xl font-medium text-center">John Smith</h3>
            <p className="text-gray-600 text-center">Lead Developer</p>
          </div>
          
          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
            <h3 className="text-xl font-medium text-center">Emily Chen</h3>
            <p className="text-gray-600 text-center">UI/UX Designer</p>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Innovation: We continuously explore new technologies and approaches.</li>
          <li>Quality: We are committed to excellence in everything we build.</li>
          <li>Collaboration: We believe in the power of teamwork and open communication.</li>
          <li>User-Centric: We prioritize the needs and experiences of our users.</li>
          <li>Integrity: We conduct our business with honesty and transparency.</li>
        </ul>
      </section>
      
      <div className="text-center mt-8">
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
}