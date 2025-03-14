import React from 'react';

const ProcessSteps: React.FC = () => {
  return (
    <div className="bg-indigo-700 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          The Fastest Way to Make Professional Websites
        </h2>
        
        <p className="text-white text-lg mb-16 max-w-3xl mx-auto">
          Create professionally designed websites in minutes with Starter Templates. Responsive 
          website templates that look and perform best on any device.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="mb-4 flex justify-center">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm">
                Step 1
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Import in seconds</h3>
            <p className="text-gray-600">
              Import your favorite design quickly and effortlessly.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="mb-4 flex justify-center">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm">
                Step 2
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Customize with Ease</h3>
            <p className="text-gray-600">
              Bring your vision to life by customizing the template and making it your own.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="mb-4 flex justify-center">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm">
                Step 3
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Launch Your Site in No Time</h3>
            <p className="text-gray-600">
              Get your website up and running in record time with our speedy launch process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;