"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MegaMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuCategories = [
    { id: 'business', label: 'Business & Services' },
    { id: 'creative', label: 'Creative' },
    { id: 'community', label: 'Community' },
    { id: 'ecommerce', label: 'Ecommerce' },
    { id: 'blog', label: 'Blog' },
    { id: 'multipurpose', label: 'Multipurpose' },
  ];

  const menuItems = {
    business: [
      { title: 'Business', items: ['Digital Agency', 'Transport', 'Pet & Animal', 'Landscaping', 'Automotive', 'Consulting', 'Digital Marketing', 'Lawyer', 'Florist & Gardening'] },
      { title: 'Finance', items: ['Accounting', 'Insurance', 'Service', 'Roofing', 'Cleaning', 'Electrician', 'Plumbing', 'Courier', 'Author & Writer'] },
      { title: 'Restaurant', items: ['Food', 'Cafe & Bakery', 'Wine & Winery', 'Catering'] },
      { title: 'Beauty & Fashion', items: ['Makeup & Cosmetic', 'Salon', 'Spa', 'Massage Therapy'] },
      { title: 'Healthcare & Wellness', items: ['Doctor', 'Hospital', 'Dentist & Dental', 'Medical & Clinic', 'Therapist & Psychologist', 'Gym & Fitness', 'Yoga'] },
      { title: 'Travel & Tourism', items: ['Hotel & BnB'] },
      { title: 'Property Management', items: ['Real Estate', 'Construction'] },
    ],
    creative: [
      { title: 'Design', items: ['Portfolio', 'Photography', 'Art Gallery'] },
      { title: 'Media', items: ['Music', 'Video', 'Podcast'] },
    ],
    community: [
      { title: 'Organizations', items: ['Nonprofit', 'Education', 'Religious'] },
      { title: 'Events', items: ['Conference', 'Wedding', 'Sports'] },
    ],
    ecommerce: [
      { title: 'Stores', items: ['Fashion', 'Electronics', 'Furniture', 'Groceries'] },
      { title: 'Services', items: ['Booking', 'Rentals', 'Subscriptions'] },
    ],
    blog: [
      { title: 'Personal', items: ['Lifestyle', 'Travel', 'Food'] },
      { title: 'Professional', items: ['News', 'Magazine', 'Review'] },
    ],
    multipurpose: [
      { title: 'Themes', items: ['Corporate', 'Creative', 'Minimal', 'Modern'] },
      { title: 'Layouts', items: ['One Page', 'Multi Page', 'Landing Page'] },
    ],
  };

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Main Navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <ul className="hidden md:flex space-x-8 py-4">
            {/* Direct Links */}
          {menuCategories.map((category) => (
              <li 
                key={category.id}
                className="relative"
                onMouseEnter={() => handleCategoryHover(category.id)}
              >
                <button 
                  className={`flex items-center font-medium text-sm ${
                    category.id === 'business' ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {category.label}
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden py-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
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
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-4 py-2">
              {/* Mobile menu categories */}
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  className={`block py-2 w-full text-left ${category.id === activeCategory ? 'text-indigo-600' : 'text-gray-700'}`}
                  onClick={() => {
                    if (activeCategory === category.id) {
                      setActiveCategory(null);
                    } else {
                      setActiveCategory(category.id);
                    }
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Mega Menu Dropdown */}
      {activeCategory && (
        <div 
          className="absolute left-0 w-full bg-white shadow-lg z-50 border-t"
          onMouseLeave={() => setActiveCategory(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-4">
              {menuItems[activeCategory as keyof typeof menuItems].map((column, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-gray-900 font-medium mb-2">{column.title}</h3>
                  <ul className="space-y-2">
                    {column.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {/* Image section on the right - only show for certain categories */}
              {activeCategory === 'business' && (
                <div className="hidden lg:block col-span-1 row-span-2">
                  <div className="bg-gray-100 rounded-lg h-full overflow-hidden">
                    <img 
                      src="/api/placeholder/400/300" 
                      alt="Featured template" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;