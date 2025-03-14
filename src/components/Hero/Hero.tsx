import React from 'react';

const Hero = () => {
  return (
    <div className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Find Your Ideal Website Template
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          300+ pre-built websites with one-click installer
        </p>
        
        <div className="flex flex-wrap items-center mb-4">
          {/* Counter digits with commas */}
          <div className="flex flex-wrap items-center">
            <span className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-gray-300 rounded bg-white text-sm sm:text-lg md:text-xl font-semibold text-gray-700 mr-1 sm:mr-2">2</span>
            <span className="text-sm sm:text-lg md:text-xl font-semibold text-gray-700 mr-1 sm:mr-2">,</span>
            <span className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-gray-300 rounded bg-white text-sm sm:text-lg md:text-xl font-semibold text-gray-700 mr-1 sm:mr-2">3</span>
            <span className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-gray-300 rounded bg-white text-sm sm:text-lg md:text-xl font-semibold text-gray-700 mr-1 sm:mr-2">7</span>
            <span className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-gray-300 rounded bg-white text-sm sm:text-lg md:text-xl font-semibold text-gray-700 mr-1 sm:mr-2">0</span>
            <span className="text-sm sm:text-lg md:text-xl font-semibold text-gray-700 mr-1 sm:mr-2">,</span>
            <span className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-gray-300 rounded bg-white text-sm sm:text-lg md:text-xl font-semibold text-gray-700 mr-1 sm:mr-2">9</span>
            <span className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-gray-300 rounded bg-white text-sm sm:text-lg md:text-xl font-semibold text-gray-700 mr-1 sm:mr-2">6</span>
            <span className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-gray-300 rounded bg-white text-sm sm:text-lg md:text-xl font-semibold text-gray-700 mr-1 sm:mr-2">1</span>
          </div>
        </div>
        
        <p className="text-base sm:text-lg font-medium text-gray-700">
          Websites Successfully Live
        </p>
        
        {/* Search field (shown in the image) */}
        <div className="mt-8 max-w-2xl">
          <div className="relative flex items-center">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for templates"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;