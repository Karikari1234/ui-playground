import React from 'react';

interface HeaderProps {
  styleNumber?: string;
  timeLeft?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  styleNumber = 'GS2023-001',
  timeLeft 
}) => {
  return (
    <div className="bg-pink-500 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1 className="text-white text-xl sm:text-2xl font-semibold">Style Progress Status</h1>
        <div className="text-white text-sm sm:text-base">
          Style #: {styleNumber}
          {timeLeft && (
            <div className="mt-1 sm:mt-0">
              Time left: <span className="font-medium">{timeLeft}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;