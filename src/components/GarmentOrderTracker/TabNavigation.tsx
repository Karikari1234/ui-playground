import React from 'react';

interface TabNavigationProps {
  activeTab: 'summary' | 'detailed';
  onTabChange: (tab: 'summary' | 'detailed') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex border-b">
      <button
        className={`px-4 py-2 text-sm font-medium ${
          activeTab === 'summary'
            ? 'border-b-2 border-pink-500 text-pink-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => onTabChange('summary')}
      >
        Summary
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium ${
          activeTab === 'detailed'
            ? 'border-b-2 border-pink-500 text-pink-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => onTabChange('detailed')}
      >
        Detailed
      </button>
    </div>
  );
};

export default TabNavigation;
