import React from 'react';

interface CircularProgressIndicatorProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const CircularProgressIndicator: React.FC<CircularProgressIndicatorProps> = ({
  progress,
  size = 32,
  strokeWidth = 5, // Increased from 3 to 5 for bolder outline
  index,
  isActive,
  onClick
}) => {
  // Ensure progress is within valid range (0-100)
  const validProgress = Math.min(Math.max(0, progress), 100);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (validProgress / 100) * circumference;
  const center = size / 2;
  
  // Determine color based on progress
  const getProgressColor = () => {
    if (validProgress === 100) return '#10B981'; // green-500 for completed
    if (validProgress >= 70) return '#34D399'; // green-400 for high progress
    if (validProgress >= 30) return '#FBBF24'; // yellow-400 for medium progress
    return '#F87171'; // red-400 for low progress
  };
  
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="white"
          stroke="#E5E7EB" // gray-200 (lighter for better contrast)
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={getProgressColor()}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Text in the center */}
      <div 
        className={`absolute inset-0 flex items-center justify-center text-sm font-medium
          ${isActive ? 'text-gray-900' : 'text-gray-500'}`}
      >
        {index + 1}
      </div>
      
      {/* Optional: Add a title attribute for accessibility/tooltip */}
      <title>{`${validProgress}% complete`}</title>
    </div>
  );
};

export default CircularProgressIndicator;