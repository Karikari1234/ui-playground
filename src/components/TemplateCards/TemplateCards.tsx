"use client"

import React, { useState } from 'react';
import Link from 'next/link';

interface Template {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const TemplateCards: React.FC = () => {
  const templates: Template[] = [
    {
      id: 'love-nature',
      title: 'Love Nature',
      description: 'Elegant and serene multipurpose design to build any type of website',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'outdoor-adventure',
      title: 'Outdoor Adventure',
      description: 'Multipurpose template perfect for anyone looking to build a stylish website',
      imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'brandstore',
      title: 'Brandstore',
      description: 'Build the perfect online store using our high-converting Brandstore website template',
      imageUrl: 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TemplateCard: React.FC<{ template: Template }> = ({ template }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <div 
        className="relative h-60 w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={template.imageUrl} 
          alt={template.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        
        {/* Overlay and buttons on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center space-y-3 transition-opacity duration-300">
            <Link href={`/templates/${template.id}`}>
              <button className="bg-white text-gray-800 py-2 px-6 rounded border border-gray-300 hover:bg-gray-100 transition-colors">
                Details
              </button>
            </Link>
            <Link href={`/templates/${template.id}/preview`}>
              <button className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors">
                Live Preview
              </button>
            </Link>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">{template.title}</h3>
        <p className="text-gray-600">{template.description}</p>
      </div>
    </div>
  );
};

export default TemplateCards;